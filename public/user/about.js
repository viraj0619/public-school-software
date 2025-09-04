$(document).ready(function () {
    $(".counter").each(function () {
        var count = $(this);
        var countTo = count.attr('data-count');

        $({ countNum: count.text() }).animate({
            countNum: countTo,
        }, {
            duration: 7000,
            easing: 'linear',
            step: function () {
                count.text(Math.floor(this.countNum));
            },
            complete: function () {
                count.text(this.countNum);
            }
        });
    });
});



// testominal
    $(document).ready(function(){
        $('#testimonial-slider').owlCarousel({
            items:1,
            itemsDesktop:[1000,1],
            itemsDesktopSmall:[979,1],
            itemsTablet:[768,1],
            pagination: false,
            navigation:true,
            navigationText:["",""],
            slideSpeed:1000,
            autoPlay:true
        });
    });

