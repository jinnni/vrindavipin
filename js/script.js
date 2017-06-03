$(document).ready(function(){
  initCarousel();
  $(".action").on("click",function(event){
    action(event.target);
  });
});
function initCarousel(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    navClass:["owl-prev fa fa-chevron-left","owl-next fa fa-chevron-right"],
    navText:["",""],
    responsive:{
      0:{
        items:1,
        nav:true,
        loop:false
      },
      1000:{
        items:1,
        nav:true,
        loop:false
      }
    }
  });
}
function action(target){
  var welcomeComp = $(".welcome");
	switch(target.id){
   case "eng_btn":
      changeContentToEnglish();
   case "hin_btn":
      changeContentToHindi();
   case "close_btn":
      $(".container").removeClass("blured");
			welcomeComp.fadeOut("fast");
      break;
   case "social-media":
      $(".container__social-media").toggleClass("slide-left");
      break;
   case "menu_btn":
   case "menu_close_btn":
      $(".container__navbar").toggleClass("expanded");
      break;
   case "":
      break;
	}
}

function changeContentToHindi(){}

function changeContentToEnglish(){}
