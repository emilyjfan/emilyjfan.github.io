$(document).ready(function (){

  $("#nav-section-1").click(function (){
    $('body').animate({
      scrollTop: $("#section-1").offset().top
    }, 2000);
  });

  $("#nav-section-2").click(function (){
    $('body').animate({
      scrollTop: $("#section-2").offset().top
    }, 2000);
  });

  $("#nav-section-3").click(function (){
    $('body').animate({
      scrollTop: $("#section-3").offset().top
    }, 2000);
  });

  $("#nav-section-4").click(function (){
    $('body').animate({
      scrollTop: $("#section-4").offset().top
    }, 2000);
  });

});