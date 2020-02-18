$(document).ready(function () {
    $("#boton").on('click', function (event) {
        event.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "servidor.php",
            data: data,
            success: function (data) {  
                $('#1daw').children().remove();
                $('#2daw').children().remove();
                $.each(data, function (i) {
                    $('#1daw').append(`<li>
                        ${data[i][0].nombre}\t
                        ${data[i][0].dni}\t
                        ${data[i][0].acceso}
                        </li>`)
                    $('#2daw').append(`<li>
                        ${data[i][1].nombre}\t
                        ${data[i][1].dni}\t
                        ${data[i][1].acceso}
                        </li>`)
                });
            }
        });
    });
});
