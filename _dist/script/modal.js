$(document).ready(function(){
    $("#clickMe").click(function(){
        $(".overlay").toggleClass("blue");
        $(".container").toggleClass("noScroll");
        $(".invert").toggleClass("invertClickMe");
    });
});
