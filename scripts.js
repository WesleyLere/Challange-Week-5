var currentDayEl = $('#currentDay');
var taskContainer = $('.container');
var hours = ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"]
setInterval(time, 1000);
printTaskData();
function time() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  currentDayEl.text(rightNow);
}
function printTaskData() {
  var rightNow = moment().format('H');
  for (var i = 0; i < hours.length; i++) {
    var hourEl = hours[i];
    var taskEl = $('<tr>').addClass('row');
  var timeEl = $('<td>').addClass('col-2 hour').text(hourEl);
  var textArea = $('<textarea/>')
  textArea.text('');
  var nowHour = Number(rightNow.split(":")[0]);
  var hourElHour = Number(hourEl.split(":")[0]);
  if(nowHour > hourElHour) {
    textArea.addClass('past')
  } 
  if (nowHour < hourElHour) {
    textArea.addClass('future')
  }
  if (nowHour === hourElHour) {
    textArea.addClass('present')
  }
  var noteEl = $('<td>').addClass('col-8 description ');
  noteEl.append(textArea);
  var saveTaskBtn = $('<td>')
    .addClass('col-2 saveBtn text-center')
    .text('Save')
  taskEl.append(timeEl,noteEl,saveTaskBtn);
  taskContainer.append(taskEl);
  }  
}
