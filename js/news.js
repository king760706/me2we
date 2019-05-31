$(function () {
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
    });
});