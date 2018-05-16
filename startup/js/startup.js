$(document).ready(function() {

    $('#navbarSideButton').on('click', function () {
        $('#navbarSide').addClass('reveal');
        $('.navbar-side-item').addClass('animated fadeInUp');
        $('.overlay').show();
    });

    $('.navbar-menu-toggler').on('click', function () {
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });

    // Hide all text boxes but the first, as default.
    for (var i = 2; i < 10; i++) {
        $("#textid" + i).hide();
    };

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

            // Handle toggling with level buttons.
            $("#toggle" + id).click(function() {
                $(currentButton).addClass("checked"); // Add "checked" to current button.

                // If it's not read remove class "checked".
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

    $("#id1").click(); // "Click" first button as default.
});
