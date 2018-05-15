

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
        $('#buttonTwo').addClass('current');
    }
    else {
    	$('#buttonOne').removeClass('highlight');
    }
});
    $('input#toggle2').change(function(){
        if($('input#toggle:checked').length>0) {
            $('#buttonTwo').removeClass('current');
            $('#buttonTwo').addClass('highlight'); 
            $('#buttonThree').addClass('current');
        }
        else {
            $('#buttonTwo').removeClass('highlight');
        }
    }); 
    
    $('input#toggle3').change(function(){
        if($('input#toggle:checked').length>0) {
            $('#buttonThree').removeClass('current'); 
            $('#buttonThree').addClass('highlight'); 
            $('#buttonFour').addClass('current'); 
        }
        else {
            $('#buttonThree').removeClass('highlight');
        }
    });
    $('input#toggle4').change(function(){
        if($('input#toggle:checked').length>0) {
            $('#buttonFour').removeClass('current'); 
            $('#buttonFour').addClass('highlight'); 
            $('#buttonFive').addClass('current'); 
        }
        else {
            $('#buttonFour').removeClass('highlight');
        }
    });
    $('input#toggle5').change(function(){
        if($('input#toggle:checked').length>0) {
            $('#buttonFive').removeClass('current'); 
            $('#buttonFive').addClass('highlight'); 
            $('#buttonSix').addClass('current'); 
        }
        else {
            $('#buttonFive').removeClass('highlight');
        }
    });
    
    $('input#toggle6').change(function(){
        if($('input#toggle:checked').length>0) {
            $('#buttonSix').removeClass('current'); 
            $('#buttonSix').addClass('highlight'); 
            $('#buttonSeven').addClass('current'); 
        }
        else {
            $('#buttonSix').removeClass('highlight');
        }
    });
    
    $('input#toggle7').change(function(){
        if($('input#toggle:checked').length>0) {
            $('#buttonSeven').removeClass('current'); 
            $('#buttonSeven').addClass('highlight'); 
            $('#buttonEight').addClass('current'); 
        }
        else {
            $('#buttonSeven').removeClass('highlight');
        }
    });
    
    $('input#toggle8').change(function(){
        if($('input#toggle:checked').length>0) {
            $('#buttonEight').removeClass('current'); 
            $('#buttonEight').addClass('highlight'); 
            $('#buttonNine').addClass('current'); 
        }
        else {
            $('#buttonEight').removeClass('highlight');
        }
    });
    
    $('input#toggle9').change(function(){
        if($('input#toggle:checked').length>0) {
            $('#buttonNine').removeClass('current'); 
            $('#buttonNine').addClass('highlight'); 
            $('#buttonTen').addClass('current'); 
        }
        else {
            $('#buttonNine').removeClass('highlight');
        }
    });
    
    $('input#toggle10').change(function(){
        if($('input#toggle:checked').length>0) {
            $('#buttonTen').removeClass('current'); 
            $('#buttonTen').addClass('highlight'); 
           
        }
        else {
            $('#buttonTen').removeClass('highlight');
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

    $("#toggle").click(function() {
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
    $("#toggle2").click(function() {
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
    
    $("#toggle3").click(function() {
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
    

    $("#toggle4").click(function() {
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

    $("#toggle5").click(function() {
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
    
     $("#toggle6").click(function() {
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
    
     $("#toggle7").click(function() {
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
    
     $("#toggle8").click(function() {
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
    
     $("#toggle9").click(function() {
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
    
     $("#toggle10").click(function() {
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

        $("#textSix").each(function () {
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
    
    // Open navbarSide when button is clicked
    $('#navbarSideButton').on('click', function () {
        $('#navbarSide').addClass('reveal');
        $('.navbar-side-item').addClass('animated fadeInUp');
        $('.overlay').show();
    });

    // Close navbarSide when the outside of menu is clicked
    $('.overlay').on('click', function () {
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });
    $('.overlaySideHide').on('click', function () {
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });

    $('.inputToggle').on('click', function () {
        $(".hidden").removeClass('hidden');
    });

    $('.navbar-menu-toggler').on('click', function () {
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });
    
});


