// use moment.js to render current day

$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

//function which colour codes time depending on past, present, future
function timeColour() {
  let hour = moment().hours();

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

//page is refreshed and all the events are cleared
function refreshTimeBlocks() {
  $(".hour").each(function () {
    var currentHour = $(this).text();
    var currentBlock = localStorage.getItem(currentHour);

    if (currentBlock !== null) {
      $(this).siblings(".description").val(currentBlock);
    }
  });
}

//declare saveButton var
var saveButton = $(".saveBtn");
// save button is clicked, then data is saved to localStorage
saveButton.on("click", function () {
  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".description").val();
  localStorage.setItem(time, content);
});

timeColour();
saveButton();
refreshTimeBlocks();
