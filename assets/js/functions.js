$(document).ready(function() {

    // Script for dynamic smooth scrolling
    // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    $('.text-popup span').on('mouseenter', function(e) {
        $('.popup').html('<img src="assets/img/' + $(this).data('id') + '.png">');
        $('.popup').css({
            left: $(this).position().left + ($(this).width() / 2) - 75,
            top: $(this).position().top - 160
        }).show();
        $(this).on('mouseleave', function() {
            $('.popup').hide();
        });
    });

    // var typed = new Typed(".typed-1", {
    //     strings: ["whoami^2000"],
    //     typeSpeed: 100,
    //     startDelay: 500,
    //     onComplete: function() {
    //         $('.typed-cursor').hide();
    //         $('#terminal-response-1').show();
    //         $('#terminal-prompt-2').show();
    //
    //         var typed = new Typed(".typed-2", {
    //             strings: ["ls^1000"],
    //             typeSpeed: 100,
    //             startDelay: 2000,
    //             onComplete: function() {
    //                 $('.typed-cursor').hide();
    //                 $('#terminal-response-2').show();
    //                 $('#terminal-prompt-3').show();
    //
    //                 var typed = new Typed(".typed-3", {
    //                     strings: ["cat about.txt^2000"],
    //                     typeSpeed: 60,
    //                     startDelay: 2000,
    //                     onComplete: function() {
    //                         $('.typed-cursor').hide();
    //                         $('#terminal-response-3').show();
    //                         $('#terminal-prompt-4').show();
    //
    //                     },
    //                 });
    //             },
    //         });
    //     },
    // });

});
