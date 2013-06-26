/*jslint browser:true*/

/*global jQuery*/

(function ($) {
    "use strict";

    var popup;

    $(document).ready(function () {
        var $controlPanel = $('#control-panel'),

            $controls = $controlPanel.find('.btn');

        $('#engine-starter').click(function () {
            popup = window.open('examples.html', 'Školení GIT - examples');
            popup.onbeforeunload = function () {
                $('#engine-starter').show();

                $('#control-panel').addClass('hidden');

                $('#hide-all').addClass('hidden');
            };

            $('#control-panel').removeClass('hidden');

            $('#hide-all').removeClass('hidden');

            $(this).hide();
        });

        $('#hide-all').click(function () {
            $controls.filter('.active').click();
        });

        $('#pop-up-control-init').click(function () {
            $('.example', popup.document).hide();

            $('#git-init', popup.document).show();
        });

        $controlPanel.on('click', '.btn', function () {
            var $elem = $(this);

            if ($elem.is('.active')) {
                $elem.removeClass('active');
            } else {
                $elem.addClass('active');
            }
        });

        $controlPanel.on('click', '.btn', function () {
            var target = $(this).data('example'),

                slide = popup.document.getElementById(target);

            if ($(this).is('.active')) {
                $(slide).addClass('active');
            } else {
                $(slide).removeClass('active');
            }
        });
    });
}(jQuery));