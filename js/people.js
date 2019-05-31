var rectDelay = 500;

$(function () {
    // nicescroll
    var windowWidth = 768;
    if ($(window).width() > 768) {
        $(".people-content-area").niceScroll();
    }

    // people content open
    $('.people-title').click(function () {
        var idx = $('.people-title').index(this);
        var $rect = $('.people svg:eq(' + idx + ') .rect-delay');
        var $titlearea = $('.people .people-title-area:eq(' + idx + ')');
        var $contentarea = $('.people .people-content-area:eq(' + idx + ')');
        if ($rect.hasClass('fadeInLeft')) {
            $titlearea.css('animation-delay', '0s').removeClass('fadeInUp').addClass('fadeOutDown').delay(rectDelay).queue(function () {
                $(this).hide().dequeue();
            });
            $rect.css('animation-delay', '0s').removeClass('fadeInLeft').addClass('fadeOutLeft').delay(rectDelay).queue(function () {
                $(this).attr('fill', 'rgba(90, 199, 199, 1)').removeClass('fadeOutLeft').addClass('fadeInLeft').dequeue();
                $contentarea.removeClass('fadeOutDown').addClass('fadeInUp').show();
            });
        } else {
            $titlearea.css('animation-delay', '0s').removeClass('fadeInUp').addClass('fadeOutDown').delay(rectDelay).queue(function () {
                $(this).hide().dequeue();
            });
            $rect.css('animation-delay', '0s').removeClass('fadeInRight').addClass('fadeOutRight').delay(rectDelay).queue(function () {
                $(this).attr('fill', 'rgba(39, 39, 48, 1)').removeClass('fadeOutRight').addClass('fadeInRight').dequeue();
                $contentarea.removeClass('fadeOutDown').addClass('fadeInUp').show();
            });
        }
    });

    // people content close
    $('.people-content-close').click(function () {
        var idx = $('.people-content-close').index(this);
        var $rect = $('.people svg:eq(' + idx + ') .rect-delay');
        var $titlearea = $('.people .people-title-area:eq(' + idx + ')');
        var $contentarea = $('.people .people-content-area:eq(' + idx + ')');
        if ($rect.hasClass('fadeInLeft')) {
            $contentarea.removeClass('fadeInUp').addClass('fadeOutDown').delay(rectDelay).queue(function () {
                $(this).hide().dequeue();
            });
            $rect.css('animation-delay', '0s').removeClass('fadeInLeft').addClass('fadeOutLeft').delay(rectDelay).queue(function () {
                $(this).attr('fill', 'rgba(90, 199, 199, 0.7)').removeClass('fadeOutLeft').addClass('fadeInLeft').dequeue();
                $titlearea.css('animation-delay', '0s').removeClass('fadeOutDown').addClass('fadeInUp').show();
            });
        } else {
            $contentarea.removeClass('fadeInUp').addClass('fadeOutDown').delay(rectDelay).queue(function () {
                $(this).hide().dequeue();
            });
            $rect.css('animation-delay', '0s').removeClass('fadeInRight').addClass('fadeOutRight').delay(rectDelay).queue(function () {
                $(this).attr('fill', 'rgba(39, 39, 48, 0.7)').removeClass('fadeOutRight').addClass('fadeInRight').dequeue();
                $titlearea.css('animation-delay', '0s').removeClass('fadeOutDown').addClass('fadeInUp').show();
            });
        }

        return false;
    });
});