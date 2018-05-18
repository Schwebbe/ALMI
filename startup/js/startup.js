$(document).ready(function() {

    $('#navbarSideButton').on('click', function () {
        $('#navbarSide').addClass('reveal');
        $('.navbar-side-item').addClass('animated fadeInUp');
        $('.overlay').show();
    });

    $('.btn').click(function () {
        $("#exampleModal2").modal();
    })
    
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
                $("#id" + i).removeClass("current animated pulse infinite"); // Remove "current" and animation from all buttons.
            };

            $(this).addClass("current animated pulse infinite"); // Add "current" and animation to current button.

            var id = document.getElementById(this.id).id; // Get current button's ID.
            $("#text" + id).show(); // Show current text box.
            $("#text" + id).addClass("animated bounceInRight"); // Animate text box to slide in.

            var currentButton = document.getElementById(this.id); // Get current button's element.

            // Handle toggling with level buttons.
            $("#toggle" + id).click(function() {
                $(currentButton).addClass("checked"); // Add "checked" to current level button.
                $(currentButton).val("✓"); // Change current level button's value to a check marker.

                var numbFromId = id.slice(2); // Get current button ID's number.
                var numbFromIdInt = parseInt(numbFromId); // Convert number string to int.
                var nextButtonIdNumb = numbFromIdInt + 1; // Add 1 to the number.
                
                // Click next button after a delay.
                setTimeout(function() {
                    $("#id" + nextButtonIdNumb).click();
                }, 650);

                // If it's not read remove class "checked".
                if ($("#toggle" + id).val() === "Ej läst") {
                    $(currentButton).removeClass("checked");
                    $(currentButton).val(id.slice(2)); // Change current level button's value to its original number, extracted from the ID.
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
