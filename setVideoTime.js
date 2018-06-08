window.addEventListener("load", function()
{
	//This is when the page is loaded. Firstly check local storage for previous video time..
	var time = localStorage.getItem("savedTime");
	
	//Has it been set already?
	if(time == null)
		time = 0;
	
	//Set the time..
	document.getElementById("videobmw").currentTime = time;
	
	//Set something to continously run every 100 ms, in this function we will save the time (for the next page)
	setInterval(saveTime, 100);
});

function saveTime()
{
	//Get the current time of the video..
	var time = document.getElementById("videobmw").currentTime;

	//Set the saved time in local storage for the next page
	localStorage.setItem("savedTime", time);
}

var vid = document.getElementById("videobmw");
vid.volume = 0.9;