$(document).ready(() => {
    $("#boton").on('click', () => {
        cursos();
    });
});
function cursos() {
    data = $(this).serialize();
    input = $('#inputCurso').val();
    curso = ['1DAW', '2DAW']
    validar = /(1DAW|2DAW)/g.test(input) ? true
        : alert(`Se ha introducido el valor incorrecto ${input}`);
    $.ajax({
        type: "POST",
        url: "servidor.php",
        data: data,
        success: (data) => {
            $('#1daw').empty();
            validar;
            $.each(data, (i) => {
                $.each(data, (k) => {
                    if (input === curso[k]) {
                        $('#1daw').append(`<li>${data[i][k].nombre}\t
                        ${data[i][k].dni}\t${data[i][k].acceso}
                        </li>`)
                    }
                });
            });
        }
    });
}


