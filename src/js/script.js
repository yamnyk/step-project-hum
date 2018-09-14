////////////////TABS//////////////
$(".services-tab-item").not(":first").hide();
$(".services-tab-link").click(function() {
    $(".services-tab-link").removeClass("services-tab-active").eq($(this).index()).addClass("services-tab-active");
    $(".services-tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("services-tab-active");

$('ham-button').click(function (event) {
    $('')
});
///////////MODAL/////////////////
$("#btn-mdl").click(function(e){
    $('.modal').addClass('modal-win');
    $(".modal-overlay").addClass('overlay-open');
});
$(".modal-overlay").click(function(e){
    // console.log($(e.target).hasClass('overlay'));
    $('.modal').removeClass('modal-win');
    $(".modal-overlay").removeClass('overlay-open');
});
$(".form-button").click(function(e){
    // console.log($(e.target).hasClass('overlay'));
    $('.modal').removeClass('modal-win');
    $(".modal-overlay").removeClass('overlay-open');
});
$(".networks-button").click(function(e){
    // console.log($(e.target).hasClass('overlay'));
    $('.modal').removeClass('modal-win');
    $(".modal-overlay").removeClass('overlay-open');
});
/////////slider/////////////////
$(".review-main-item").not(":first").hide();
$('.navlist-img').click(function () {
    let currentIndex = $('.navlist-img-active').index();
    $(".review-main-item").eq(currentIndex).hide();
    $('.navlist-img-active').removeClass('navlist-img-active');
    $(this).addClass('navlist-img-active');
    $(".review-main-item").eq($(this).index()).fadeIn()
});

$('#prev').click(function () {
    let currentIndex = $('.navlist-img-active').index();
    $(".review-main-item").eq(currentIndex).hide();
    $('.navlist-img-active').removeClass('navlist-img-active');
    $('.navlist-img').eq(currentIndex-1).addClass('navlist-img-active');
    $(".review-main-item").eq(currentIndex-1).fadeIn();
});

$('#next').click(function () {
    let currentIndex = $('.navlist-img-active').index();
    $(".review-main-item").eq(currentIndex).hide();
    $('.navlist-img-active').removeClass('navlist-img-active');
    $('.navlist-img').eq(currentIndex+1).addClass('navlist-img-active');
    $(".review-main-item").eq(currentIndex+1).fadeIn();
});

