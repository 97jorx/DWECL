$(function () {
  $.datepicker.regional['es'] = {
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    dateFormat: 'MM yy',
    closeText: 'Cerrar',
    prevText: ' nextText: Sig>',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié;', 'Juv', 'Vie', 'Sáb'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['es']);
  $.datepicker.setDefaults($.datepicker.regional['es']);


  $("#date").datepicker({
    showOn: "button",
    buttonImage: "images/calendar.png",
    buttonImageOnly: false,
    buttonText: "Select date"

  });


  $.widget("custom.iconselectmenu", $.ui.selectmenu, {
    _renderItem: function (ul, item) {
      var li = $("<li>"),
        wrapper = $("<div>", { text: item.label });

      if (item.disabled) {
        li.addClass("ui-state-disabled");
      }

      $("<span>", {
        style: item.element.attr("data-style"),
        "class": "ui-icon " + item.element.attr("data-class")
      })
        .appendTo(wrapper);

      return li.append(wrapper).appendTo(ul);
    }
  });

  $("#gender")
    .iconselectmenu()
    .iconselectmenu("menuWidget")
    .addClass("ui-menu-icons");


  $("fieldset:eq(0)>input").checkboxradio();
  $("fieldset:eq(1)>input").checkboxradio({
    icon: false
  });

  var select = $("#checkbox");
  console.log(select)

  var modulos = ["", "1", "2", "3", "4", "5"];
  $("#slider").slider({
    value: 1,
    min: 1,
    max: 5,
    step: 1,
    slide: function (event, ui) {
      $("#days").val(ui.value);
      $("#vslider").html(modulos[ui.value]);
    }
  });
  $("#days").val($("#slider").slider("value"));
  $("#vslider").html(modulos[$("#slider").slider("value")]);



  $("#minbeds").on("change", function () {
    slider.slider("value", this.selectedIndex + 1);
  });

  function log(message) {
    $("<div>").text(message).prependTo("#log");
    $("#log").scrollTop(0);
  }


  $("#tags").autocomplete({
    source: function (request, response) {
      var searchText = extractLast(request.term);
      $.ajax({
        url: "servidorTags.php",
        type: 'post',
        dataType: "json",
        data: {
          search: searchText
        },
        success: function (data) {
          response($.ui.autocomplete.filter(
            data, extractLast(request.term)));
        }
      });
    },
    search: function () {
      var term = extractLast($('#tags').val());
      if (term.length < 1) {
        return false;
      }
    },
    focus: function () {
      return false;
    },
    select: function (event, ui) {
      var terms = split($('#tags').val());
      terms.pop();
      terms.push(ui.item.label);
      terms.push("");
      $('#tags').val(terms.join(", "));
      return false;
    }
  });
  function split(val) {
    return val.split(/,\s*/);
  }
  function extractLast(term) {
    return split(term).pop();
  }

  $('#button2').click(function (event) {
    event.preventDefault();
    $("#mensaje").dialog({
      resizable: false,
      height: "auto",
      width: 500,
      modal: true,
      buttons: {
        Ok: function () {
          console.log('hola');
          $.ajax({
            type: "GET",
            url: "servidor.php",
            dataType: "text",
            success: function (data) {
              $('#mensaje2').text(data);
              $("#mensaje2").dialog({
                resizable: false,
                height: "auto",
                width: 500,
                modal: true,
              });
            }
          });
          $(this).dialog("close");
        },
        Cancel: function () {
          $(this).dialog("close");
        }
      }
    });
  });



  $("#button2").button();
  $("#button").button({
    icon: "ui-icon-trash",
    showLabel: false
  });
  $("#button3").button({
    showLabel: true,
    icon: "ui-icon-print",
  });


  $('#button3').click(function () {
    $("#progressbar").show();
  });

  $("#progressbar").hide();
  $("#progressbar").progressbar({
    value: 0, max: 5
  });
  var val = 0, progreso;

  $('#button3').click(function (event) {
    event.preventDefault();
    function pararProgreso() {
      clearInterval(progreso);

      $("#progressbar").progressbar({
        value: 0
      });
    }

    progreso = setInterval(function () {
      val++;

      $("#progressbar").progressbar({
        value: val
      });
      if (val == 5) {
        clearInterval(progreso)
        window.print();
        pararProgreso();
        $("#progressbar").hide();
      };
    }, 1000);
  });




});


