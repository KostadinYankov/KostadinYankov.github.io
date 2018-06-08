//bmw logo button, open close
function closeNav() {document.getElementById("logoDivShow").style.width = "0%";}

var navOpen = true;

function openNav() 
{
    //true goes to false, false goes to true
    navOpen = !navOpen;
    
    if(navOpen)
        document.getElementById("logoDivShow").style.width = "0%"; 

    else
        document.getElementById("logoDivShow").style.width = "90%";
}

// manual slideshow bmw vision next 100

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("imgtable1");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
      
  }
  x[slideIndex-1].style.display = "block";  
    
}
//hide show text
function toggle() {
    var ele = document.getElementById("toggleText");
    var text = document.getElementById("displayText");
    if(ele.style.display == "inline") {
            ele.style.display = "none";
        text.innerHTML = "Read more...";
    }
    else {
        ele.style.display = "inline";
        text.innerHTML = "Hide info";
    }
} 

//slideshow bike
var slideIndexb = 1;
showDivsb(slideIndexb);

function plusDivsb(n) {
  showDivsb(slideIndexb += n);
}

function showDivsb(n) {
  var ib;
  var xb = document.getElementsByClassName("imgtableb");
  if (n > xb.length) {slideIndexb = 1}    
  if (n < 1) {slideIndexb = xb.length}
  for (ib = 0; ib < xb.length; ib++) {
     xb[ib].style.display = "none";  
  }
  xb[slideIndexb-1].style.display = "block";  
}

// show hide text bike

function toggleb() {
    var eleb = document.getElementById("toggleTextb");
    var textb = document.getElementById("displayTextb");
    if(eleb.style.display == "inline") {
            eleb.style.display = "none";
        textb.innerHTML = "About the Bike...";
    }
    else {
        eleb.style.display = "inline";
        textb.innerHTML = "Hide info";
    }
} 
//manual slideshow bmw gina

var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i2;
  var x2 = document.getElementsByClassName("imgtable2");
  if (n > x2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = x2.length}
  for (i2 = 0; i2 < x2.length; i2++) {
     x2[i2].style.display = "none";  
  }
  x2[slideIndex2-1].style.display = "block";  
}

//show text about gina
function toggleg() {
    var eleg = document.getElementById("toggleTextg");
    var textg = document.getElementById("displayTextg");
    if(eleg.style.display == "inline") {
            eleg.style.display = "none";
        textg.innerHTML = "About Gina...";
    }
    else {
        eleg.style.display = "inline";
        textg.innerHTML = "Hide info";
    }
} 


//manual slideshow bmw 9 serie

var slideIndex9 = 1;
showDivs9(slideIndex9);

function plusDivs9(n) {
  showDivs9(slideIndex9 += n);
}

function showDivs9(n) {
  var i9;
  var x9 = document.getElementsByClassName("imgtable9");
  if (n > x9.length) {slideIndex9 = 1}    
  if (n < 1) {slideIndex9 = x9.length}
  for (i9 = 0; i9 < x9.length; i9++) {
     x9[i9].style.display = "none";  
  }
  x9[slideIndex9-1].style.display = "block";  
}

//show text about 9 serie
function toggle9() {
    var ele9 = document.getElementById("toggleText9");
    var text9 = document.getElementById("displayText9");
    if(ele9.style.display == "inline") {
            ele9.style.display = "none";
        text9.innerHTML = "About the 9th serie...";
    }
    else {
        ele9.style.display = "inline";
        text9.innerHTML = "Hide info";
    }
} 
////Get the car image so we can change the colour of it
//var carImage = document.getElementById("car");
////Get the slider so we can adjust it and read the value and stuff
//var slider = document.getElementById("slider");
////When the slider is moved, call the code inside "changeSlider"
//slider.addEventListener("input", changeSlider);
//function changeSlider() {
//  //Get where the slider is, and what its value will be (between 0 and 360)
//  var valueOfSlider = slider.value;
//  //Change the "filter" property to change the colour using the value of the slider
//  carImage.setAttribute("style", "filter: hue-rotate(" + valueOfSlider + "deg);");
//}
