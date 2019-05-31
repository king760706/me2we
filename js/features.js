var opacitySpeed = 0.8;
var offsetDistance = -200;

$(function () {
    // build tween features
    var tl_features = new TimelineMax()
        .add(TweenMax.from(".features .features-phone, .features .features-screen", opacitySpeed, {
            delay: 1,
            y: 100,
            opacity: 0
        }));

    // build tween manager
    var tl_manager = new TimelineMax()
        .add(TweenMax.from(".manager:eq(0) .title-area h1", opacitySpeed, {
            delay: 1,
            x: '100%',
            opacity: 0
        }))
        .add(TweenMax.from(".manager:eq(0) .title-area p", opacitySpeed, {
            delay: -0.3,
            y: 100,
            opacity: 0
        }))
        .add(TweenMax.from(".manager:eq(0) .manager-img-area .manager-phone", opacitySpeed, {
            delay: -1,
            x: -100,
            opacity: 0
        }));

    // init controller
    var controller = new ScrollMagic.Controller();

    // build tween customer
    var tl_customer = new TimelineMax()
        .add(TweenMax.from(".customer .title-area h1", opacitySpeed, {
            delay: -1.2,
            x: '-100%',
            opacity: 0
        }))
        .add(TweenMax.from(".customer .title-area p", opacitySpeed, {
            delay: -0.9,
            y: 100,
            opacity: 0
        }))
        .add(TweenMax.from(".customer .customer-img-area .customer-phone", opacitySpeed, {
            delay: -1.2,
            x: 100,
            opacity: 0
        }));

    // build scene customer
    var scene_customer = new ScrollMagic.Scene({
            triggerElement: ".customer",
            duration: 0,
            offset: offsetDistance
        })
        .setTween(tl_customer)
        .addTo(controller);

    // build tween show
    var tl_show = new TimelineMax()
        .add(TweenMax.from(".show .title-area h1", opacitySpeed, {
            delay: -1.2,
            x: '100%',
            opacity: 0
        }))
        .add(TweenMax.from(".show .title-area p", opacitySpeed, {
            delay: -0.9,
            y: 100,
            opacity: 0
        }))
        .add(TweenMax.from(".show .manager-img-area .show-screen", opacitySpeed, {
            delay: -1.2,
            x: -100,
            opacity: 0
        }));

    // build scene show
    var scene_show = new ScrollMagic.Scene({
            triggerElement: ".show",
            duration: 0,
            offset: offsetDistance
        })
        .setTween(tl_show)
        .addTo(controller);
});