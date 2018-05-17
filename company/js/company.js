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

$("#menu-button").click(function(){
    $("#menOne").show();
    $("#menTwo").show();
    $("#menThree").show();
    $("#menFour").show();
    $("#menFive").show();
    $("#menSix").show();
    $("#menSeven").show();
    $("#menEight").show();
});

$("#menOne").click(function(){
    $("#card1").show();
});
$("#close1").click(function(){
    $("#card1").hide();
});

$("#menTwo").click(function(){
    $("#card2").show();
});
$("#close2").click(function(){
    $("#card2").hide();
});

$("#menThree").click(function(){
    $("#card3").show();
});
$("#close3").click(function(){
    $("#card3").hide();
});

$("#menFour").click(function(){
    $("#card4").show();
});
$("#close4").click(function(){
    $("#card4").hide();
});

$("#menFive").click(function(){
    $("#card5").show();
});
$("#close5").click(function(){
    $("#card5").hide();
});


$('.navbar-menu-toggler').on('click', function () {
    $('#navbarSide').removeClass('reveal');
    $('.overlay').hide();
});


(function(){

    var button = document.getElementById('cn-button'),
        wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
    var open = false;
    button.addEventListener('click', handler, false);

    function handler(){
        if(!open){
            this.innerHTML = "Stäng";
            classie.add(wrapper, 'opened-nav');
        }
        else{
            this.innerHTML = "Menu";
            classie.remove(wrapper, 'opened-nav');
        }
        open = !open;
    }
    function closeWrapper(){
        classie.remove(wrapper, 'opened-nav');
    }

})();
