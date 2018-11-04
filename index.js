//bmw logo button, open close

window.onload= function closeNav() {document.getElementById("logoDivShow").style.width = "90%";}


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

//slideshow page 1

var imgLen = document.getElementById('imgGallery');
var images = imgLen.getElementsByTagName('img');
var counter = Math.floor(Math.random()*images.length);

(function(){
    changeSlide();
})();

function changeSlide()
{
        //console.log("counter: " + counter);
        images[0].src = images[counter].src;
        //console.log(images[counter].src);
        counter = Math.floor(Math.random()*images.length);

        //if(counter === images.length){
        //    counter = 0;
        //}

         setTimeout(changeSlide, 3000);
}
