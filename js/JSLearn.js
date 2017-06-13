
//document.getElementById('demo').innerHTML = "My First JavaScript";

$(document).ready(function (){
    $("p").click(function (){
        $(this).hide();
    });
});