$(document).ready(function(){
  logo();
  initCarousel();
  $(".action").on("click",function(event){
    action(event.target);
  });
  social_media();
});
function audio(){
  var mp3 =  document.getElementById("welcome_audio");
  mp3.play();
  mp3.loop = true;
}
function logo(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.font = '40px "PirataOne"';
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.fillText("Vrindavipin.org", canvas.width/2, canvas.height/2);
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
  setTimeout(function(){
    $(".container__social-media").toggleClass("slide-left");
  },500);
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
      break;
   case "social-media":
      $(".container__social-media").toggleClass("slide-left");
      break;
   case "menu_btn":
   case "menu_close_btn":
      $(".container__navbar").toggleClass("expanded");
      break;
   case "searchbtn":
       var searchkeyword = $("#searchbar").val();
       var url = "https://en.wikipedia.org/?curid=";
       var url =
         "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=max&format=json&exsentences=1&exintro=&explaintext=&generator=search&gsrlimit=10&gsrsearch="+ searchkeyword;
       if($(target).hasClass("fa-times"))
       {
          $(target).addClass("fa-search").removeClass("fa-times");
          $('.result').empty();
          $("input").val();
       }
       else{
          $(target).addClass("fa-times").removeClass("fa-search");
          ajaxCall(url,searchkeyword);
       }
      break;
    case "":

       break;
	}
}

function changeContentToHindi(){}

function changeContentToEnglish(){}

function ajaxCall(url,searchkeyword){
  var isfound=false;
  var str ='No Results Found';
  $.ajax({
   url:url,
   dataType: 'jsonp',
   method : 'GET',
   contentType: "application/json; charset=utf-8",
   success:function(data){
     isfound=true;
     if(data.query == undefined){
       return false;
     }else{
       if(data.batchcomplete == "" && data.query==undefined || data.query.pages == undefined){
         isfound=false;
         $('.result').html('<h1>'+str+" : "+searchkeyword+'</h1>');
         return false;
       }
       searchTemplate(data,str,searchkeyword);
     }
   }
 })
}

function searchTemplate(data,str,searchkeyword){
  $('.result').empty();
  $.each(data.query.pages,function(index,element){
  $('.result').append('<div class="item"><div class="item__header"><h2>'+element.title+'</h2></div><div class="item__content"><p>'+element.extract+'</p></div><div class="item__footer"><a href="https://en.wikipedia.org/?curid='+element.pageid+' target="_blank">Visit Page</a></div></div>')
  });
}
