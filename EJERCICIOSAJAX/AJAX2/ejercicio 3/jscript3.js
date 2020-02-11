$(document).ready(function () {
    $("button").on('click', function (event) {
        event.preventDefault();
        var data = $(this).serialize();
        var ul = $('.flight-times');
        $.ajax({
            type: "POST",
            url: "/servidor.php",
            data: data,
            success: function (data) {
                $.each(data, function (i) {
                    $(ul)
                        .append(`<li>${data[i].flightNumber}\t
                     ${data[i].time}</li>`)
                });
            }
        });
    });
});





