// create variables

//functions
//create a function which shows current day at the top of page
// use moment.js
// get current day
// render current day
$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));
console.log("#currentDay");

//create a time block which is color coded depending on past, present, future
// create a function with an if statement
function timeColour() {
  var hour = moment().hours();

  $(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("id"));

    if (currentHour > hour) {
      $(this).addClass("future");
    } else if (currentHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}

console.log(timeColour);

//page is refreshed and all the events are cleared
//create an event listener for refresh button which clears localStorage

function refreshTimeBlocks() {
  $(".hour").each(function () {
    var currentHour = $(this).text();
    var currentBlock = localStorage.getItem(currentHour);

    if (currentBlock !== null) {
      $(this).siblings(".content").val(currentHour);
    }
  });
}
console.log(refreshTimeBlocks);

//create a function when click on time block and being able to enter event

// save button is clicked, then data is saved to localStorage
//create an event listener for save button which saves to localStorage
