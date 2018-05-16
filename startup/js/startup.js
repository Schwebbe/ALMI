$(document).ready(function() {
    // Hide all text boxes but the first, as default.
    $("#textid2").hide();
    $("#textid3").hide();
    $("#textid4").hide();
    $("#textid5").hide();
    $("#textid6").hide();
    $("#textid7").hide();
    $("#textid8").hide();
    $("#textid9").hide();
    $("#textid10").hide();

    // Append out level buttons.
    var docFrag = document.createDocumentFragment();

    for (var i = 1; i < 11; i++) {
        var elem = document.createElement("input"); // Create an "input" element.
        elem.type = "button"; // Type of input element (button).
        elem.value = i; // Text in each button (1 - 10).
        elem.setAttribute("id", "id" + i); // Give each button an ID.
        elem.setAttribute("class", "level-btn"); // Add class to each button for styling.
        docFrag.appendChild(elem);

        // Handle button click.
        elem.onclick = function(elem) {
            for (var i = 1; i < 11; i++) {
                $("#textid" + i).hide(); // Hide all text boxes.
                $("#id" + i).removeClass("current"); // Remove "current" from all buttons.
            };

            $(this).addClass("current"); // Add "current" to current button.

            var id = document.getElementById(this.id).id; // Get current button's ID.
            $("#text" + id).show(); // Show current text box.
            $("#text" + id).addClass("animated bounceInLeft"); // Animate text box to slide in.

            var currentButton = document.getElementById(this.id); // Get current button's element.

            // Handle toggling.
            $("#toggle" + id).click(function() {
                $(currentButton).addClass("checked"); // Add "checked" to current button.

                // If it's "OFF" remove class "checked".
                if ($("#toggle" + id).val() === "Ej läst") {
                    $(currentButton).removeClass("checked");
                };
            });
        };
    };

    // Append the buttons to a DIV called "levelButtons".
    var theDiv = document.getElementById("levelButtons");
    docFrag.innerHTML = docFrag;
    theDiv.appendChild(docFrag);
});
