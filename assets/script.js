// current day
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(currentDay);

// present time

var presentTime = moment().hour();

var displayTime;

//jQuery document is ready function

$(document).ready(function(){
   // console.log ("ready!");
   $(".saveButton").on("click",function() {
       var taskInput = $(this).siblings(".task").val();
       var time = $(this).parent().attr("id");

   })

   var timeLoop = function() {
       $(".timeblock").each(function (){
           var displayTime = parseInt($(this).attr("id").split("hour")[1]);

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

       })
   }

   timeLoop();

});
