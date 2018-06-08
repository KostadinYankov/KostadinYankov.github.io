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

// for 1Serie
var img;
var leftButton;
var rightButton;
var slider;
var carImages = 
    [
        "images/7 series/bmw7.png",
        "images/7 series/bmw71.png",
        "images/7 series/bmw712.png",
    ];

    var carIndex = 0;
    function onCarChange(v)
    {
        var offset = carIndex + v;
        if(offset < 0)
        offset = carImages.length - 1;
        if(offset >= carImages.length)
        offset = 0;
        carIndex = offset;
        img.src = carImages[carIndex];
        
        if(carIndex===0){
            document.getElementById('price').innerHTML =  "£ 23 000"; 
            
        }
        
        if(carIndex===1){
            
          //get the table td you want to change
            //get
            
          var currentprice = document.getElementById('price').innerHTML;
            currentprice = "£ 23 700";
            
        //change text in td
            //td.text = currentprice;
           document.getElementById('price').innerHTML = currentprice; 
        }
        if(carIndex===2){
            var currentprice = document.getElementById('price').innerHTML;
            currentprice = "£ 24 200";
            document.getElementById('price').innerHTML = currentprice; 
        }
    }

function sliderChanged(event)
    {
    var valueOfSlider = slider.value;
    //Change the "filter" property to change the colour using the value of the slider
    img.setAttribute("style", "filter: hue-rotate(" + valueOfSlider + "deg);");
    }

    window.onload = function()
    {
        img = document.getElementById("serie7");
        slider = document.getElementById("slider");
        onCarChange(0);
        slider.addEventListener("input", sliderChanged);
    }
    
//Dropdown button
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    
     
  if (!event.target.matches('.dropbtn')) {
      
       
    var dropdowns = document.getElementsByClassName("dropdown-content");
      
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        
         
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
          
          
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.getElementById("petrol").onclick=function()
{
    
    document.getElementById("fueltype").innerHTML="Petrol"
    document.getElementById("bhp").innerHTML="570 bhp"
    document.getElementById("name").innerHTML="BMW 7 series 5.0i"
}

document.getElementById("diesel").onclick=function()
{
document.getElementById("name").innerHTML="BMW 7 series 5.0d"
document.getElementById("fueltype").innerHTML="Diesel"
document.getElementById("bhp").innerHTML="545 bhp"


}




//song theme off

window.addEventListener("load", function()
{
	//This is when the page is loaded. Firstly check local storage for previous video time..
	var time = localStorage.getItem("savedTime");
	
	//Has it been set already?
	if(time == null)
		time = 0;
	
	//Set the time..
	document.getElementById("themesong").currentTime = time;
	
	//Set something to continously run every 100 ms, in this function we will save the time (for the next page)
	setInterval(saveTime, 100);
});

function saveTime()
{
	//Get the current time of the video..
	var time = document.getElementById("themesong").currentTime;

	//Set the saved time in local storage for the next page
	localStorage.setItem("savedTime", time);
}

var vid = document.getElementById("themesong");
vid.volume = 0.9;

