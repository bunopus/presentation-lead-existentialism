/**
 * A plugin which enables can run js code on specific
 * slide or fragment.
 *
 * @author bunopus
 */
var RevealScriptRunner = window.RevealScriptRunner || (function() {

        var runners = runners = Reveal.getConfig().script_runner || {};
        Reveal.addEventListener('slidechanged', function (event) {
            _onEvent('slidechanged', event)
        });
        Reveal.addEventListener('fragmentshown', function (event) {
            _onEvent('fragmentshown', event)
        });
        Reveal.addEventListener('fragmenthidden', function (event) {
            _onEvent('fragmenthidden', event)
        });


        function _onEvent(event_name, event) {
            var subject;
            switch (event_name) {
                case 'slidechanged':
                    subject = event.currentSlide;
                    break;
                case 'fragmentshown':
                case 'fragmenthidden':
                    subject = event.fragment;
            }
            var attributes = subject.attributes;
            for (var i = 0; i < attributes.length; i++) {
                var attr = attributes[i].name;
                if (runners[attr] && runners[attr][event_name]) {
                    runners[attr][event_name](event);
                }
            }
        }
    })();
