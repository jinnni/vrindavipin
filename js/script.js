var collapseInterval;
$(document).ready(function(){
  logo();
  initCarousel();
  $(".action").on("click",function(event){
    action(event.target);
  });
});
function audio(){
  var mp3 =  document.getElementById("welcome_audio");
  //mp3.play();
  mp3.loop = true;
}
function logo(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.font = '40px "PirataOne"';
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.fillText("Vrindavipin.org", canvas.width/2, canvas.height/1.4);
}
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
function social_media(){
  collapseInterval = setInterval(function(){
    $(".container__social-media").toggleClass("slide-left");
  },1500);
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
      audio();
      //social_media();
      break;
   case "social-media":
      // clearInterval(collapseInterval);
      // $(".container__social-media").toggleClass("slide-left");
      break;
   case "menu_btn":
   case "menu_close_btn":
      $(".container__navbar").toggleClass("expanded");
      break;
	}
}

function changeContentToHindi(){}

function changeContentToEnglish(){}
