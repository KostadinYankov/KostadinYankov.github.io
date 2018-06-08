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




//text over background page 2
if(vid != null)
{
    function vidFade() {
      vid.classList.add("stopfade");
    }

    vid.addEventListener('ended', function()
    {
    // only functional if "loop" is removed 
    vid.pause();
    // to capture IE10
    vidFade();
    }); 

    pauseButton.addEventListener("click", function() {
      vid.classList.toggle("stopfade");
      if (vid.paused) {
        vid.play();
        pauseButton.innerHTML = "Pause";
      } else {
        vid.pause();
        pauseButton.innerHTML = "Paused";
      }
    })
    }
