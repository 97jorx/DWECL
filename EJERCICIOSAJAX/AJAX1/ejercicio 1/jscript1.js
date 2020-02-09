$(document).ready(function () {
    $("#formulario").submit(function (event) {
        event.preventDefault();
        var data = $("#formulario").serialize();
        $.ajax({
            type: "POST",
            url: '/servidor.php',
            data: data,
            success: function (data) {
                $('.mensaje').html(data);
                console.log(data)
            },
            
        });
    });
});