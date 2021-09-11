// current day
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(currentDay);

// present time

var presentTime = moment().hour();

var displayTime;

//jQuery document is ready function

$(document).ready(function(){
    console.log ("ready!");

});

//change the CSS color property based on time

if (displayTime === presentTime) {
    $().addClass("present");
    $().removeClass("past");
    $().removeClass("future");

} else if ( displayTime < presentTime) {
    $().addClass("past");
    $().removeClass("present");
    $().removeClass("future");
} else ( displayTime > presentTime) {
    $().addClass("future");
    $().removeClass("present");
    $().removeClass("past");
}