console.log("bonjour")

console.log("oki")

$("#num-19").on("click", function () {
    console.log("clicked on box 19")
    $(this).html("November 19<h2>World Toilet Day</h2>")
    $(this).css("background-image", "url(imgs/wtd.webp)")
    $(this).css("background-size", "cover")
})

$("#num-20").on("click", function () {
    $(this).addClass("wcd-bkg")
    $(this).append("<h2>World Children's Day</h2>")
    $(this).unbind("click")
})


$(".box").on("click", addBorder);

function addBorder() {
    $(this).css("border", "2px solid black");
}

var days = true;

$("#hide-days").on("click", function () {
    $("#num-22, #num-23, #num-24").fadeToggle(3000);

    if (days == true) {
        $(this).text("Show Non-Days")
        days = false;
    } else {
        $(this).text("Hide Non-Days")
        days = true;
    }

})

$(document).on("keypress", function (e) {
    console.log(e.key)
    if (e.key == "t") {
        $("#num-21").html("November 21<h2>World Television Day</h2>")
    } else if (e.key == "s") {
        $("#num-26").html("November 26<h2>World Sustainable Transportation Day</h2>")
    }
})