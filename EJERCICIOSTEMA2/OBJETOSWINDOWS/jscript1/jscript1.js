
var windowopen = "";

function fc() {
    op = document.getElementById("select_id").value;
    switch (op) {
        case '1':
            document.getElementById("demo").innerHTML = "Hola";
            break;
        case '2':
            windowopen = window.open('url.html',
                'Sample', 'toolbar=no,width=500,height=250,left=500,top=200,status=no,scrollbars=no,resize=no');
            break;
        case '3':
            windowopen.close();
            break;
        case '4':
            windowopen.focus();
            break;
        case '5':
            windowopen.blur();
            break;
        case '6':
            windowopen.scrollTo(50, 30);
            break;
        case '7':
            windowopen.scrollBy(50, 30);
            break;
        default:

    }


}