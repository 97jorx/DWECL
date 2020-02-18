$(document).ready(function () {
    var data = $(this).serialize();
    $.ajax({
        type: "GET",
        url: "cargaProvinciasJSON.php",
        data: data,
        dataType: 'json',
        success: function (data) {
            $.each(data, function (clave, valor) {
                $(`<option value="${clave}">${valor}</option>`)
                .appendTo('#provincia').attr('value', ordenar());
            });
        }
    });

    $('#provincia').change(function () {
        var proval = $("#provincia option:selected").val();
        console.log(proval);
        $.ajax({
            type: "POST",
            url: "cargaMunicipiosJSON.php",
            data: { provincia: proval },
        }).done(function (data) {
            var jsonData = $.parseJSON(data);
            $('#municipio').empty();
            $.each(jsonData, function (clave, valor) {
                $(`<option value="${clave}">${valor}</option>`)
                    .appendTo('#municipio').attr('value', ordenar());
            });
        });
    });
});

function ordenar(){
    $("select").each(function(index,elem) {    
        var listaActual = elem;
        var sel = listaActual.selectedIndex;
        $(listaActual).html($("option", $(this)).sort(function(a, b) {
              return a.value == b.value ? 0 : a.value < b.value ? -1 : 1;
        }));
        $(listaActual).prop('selectedIndex', sel); 
    });
}
