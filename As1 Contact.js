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
