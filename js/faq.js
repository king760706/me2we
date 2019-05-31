var startSpeed = 1;
var delaySpeed = 0.3;

$(function () {
     // faq animate
     $('.faq .row .col-md-4').each(function(i){
        $(this).css('animation-delay', (startSpeed +  i * delaySpeed) + 's');
    });

    // faq model open
    $('.faq-item li a').click(function () {
        var id = $(this).attr('id');
        $('body').css('overflow', 'hidden');
        $('.faq-model').fadeIn();
        $('.faq-model .faq-model-area').css('animation-delay', '0.15s').removeClass('fadeOutDown').addClass('fadeInUp').show();
    });

    // faq model close
    $('.faq-model, .faq-model .faq-model-area .faq-model-close').click(function () {
        $('body').removeAttr('style');
        $('.faq-model .faq-model-area').css('animation-delay', '0s').removeClass('fadeInUp').addClass('fadeOutDown').delay(300).queue(function () {
            $(this).hide().dequeue();
            $('.faq-model').fadeOut();
        });

        return false;
    });

    // prevent close
    $('.faq-model .faq-model-area').click(function (e) {
        e.stopPropagation();
    });
});