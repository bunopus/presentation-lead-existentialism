// Set animation delay if data-delay is specified
Reveal.addEventListener('ready', function ( event ) {
    $('*[data-delay]').each( function () {
        var delay = $(this).attr("data-delay");
        $(this).css("-webkit-animation-delay", delay+"s");
        $(this).css("animation-delay", delay+"s");
    });
});

// Set animation duration if data-duration is specified
Reveal.addEventListener('ready', function ( event ) {
    $('*[data-duration]').each( function () {
        var duration = $(this).attr("data-duration");
        $(this).css("-webkit-animation-duration", duration+"s");
        $(this).css("animation-duration", duration+"s");
    });
});

// Animate items that are not in a fragment
Reveal.addEventListener('slidechanged', function( event ) {
    // Animate elements that are not a fragment (or in a fragment)
    var filter = '*[data-animate]:not(.fragment):not(.fragment *)';

    $(event.currentSlide).find(filter).each( function () {
        $(this).addClass('animated');
        $(this).addClass($(this).attr('data-animate'));
    });
    $(event.previousSlide).find(filter).each( function () {
        $(this).removeClass('animated');
        $(this).removeClass($(this).attr('data-animate'));
    });
});

// Animate fragments
Reveal.addEventListener('fragmentshown', function( event ) {
    function loop(i, el) {
        if ($(el).attr('data-animate')) {
            $(el).addClass('animated');
            $(el).addClass($(el).attr('data-animate'));
        }
        $.each($(el).children().not('.fragment'), loop);
    };
    $.each(event.fragments, loop);
});

// Make the animation runnable again if fragment is hidden
Reveal.addEventListener('fragmenthidden', function( event ) {
    function loop(i, el) {
        if ($(el).attr('data-animate')) {
            $(el).removeClass('animated');
            $(el).removeClass($(el).attr('data-animate'));
        }
        $.each($(el).children().not('.fragment'), loop);
    };
    $.each(event.fragments, loop);
});