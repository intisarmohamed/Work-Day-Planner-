// create variables

//functions
// use moment.js to render current day

$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));
console.log("#currentDay");

//function which colour codes time depending on past, present, future
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

// save button is clicked, then data is saved to localStorage
saveButton.on("click", function () {
  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".content").val();
  localStorage.setItem(time, content);
});

console.log(saveButton);
