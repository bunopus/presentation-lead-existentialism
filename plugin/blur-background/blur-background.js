
/**
 * Blur background if section marked as data-background-blur
 *
 * @author https://github.com/bunopus
 */
(function() {
    Reveal.addEventListener('slidechanged', function (slide) {
        if (slide.currentSlide.hasAttribute('data-background-blur')) {
            setTimeout(() => {
                let background = $('.reveal div.backgrounds .present:visible');
                background.css({filter: `blur(20px) opacity(50%)`});
            }, 0);
        }
    }, false);
})();
