$(document).ready(() => {
    $("#boton").on('click', () => {
        cursos();
    });
});
function cursos() {
    data = $(this).serialize();
    input = $('#inputCurso').val();
    curso = ['1DAW', '2DAW'];
    validar = /(1DAW|2DAW)/g.test(input) ? true
        : alert(`Se ha introducido el valor incorrecto ${input}`);
    $.ajax({
        type: "POST",
        url: "servidor.php",
        data: data,
        success: (data) => {
            validar;
            $('#padre').empty();
            $('#padre').append(`<table id="table"><tr><th>NOMBRE</th>
                 <th>DNI</th><th>ACCESO</th></tr></table>`);
            $.each(data, (i) => {
                $.each(data, (k) => {
                    if (input === curso[k]) {
                        $('#table').append(`<tr>
                    <td>${data[i][k].nombre}</td>
                    <td>${data[i][k].dni}</td>
                    <td>${data[i][k].acceso}</td>
                    </tr>`)
                    }
                });
            });
        }
    });
}


