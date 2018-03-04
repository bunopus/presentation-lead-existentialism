
/**
 * Show splashscreen until all content is loaded
 *
 * @author https://github.com/bunopus
 */
(function() {
    let windowLoaded;
    const loaderHtml = '<div class="loader" style="' +
        'position: absolute;' +
        'width: 100%;' +
        'height: 100%;' +
        'display: flex;' +
        'align-items: center;' +
        'justify-content: center;' +
        'z-index: 1000;' +
        'background-color: rgba(255, 255, 255, 0.91);' +
        '"><div style="width: 100px">Loading<span class="dots"></span></div></div>';

    const loader = $(loaderHtml).prependTo('body');
    const dots = $('.dots', loader);

    Reveal.configure({ viewDistance: Number.MAX_VALUE });

    window.addEventListener('load', function () {
        windowLoaded = true;
    });

    (function waitForLoad(){
        if(windowLoaded) {
            console.log('All data loaded');
            loader.remove();
            return;
        }

        let text = dots.text();
        text += '.';
        if(text.length > 3) text = '';
        dots.html(text);

        console.log('Waiting for data');

        setTimeout(waitForLoad, 1000);
    })();
})();
