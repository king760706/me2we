$(function () {
    // defined main height
    resizrMainHeight();

    // main resize
    $(window).resize(function () {
        resizrMainHeight();
    });

    // unlock
    $('.unlock').slideToUnlock({
        text: '請向右滑動解鎖',
        succText: '解鎖成功！',
        progressColor: '#5AC7C7',
        succColor: 'rgb(27, 150, 150)',
        successFunc: function () {
            console.log('解鎖成功！');
        }
    });
});

// main高度
function resizrMainHeight() {
    var windowWidth = 1024;
    if ($(window).width() > windowWidth) {
        $('main').removeAttr('style');
    } else {
        $('main').css('height', ($('.main-banner').height() + $('.contact').height() + 50) + 'px');
    }
}