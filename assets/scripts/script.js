console.log("script linked");


let images = document.querySelectorAll(".bread-wheel-image");
let imageContainers = document.querySelectorAll(".bread-wheel-container");

var imagesNum = images.length;
let rotation = 1;
let indexOfFocus = 0;
let degrees = 0;
let smallImageWheelDimension = "120px";
let largeImageWheelDimension = "220px";



function addImageLayover(direction) {
  images[indexOfFocus % 6].style.filter = 'grayscale(1)';
  // images[indexOfFocus % 6].style.border = 'none'; 
  images[indexOfFocus % 6].style.transform -= 'scale(2,2) translateX(3em)';

  if (indexOfFocus == 0 && direction == -1) {
      indexOfFocus = 1;
  } else if (indexOfFocus == 0 && direction == 1) {
      indexOfFocus = 5;
  } else if (indexOfFocus == 5 && direction == -1) {
    indexOfFocus = 0;
  } else {
    indexOfFocus = (direction * -1) + indexOfFocus ;
  }

  images[indexOfFocus % 6].style.filter = 'grayscale(0)';
  // images[indexOfFocus % 6].style.border = 'solid 5px tomato'; 
  images[indexOfFocus % 6].style.transform += 'scale(2,2) translateX(3em)';
  // images[indexOfFocus % 6].style.width = largeImageWheelDimension; 
  // images[indexOfFocus % 6].style.height= largeImageWheelDimension; 
  // imageContainers[indexOfFocus % 6].style.width = largeImageWheelDimension; 
  // imageContainers[indexOfFocus % 6].style.height= largeImageWheelDimension; 
  // images[indexOfFocus % 6].style.transformOrigin="0 0"
}


function counterPictureRotation(direction) {
  for (i = 0; i < imagesNum; i++){
    images[i].style.transform = "rotate("+ -degrees +"deg)";
  }
}

function rotate(direction) {
  degrees = degrees + (60 * direction);
  document.getElementById("circle-container").style.transform = "rotate(" + degrees +"deg)";
  rotation = rotation + direction;
  counterPictureRotation(direction);
  addImageLayover(direction);
}



$(document).ready(function() {
  const distanceToNextImage =  -$(".carousel-section").height() + (-2 * parseInt($(".carousel-section").css('padding-top')));

  // var height = $(".circle-container").width();

  // $(".circle-container").height(height);

  images[indexOfFocus % 6].style.filter = 'grayscale(0)';
  images[indexOfFocus % 6].style.transform += 'scale(2,2) translateX(3em)';

  $('#fullpage').fullpage({
    anchors:['mainPage','breadWheelPage','breadGame','breadPairing'],
    lockAnchors: true,
    navigation: true,
    navigationPosition: 'left'
  });

  $('#up-arrow').click( function(){
    rotate(1);
    $("#carousel-strip").css('top', indexOfFocus * distanceToNextImage);
  })

  $('#down-arrow').click( function(){
    rotate(-1);
    $("#carousel-strip").css('top', indexOfFocus * distanceToNextImage);
  })


  let sourdoughMap = ["pepperjack", "swiss", "cheddar"];
  let baguetteMap = ["brie"];
  let ryeMap = ["brie", "swiss"];
  const wheatMap = ["gouda"];
  const briocheMap = ["cheddar"];

  const swissMap = ["sourdough", "rye"];
  const pepperjackMap = ["sourdough"];
  const cheddarMap = ["sourdough", "brioche"];
  const brieMap = ["baguette", "rye"];
  const goudaMap = ["wheat"];


  $('.breads, .cheeses').mouseover( function(){
    let id = $(this).attr('id');
    $('#'+id + " .item-overlay").hide();
    let mapping = eval(id+'Map');
    for (i = 0; i < mapping.length; i++) {
      // console.log("."+mapping[0]);
      $("#"+mapping[i]).addClass('hover');
      $("#"+mapping[i] + " .item-overlay").hide();
    }
    });


    $('.breads, .cheeses').mouseout( function(e){
      let id = $(this).attr('id');
      $('#'+id + " .item-overlay").show();
      let mapping = eval(id+'Map');
      for (i = 0; i < mapping.length; i++) {
        // console.log("."+mapping[0]);
        $("#"+mapping[i]).removeClass('hover');
        $("#"+mapping[i] + " .item-overlay").show();
      }
      });
  
  
  



});

