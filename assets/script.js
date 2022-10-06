//Date + Time display//
var todaysDate = 0
var runningDate = setInterval(function() {
    todaysDate = moment().format('MMMM Do YYYY');
    $("#currentDay").html(todaysDate);

var timer = moment().format('h:mm:ss');
    $('#timer').html(timer);
}, 100) // 
var currentTime = moment().hour;
console.log(timer)


