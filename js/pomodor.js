"use strict"

    /* const $ = selector => document.querySelector(selector);
 */
const padSingleDigit = num => num.toString().padStart(2, "0");
let stopwatchTimer = null;
let elapsedMinutes = 25;
let elapsedSeconds = 60;

const togglepageAbout = () => {
    $("#home").show();
    $("#about").hide();
    $("#about-page").show();
    $("#home-page").hide();
}

const togglepageHome = () => {
    $("#about").show();
    $("#home").hide();
    $("#home-page").show();
    $("#about-page").hide();
}

const tickStopwatch = () => 
{    
    // decrement seconds by 1 second
    elapsedSeconds = elapsedSeconds - 1;
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if (elapsedSeconds < 0) {
        elapsedSeconds = 59;
        elapsedMinutes--;
    }

    //display new stopwatch time
    document.querySelector("#s_seconds").textContent = elapsedSeconds;
    document.querySelector("#s_minutes").textContent = elapsedMinutes;
    if(elapsedMinutes==0 && elapsedSeconds==0)
    {
    alert("Take a break");
    // stop timer
    clearInterval(stopwatchTimer);
    elapsedMinutes = 25;
    elapsedSeconds = 0;
    document.querySelector("#s_seconds").textContent = "00";
    document.querySelector("#s_minutes").textContent = "25";

    }
};

// event handler functions

const startStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault(); // Cancel the default action of the link
    // do first tick of stop watch and then set interval timer to tick 
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
    // variable so next two functions can stop timer.
    $("#start").css('display','none');;
    $("#stop").css('display','block');
    stopwatchTimer = setInterval(tickStopwatch, 1000); // Start the stopwatch
    
};

const stopStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();
    $("#start").show();
    $("#stop").hide();
    // stop timer
    clearInterval(stopwatchTimer);  
    
};

const resetStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();
    // stop timer
    clearInterval(stopwatchTimer);
    
    // reset elapsed variables and clear stopwatch display
    elapsedMinutes = 25;
    elapsedSeconds = 0;
    document.querySelector("#s_seconds").textContent = "00";
    document.querySelector("#s_minutes").textContent = "25";
};

document.addEventListener("DOMContentLoaded", () => {
    // Attach the stopwatch event handlers to the appropriate links
    document.querySelector("#about").addEventListener("click",togglepageAbout);
    document.querySelector("#home").addEventListener("click",togglepageHome);
    document.querySelector("#start").addEventListener("click",startStopwatch);
    document.querySelector("#stop").addEventListener("click",stopStopwatch);
    document.querySelector("#reset").addEventListener("click",resetStopwatch); 	
	
});