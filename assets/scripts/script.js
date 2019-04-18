console.log("script linked");

let images = document.querySelectorAll(".image");
var imagesNum = images.length;
let rotation = 1;

function counterRotation(degrees) {
  for (i = 0; i < imagesNum; i++){
    images[i].style.transform = "rotate(-"+ degrees +"deg)";
  }
}

function rotate() {
  let degrees = rotation * 60;
  console.log(degrees);
  if (degrees == 0) {
    console.log("rotation set to 0");
    document.getElementById("circle-container").style.transform = "rotate(" + 360 +"deg)";
    rotation = 0;
  } else {
    document.getElementById("circle-container").style.transform = "rotate(" + degrees.toString() +"deg)";
  }

  counterRotation(degrees);
  rotation++;
}




