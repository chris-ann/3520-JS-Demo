console.log("bonjour")

console.log("oki")

$("#num-19").on("click", function () {
    console.log("clicked on box 19")
    $(this).html("November 19<h2>World Toilet Day</h2>")
    $(this).css("background-image", "url(imgs/wtd.webp)");
    $(this).css("background-size", "cover");
    $(this).css("color", "white");
    $(this).css("text-shadow", "1px 1px 2px rgba(0,0,0,0.5)");
})

$("#num-20").on("click", function () {
    $(this).addClass("wcd-bkg")
    $(this).append("<h2>World Children's Day</h2>")
    $(this).unbind("click")
})

$("#num-25").on("click", function () {
    $("#num-25").append("<h2>International Day for the Elimination of Violence against Women</h2>")
    $("#num-25").append("<a href='https://www.un.org/en/observances/ending-violence-against-women-day'>Learn More</a>")
    $("#num-25").css("background", "url('imgs/no-excuse.png')");
    $(this).unbind("click");
})

// Practice with Keypress Events
$(document).on("keypress", function (e) {
    console.log(e.key)
    if (e.key == "t") {
        $("#num-21").html("November 21<h2>World Television Day</h2>")
        $("#num-21").addClass("tv");
    } else if (e.key == "s") {
        $("#num-26").html("<img src='imgs/bus.png' class='drive'>November 26<h2>World Sustainable Transportation Day</h2>")
        $("#num-26").prepend("")
        $("#num-26").css("background", "#B7E5E5");
    }
})

// named function example
$(".box").on("click", addBorder);

function addBorder() {
    $(this).css("border", "2px solid black");
}

// Hide non-days button
var days = true;
$("#hide-days").on("click", function () {
    $("#num-22, #num-23, #num-24").fadeToggle(1000);

    if (days == true) {
        $(this).text("Show Non-Days")
        days = false;
    } else {
        $(this).text("Hide Non-Days")
        days = true;
    }

})
