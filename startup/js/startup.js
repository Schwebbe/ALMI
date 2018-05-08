
$(document).ready(function() {
    $('input').on('click', function() {
        var emptyValue = 0;
        $('input:checked').each(function() {
            emptyValue += parseInt($(this).val());
        });
        $('.progress-bar').css('width', emptyValue + '%').attr('aria-valuenow', emptyValue);
    });

    /*Ändrar färg på knappar när checkbox är toggled*/
    
    $('input#toggle').change(function(){
    if($('input#toggle:checked').length>0) {
    	$('#buttonOne').addClass('highlight'); 
    }
    else {
    	$('#buttonOne').removeClass('highlight');
    }
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
        
        $("#textOne").each(function () {
            $(this).addClass("animated bounceInLeft");
        })
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
        
        $("#textTwo").each(function () {
            $(this).addClass("animated bounceInLeft");
        })
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
        
        $("#textThree").each(function () {
            $(this).addClass("animated bounceInLeft");
        })
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
        
        $("#textFour").each(function () {
            $(this).addClass("animated bounceInLeft");
        })
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
        
        $("#textFive").each(function () {
            $(this).addClass("animated bounceInLeft");
        })
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
        
        $("#textSix").each(function () {
            $(this).addClass("animated bounceInLeft");
        })
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
        
        $("#textSeven").each(function () {
            $(this).addClass("animated bounceInLeft");
        })
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
        
        $("#textEight").each(function () {
            $(this).addClass("animated bounceInLeft");
        })
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
        
        $("#textNine").each(function () {
            $(this).addClass("animated bounceInLeft");
        })
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
        
        $("#textTen").each(function () {
            $(this).addClass("animated bounceInLeft");
        })
    });
});


