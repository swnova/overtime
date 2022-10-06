//Date + Time display//
var todaysDate = 0
var relTime = moment().hours;
var runningDate = setInterval(function() {
    todaysDate = moment().format('MMMM Do YYYY');
    $("#currentDay").html(todaysDate);

var timer = moment().format('h:mm:ss');
    $('#timer').html(timer);
}, 100)

//save button listener
var saveBtn = $(".saveBtn")

saveBtn.on("click", function() {
    var text = $(this).siblings("text").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text)
})

//console.log(saveBtn.on)
console.log("timer")
function dataTiming() {
    

    $("#block").each(function() {
        var currentBlock = parseInt($(this).attr("id"));

        if (currentblock > relTime ) {
            $(this).addClass("future");
        }       else if (currentBlock === timenow) {
            $(this).addClass("present");
        }       else {
            $(this).addClass("past");
        }
    })
    
};



