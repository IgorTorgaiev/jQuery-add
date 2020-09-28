$(document).ready(function(){
    $("#btn1").click(function(){
        $("#text").append("<em> More text.<em>");
        $("#text1").append("<em> More text.<em>");
    });
    $("#btn2").click(function(){
        $("ol").append(" <li><strong>More list items<strong></li>");
    });
});

// Now, we will add more elements with append() and prepend().

function appendText() {
    var txt = $("<p></p>").text("Some Text with the jQuery usage");
    $("body").append(txt); // we use jQuery to add text 
}

function addText(){
    var text = "<p>Some text with the HTML usage</p>";
    $("body").append(text); // we use HTML to add text 
}

function addNote() {
    var note = document.createElement("p");
    note.innerHTML = "Some text with the DOM"; // adding text with DOM
    $("body").append(note);
}

// before() and after()

$(document).ready(function(){
    $("#before").click(function(){
        $("img").before("<strong> Before, there is sunrise.</strong>")
    });
    $("#after").click(function(){
        $("img").after("<em> Then, there will be sunset. <em>");
    });
});