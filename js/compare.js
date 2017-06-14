var image_arrays = [
  {"oldImgPath":"https://placeimg.com/640/480/nature","newImgPath":"https://placeimg.com/640/480/arch","title":"title1","year":"1990","description":"ryyregtyuterteyrg"},
  {"oldImgPath":"https://placeimg.com/640/480/arch","newImgPath":"https://placeimg.com/640/480/animals","title":"title2","year":"1991","description":"jrtugtyuretregtreyg"},
  {"oldImgPath":"https://placeimg.com/640/480/animals","newImgPath":"https://placeimg.com/640/480/people","title":"title3","year":"1992","description":"eyyrheygtyregyregyreg"},
  {"oldImgPath":"https://placeimg.com/640/480/people","newImgPath":"https://placeimg.com/640/480/tech","title":"title4","year":"1993","description":"euryuwerfyuwgryuwgfy"},
  {"oldImgPath":"https://placeimg.com/640/480/tech","newImgPath":"https://placeimg.com/640/480/nature","title":"title5","year":"1994","description":"rygfrygtfyrgyugrtetg"}
];
$(document).ready(function(){
  logo();
  createCarousel();
});
function logo(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.font = '40px "PirataOne"';
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.fillText("Vrindavipin.org", canvas.width/2, canvas.height/2);
}
function createCarousel(){
  var arrayLength = image_arrays.length;
  //alert(arrayLength);
  for(index in image_arrays){
    var carousel_list = document.createElement("div");
    carousel_list.setAttribute("class","owl-carousel li"+index);
    $(".carousel_wrapper").append(carousel_list);
    var temp = '<div class="owl-item"><img src='+image_arrays[index].oldImgPath+'></div><div class="owl-item"><img src='+image_arrays[index].newImgPath+'></div>';
    $(".li"+index).html(temp);
    initCarousel(".owl-carousel",image_arrays[index],".li"+index);
  }
}
function initCarousel(element,describe,sec_elem){
  $(element).owlCarousel({
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
  $(sec_elem).append('<div class="describe"><h1>'+describe.title+' : '+describe.year+'</h1><p>'+describe.description+'</p><a href="#"><i>read more...</i></a></div>');
}
