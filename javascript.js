$(document).ready(function(){
    $(".butn").click( function(){
        $(this).nextAll(".menu").toggle(100);
    });
});