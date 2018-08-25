$(document).ready(function(){
    $("#clickMe").click(function(){
        $(".overlay").toggleClass("blue");
        $(".container").toggleClass("noScroll");
        $(".invert").toggleClass("invertClickMe");
    });

    $(".trigger li a").hover(function(){
      var imgLink = $(this).attr('data-imgLink');
      $('#' + imgLink).toggle();

  });

});
