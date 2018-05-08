
$(document).ready(function() {
    $('input').on('click', function() {
        var emptyValue = 0;
        $('input:checked').each(function() {
            emptyValue += parseInt($(this).val());
        });
        $('.progress-bar').css('width', emptyValue + '%').attr('aria-valuenow', emptyValue);
    });

    $("#buttonOne").click(function() {
        $("#textOne").show();
        $("#textTwo").hide();
        $("#textThree").hide();
        $("#textFour").hide();
        $("#textFive").hide();
        $("#textSix").hide();
        $("#textSeven").hide();
        $("#textEight").hide();
        $("#textNine").hide();
        $("#textTen").hide();
    });

    $("#buttonTwo").click(function() {
        $("#textOne").hide();
        $("#textTwo").show();
        $("#textThree").hide();
        $("#textFour").hide();
        $("#textFive").hide();
        $("#textSix").hide();
        $("#textSeven").hide();
        $("#textEight").hide();
        $("#textNine").hide();
        $("#textTen").hide();
    });

    $("#buttonThree").click(function() {
        $("#textOne").hide();
        $("#textTwo").hide();
        $("#textThree").show();
        $("#textFour").hide();
        $("#textFive").hide();
        $("#textSix").hide();
        $("#textSeven").hide();
        $("#textEight").hide();
        $("#textNine").hide();
        $("#textTen").hide();
    });

    $("#buttonFour").click(function() {
        $("#textOne").hide();
        $("#textTwo").hide();
        $("#textThree").hide();
        $("#textFour").show();
        $("#textFive").hide();
        $("#textSix").hide();
        $("#textSeven").hide();
        $("#textEight").hide();
        $("#textNine").hide();
        $("#textTen").hide();
    });

    $("#buttonFive").click(function() {
        $("#textOne").hide();
        $("#textTwo").hide();
        $("#textThree").hide();
        $("#textFour").hide();
        $("#textFive").show();
        $("#textSix").hide();
        $("#textSeven").hide();
        $("#textEight").hide();
        $("#textNine").hide();
        $("#textTen").hide();
    });

    $("#buttonSix").click(function() {
        $("#textOne").hide();
        $("#textTwo").hide();
        $("#textThree").hide();
        $("#textFour").hide();
        $("#textFive").hide();
        $("#textSix").show();
        $("#textSeven").hide();
        $("#textEight").hide();
        $("#textNine").hide();
        $("#textTen").hide();
    });

    $("#buttonSeven").click(function() {
        $("#textOne").hide();
        $("#textTwo").hide();
        $("#textThree").hide();
        $("#textFour").hide();
        $("#textFive").hide();
        $("#textSix").hide();
        $("#textSeven").show();
        $("#textEight").hide();
        $("#textNine").hide();
        $("#textTen").hide();
    });

    $("#buttonEight").click(function() {
        $("#textOne").hide();
        $("#textTwo").hide();
        $("#textThree").hide();
        $("#textFour").hide();
        $("#textFive").hide();
        $("#textSix").hide();
        $("#textSeven").hide();
        $("#textEight").show();
        $("#textNine").hide();
        $("#textTen").hide();
    });

    $("#buttonNine").click(function() {
        $("#textOne").hide();
        $("#textTwo").hide();
        $("#textThree").hide();
        $("#textFour").hide();
        $("#textFive").hide();
        $("#textSix").hide();
        $("#textSeven").hide();
        $("#textEight").hide();
        $("#textNine").show();
        $("#textTen").hide();
    });

    $("#buttonTen").click(function() {
        $("#textOne").hide();
        $("#textTwo").hide();
        $("#textThree").hide();
        $("#textFour").hide();
        $("#textFive").hide();
        $("#textSix").hide();
        $("#textSeven").hide();
        $("#textEight").hide();
        $("#textNine").hide();
        $("#textTen").show();
    });
});