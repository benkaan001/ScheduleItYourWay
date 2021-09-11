// current day
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

//jQuery document is ready 

$(document).ready(function () {
  // console.log ("ready!");
  $(".saveButton").on("click", function () {
    var time = $(this).parent().attr("id");
    var taskInput = $(this).siblings(".task").val();
    
    // save user input to local storage
    localStorage.setItem(time, taskInput);
  });

  var timeLoop = function () {
    var presentTime = moment().hours();
    //console.log(presentTime);

    $(".timeblock").each(function () {
      var displayTime = parseInt($(this).attr("id").split("hourDisplay")[1]);

      //change the CSS color property based on time

      if (displayTime === presentTime) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      } else if (displayTime < presentTime) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    });
  };

  //retrieve from local storage

  $("#9oclock .task").val(localStorage.getItem("9oclock"));
  $("#10oclock.task").val(localStorage.getItem("10oclock"));
  $("#11oclock .task").val(localStorage.getItem("11oclock"));
  $("#12oclock.task").val(localStorage.getItem("12oclock"));
  $("#13oclock .task").val(localStorage.getItem("13oclock"));
  $("#14oclock.task").val(localStorage.getItem("14oclock"));
  $("#15oclock .task").val(localStorage.getItem("15oclock"));
  $("#16oclock.task").val(localStorage.getItem("16oclock"));
  $("#17oclock .task").val(localStorage.getItem("17oclock"));

  timeLoop();
});
