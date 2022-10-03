var currentdayel = document.querySelector('currentday')
var time = moment().format('MM-DD-YYYY, hh:mm:ss')
$('#currentDamy').text(time)
var timeInterval = setInterval(function () {
    $('#currentDay').text(moment().format('MM-DD-YYYY, hh:mm:ss'))
    }
  , 1000);
var containerEl = document.querySelector('container')
function timeblockC (){
    var timeblockEl = document.createElement('div')
    containerEl.appendChild(timeblockEl)
for (let index = 0; index < 24; index++) {
    
    
}}