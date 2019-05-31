$(function () {
    // defined main height
    resizrMainHeight();
    
    // main resize
    $(window).resize(function () {
        resizrMainHeight();
    });
});

// main高度
function resizrMainHeight(){
    var windowWidth = 768;
    var surplusHeight = $(window).width() > windowWidth ? 100 : 10;
    $('main').css('height', ($('.main-banner').height() + $('.news-page').height() - surplusHeight) + 'px');
}