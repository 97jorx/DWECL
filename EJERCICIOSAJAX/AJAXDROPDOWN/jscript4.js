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
                    .appendTo('#provincia');
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
            $('#municipio').children().remove();
             $.each(jsonData, function (clave, valor) {
                 $(`<option value="${clave}">${valor}</option>`)
                     .appendTo('#municipio');
             });
        });
    });
});





