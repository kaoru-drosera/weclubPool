$(function(){

  $(".jQcontents").click(function(){
    var $docs = $(this).find('.jQdocs');
    if($docs.hasClass(".open")){
      $docs.removeClass(".open");
      $docs.slideUp();
      $(this).find("span").text("+");
    }else{
      $docs.addClass(".open");
      $docs.slideDown();
      $(this).find("span").text("-");

    };
  });


});
