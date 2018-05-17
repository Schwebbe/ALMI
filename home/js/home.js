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
$('.navbar-menu-toggler').on('click', function () {
    $('#navbarSide').removeClass('reveal');
    $('.overlay').hide();
});
