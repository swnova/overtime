//Date + Time display//
var todaysDate = 0;
var relTime = moment().hours;
var runningDate = setInterval(function() {
    todaysDate = moment().format('MMMM Do YYYY');
    $("#currentDay").html(todaysDate);
//var text = jqueryval(text);
var time = moment().hours;
//var currentBlock = val(span.val)
var timer = moment().format('h:mm:ss');
    $('#timer').html(timer);
}, 100)

//save button listener
var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
    var text = $(this).siblings("text").val();
    console.log(text)
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text)
});

//console.log(saveBtn.on)

//function dataTiming() {
    //console.log(hello)

    $(".input-group").forEach(function() {
        var currentBlock = $("span-class").val();
      console.log(currentBlock)  
        if (currentblock > relTime ) {
            $(this).addClass("future");
        }       else if (currentBlock === timenow) {
            $(this).addClass("present");
        }       else {
            $(this).addClass("past");
        }
    })
    
//};

//dataTiming()

