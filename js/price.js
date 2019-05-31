var startSpeed = 1;
var delaySpeed = 0.4;

$(function () {
    // defined main height
    resizrMainHeight();
    
    // main resize
    $(window).resize(function () {
        resizrMainHeight();
    });

    // price animate
    $('.price ul li').each(function(i){
        $(this).css('animation-delay', (startSpeed +  i * delaySpeed) + 's');
    });
});

// main高度
function resizrMainHeight(){
    var windowWidth = 768;
    var surplusHeight = $(window).width() > windowWidth ? 80 : 20;
    $('main').css('height', ($('.main-banner').height() + $('.price').height() - surplusHeight) + 'px');
}