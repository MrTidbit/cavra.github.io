$(document).ready(function(){

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
        $(this).on('mouseleave', function(){
            $('.popup').hide();
        });
    });
});
