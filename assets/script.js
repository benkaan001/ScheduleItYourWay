//jQuery document is ready 

$(document).ready(function () {
  // console.log ("ready!");


// current day
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);


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
      var displayTime = parseInt($(this).attr('id').split('_')[1]);

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

  $("#am_9 .task").val(localStorage.getItem("am_9"));
  $("#am_10.task").val(localStorage.getItem("am_10"));
  $("#am_11 .task").val(localStorage.getItem("am_11"));
  $("#pm_12.task").val(localStorage.getItem("pm_12"));
  $("#pm_13 .task").val(localStorage.getItem("pm_13"));
  $("#pm_14.task").val(localStorage.getItem("pm_14"));
  $("#pm_15 .task").val(localStorage.getItem("pm_15"));
  $("#pm_16.task").val(localStorage.getItem("pm_16"));
  $("#pm_17 .task").val(localStorage.getItem("pm_17"));

  timeLoop();
});
