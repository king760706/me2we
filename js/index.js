var imgList = new Array();
var imgPath = 'img/index/';
var imgCount = 7;
var isScreenScale = false;
var opacitySpeed = 0.8;
var offsetDistance = -200;

$(function () {
    // defined images
    for (var i = 1; i <= imgCount; i++) {
        imgList.push(imgPath + 'take-picture' + i + '.png');
    }
    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = {
        curImg: 0
    };
    // build tween
    var tween = TweenMax.to(obj, 0.5, {
        curImg: imgList.length - 1, // animate propery curImg to number of images
        roundProps: "curImg", // only integers so it can be used as an array index
        repeat: 0, // repeat times
        immediateRender: true, // load first image automatically
        ease: Linear.easeNone, // show every image the same ammount of time
        onUpdate: function () {
            $(".phone").attr("src", imgList[obj.curImg]); // set the image source
        }
    });

    // init controller
    var controller = new ScrollMagic.Controller();

    // build scene
    var scene = new ScrollMagic.Scene({
            triggerElement: ".phone",
            duration: 400
        })
        .setTween(tween)
        .addTo(controller);

    // build tween screen
    var tween_screen = TweenMax.to(".screen", 0.5, {
        scale: 1.4,
        ease: Linear.easeNone
    });

    // build scene screen
    var scene_screen = new ScrollMagic.Scene({
            triggerElement: ".screen",
            duration: 0
        })
        .setVelocity(".phone", {
            opacity: 0
        }, {
            duration: 400
        })
        .setTween(tween_screen)
        .on('start', function () {
            isScreenScale = !isScreenScale;
            if (isScreenScale) {
                $('.screen .screen-img').each(function (i) {
                    $(this).css('animation-delay', 0.4 * (i + 1) + 's').show();
                });
            } else {
                $('.screen .screen-img').removeAttr('style').hide();
            }
        })
        .addTo(controller);

    // build tween game
    var tl_game = new TimelineMax()
        .add(TweenMax.from(".game .title-area h1", opacitySpeed, {
            delay: -1.2,
            x: '-100%',
            opacity: 0
        }))
        .add(TweenMax.from(".game .title-area p", opacitySpeed, {
            delay: -0.9,
            y: 100,
            opacity: 0
        }))
        .add(TweenMax.from(".game .game-img-area h1, .game .game-img-area .game-phone, .game .game-img-area .game-pad", opacitySpeed, {
            delay: -1.2,
            x: 100,
            opacity: 0
        }));

    // build scene game
    var scene_game = new ScrollMagic.Scene({
            triggerElement: ".game",
            duration: 0,
            offset: offsetDistance
        })
        .setTween(tl_game)
        .addTo(controller);

    // build tween event
    var tl_event = new TimelineMax()
        .add(TweenMax.from(".event .title-area h1", opacitySpeed, {
            delay: -1.2,
            x: '100%',
            opacity: 0
        }))
        .add(TweenMax.from(".event .title-area p", opacitySpeed, {
            delay: -0.9,
            y: 100,
            opacity: 0
        }))
        .add(TweenMax.from(".event .event-img-area .event-item:eq(0)", opacitySpeed, {
            delay: -1.2,
            y: -100,
            opacity: 0
        }))
        .add(TweenMax.from(".event .event-img-area .event-item:eq(1)", opacitySpeed, {
            delay: -1.2,
            x: -100,
            opacity: 0
        }))
        .add(TweenMax.from(".event .event-img-area .event-item:eq(2)", opacitySpeed, {
            delay: -1.2,
            x: 100,
            opacity: 0
        }));

    // build scene event
    var scene_event = new ScrollMagic.Scene({
            triggerElement: ".event",
            duration: 0,
            offset: offsetDistance
        })
        .setTween(tl_event)
        .addTo(controller);

    // build tween album
    var tl_album = new TimelineMax()
        .add(TweenMax.from(".album .title-area h1", opacitySpeed, {
            delay: -1.2,
            x: '-100%',
            opacity: 0
        }))
        .add(TweenMax.from(".album .title-area p", opacitySpeed, {
            delay: -0.9,
            y: 100,
            opacity: 0
        }))
        .add(TweenMax.from(".album .album-img-area h1, .album .album-img-area p", opacitySpeed, {
            delay: -1.2,
            x: '100%',
            opacity: 0
        }))
        .add(TweenMax.from(".album .album-img-area .album-item:eq(0)", opacitySpeed, {
            delay: -1.2,
            x: -100,
            opacity: 0
        }))
        .add(TweenMax.from(".album .album-img-area .album-item:eq(1)", opacitySpeed, {
            delay: -1.2,
            x: 100,
            opacity: 0
        }))
        .add(TweenMax.from(".album .album-img-area .album-phone", opacitySpeed, {
            delay: -1.2,
            y: '50%',
            opacity: 0
        }));

    // build scene album
    var scene_album = new ScrollMagic.Scene({
            triggerElement: ".album",
            duration: 0,
            offset: offsetDistance
        })
        .setTween(tl_album)
        .addTo(controller);

    // build tween other
    var tl_other = new TimelineMax()
        .add(TweenMax.from(".other .other-img-area .other-link", opacitySpeed, {
            delay: -1.2,
            y: 100,
            opacity: 0
        }));

    // build scene other
    var scene_other = new ScrollMagic.Scene({
            triggerElement: ".other",
            duration: 0,
            offset: offsetDistance
        })
        .setTween(tl_other)
        .addTo(controller);

    // masonry
    var $container = $('.news-area');
    // 當圖片讀取完畢才執行
    $container.imagesLoaded(function () {
        // initialize
        $container.masonry({
            columnWidth: 20,
            itemSelector: '.news-item',
            percentPosition: true,
            horizontalOrder: true
        });

        // build tween news
        var tl_news = new TimelineMax()
            .add(TweenMax.from(".news .title-area h1", opacitySpeed, {
                delay: -1.2,
                y: 100,
                opacity: 0
            }))
            .add(TweenMax.from(".news .news-area .news-item", opacitySpeed, {
                delay: -0.8,
                y: 100,
                opacity: 0
            }));

        // build scene news
        var scene_news = new ScrollMagic.Scene({
                triggerElement: ".news",
                duration: 0,
                offset: offsetDistance
            })
            .setTween(tl_news)
            .addTo(controller);
    });
});