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
