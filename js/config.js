var fadeInBottom = 'animated fadeInDown';
var fadeOutTop = 'animated fadeOutUp';
var fadeInLeft = 'animated fadeInLeft';

$(function () {
    // menu
    $('.navbar-menu').click(function () {
        if ($(this).hasClass('closed')) {
            $('body').removeAttr('style');
            // 按鈕
            $(this).removeClass('closed');
            // 選單區塊
            $('.navbar-area').removeClass(fadeInBottom).addClass(fadeOutTop).delay(250).queue(function () {
                $(this).hide().dequeue();
            });
            $('.navbar-area .navbar-link').removeClass(fadeInLeft + ' border-line').removeAttr('style');
        } else {
            $('body').css('overflow', 'hidden');
            // 按鈕
            $(this).addClass('closed');
            // 使用者資訊
            $('.navbar-user-area').hide();
            // 選單區塊
            $('.navbar-area .navbar-link').hide();
            $('.navbar-area').show().removeClass(fadeOutTop).addClass(fadeInBottom).delay(300).queue(function () {
                $('.navbar-area .navbar-link').each(function (i) {
                    $(this).delay(130 * (i + 1)).queue(function () {
                        $(this).show().addClass(fadeInLeft + ' border-line').dequeue();
                    });
                });
                $(this).dequeue();
            });
        }

        return false;
    });

    // menu resize
    $(window).resize(function () {
        resizeMenu();
    });

    // 使用者資訊
    $('.navbar-user').click(function () {
        $('.navbar-user-area').toggle('fast');
        return false;
    });
    $('html').click(function(){
        $('.navbar-user-area').hide();
    });
});

// menu縮放
function resizeMenu() {
    var windowWidth = 768;
    if ($(window).width() > 768) {
        $('.navbar-area').removeClass(fadeInBottom + ' ' + fadeOutTop).removeAttr('style');
        $('.navbar-area .navbar-link').removeClass(fadeInLeft + ' border-line').removeAttr('style');
    } else {
        $('.navbar-menu').removeClass('closed');
    }
}