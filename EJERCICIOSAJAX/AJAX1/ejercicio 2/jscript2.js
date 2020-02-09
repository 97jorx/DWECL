$(document).ready(function () {
    $("button").on('click', function (event) {
        event.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "/servidor.php",
            data: data,
            success: function(data){
                $('div').each(function(i){
                    $(`h3:eq(${i})`).append(`${data[i].name}`)
                    $(`p:eq(${i})`).append(`${data[i].price}`)
                });
            }
        });
    });
});





