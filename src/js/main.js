$( document ).ready(function() {

    new WOW().init();

    var phoneMask = IMask(
        document.getElementById('phoneNumber'), {
            mask: '+{7} 000 000-00-00'
        });

    var inputs = $('input#phoneNumber');
    var button = $('button[type="submit"]');

    (function() {
        inputs.keyup(function() {
            checkform();
        });
    })();

    function checkform()
    {
        var empty = false;
        inputs.each(function() {
            if ($(this).val() === '') {
                empty = true;
            }
        });
        if (empty) {
            button.attr('disabled', 'disabled');
        } else {
            button.removeAttr('disabled');
        }
    }

    $(".btn").click(function (){
        $('html, body').animate({
            scrollTop: $("#callback").offset().top -150
        }, 1000);
    });

    swiperTop = new Swiper('.swiper-top', {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        effect: 'fade',
        navigation: {
            nextEl: '.nav-next',
            prevEl: '.nav-prev',
        },
    });

    swiperDescription = new Swiper('.swiper-description', {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: '.nav-next',
            prevEl: '.nav-prev',
        },
        pagination: {
            el: '.pagination',
            clickable: true,
            bulletClass: 'nav-bullet',
            bulletActiveClass: 'active'
        },
    });

    swiperInstall = new Swiper('.swiper-install', {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: '.nav-next',
            prevEl: '.nav-prev',
        },
        pagination: {
            el: '.pagination',
            clickable: true,
            bulletClass: 'nav-bullet',
            bulletActiveClass: 'active'
        },
    });

    swiperVoice = new Swiper('.swiper-voice', {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: '.nav-next',
            prevEl: '.nav-prev',
        },
        pagination: {
            el: '.pagination',
            clickable: true,
            bulletClass: 'nav-bullet',
            bulletActiveClass: 'active'
        },
    });

    swiperApp = new Swiper('.swiper-app', {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        navigation: {
            nextEl: '.app-nav-next',
            prevEl: '.app-nav-prev',
        },
        pagination: {
            el: '.pagination',
            clickable: true,
            bulletClass: 'nav-bullet',
            bulletActiveClass: 'active'
        },
    });

    $('.app-option').hover(function(e) {
        e.preventDefault();
        var num_slide = $(this).data('slide-next');

        $('#option'+num_slide).css('display', 'inline-block');
        $('.app-img').not('#option'+num_slide).css('display', 'none');
    });

    $('body').on('click', '.app-option', function(event) {
        event.preventDefault();
        $(this).addClass('active');
        $('.app-option').not(this).removeClass('active');
    });

    $('#intro').mousedown(function(e) {
        var startingMarginLeft = $("#introover").css("marginLeft").replace(/[^-\d\.]/g, '');
        var startingIntromoverRight = $("#intro-mover").css("right").replace(/[^-\d\.]/g, '');
        var startingX = e.pageX;
        var width = $(window).width();
        $(document).mousemove(function(e) {
            movedIntro(e, startingMarginLeft, startingX, startingIntromoverRight, width);
        });
        $(document).one('mouseup', function() {
            $(document).unbind();
        });
        return false;
    });    $('#intro2').mousedown(function(e) {
        var startingMarginLeft = $("#introover2").css("marginLeft").replace(/[^-\d\.]/g, '');
        var startingIntromoverRight = $("#intro-mover2").css("right").replace(/[^-\d\.]/g, '');
        var startingX = e.pageX;
        var width = $(window).width();
        $(document).mousemove(function(e) {
            movedIntro2(e, startingMarginLeft, startingX, startingIntromoverRight, width);
        });
        $(document).one('mouseup', function() {
            $(document).unbind();
        });
        return false;
    });
    function movedIntro(e, startingMarginLeft, startingX, startingIntromoverRight, width) {
        var newMarginLeft = parseInt(startingMarginLeft) + parseInt(e.pageX) - parseInt(startingX);
        var newRight = parseInt(startingIntromoverRight) + ((parseInt(e.pageX) - parseInt(startingX)) * -1);
        if (newMarginLeft <= 0 && newMarginLeft >= -(width * 0.95)) {
            $("#introover").css("marginLeft", newMarginLeft);
            $(".introover-bg").css("left", newMarginLeft * -1);
            $("#intro-mover").css("right", newRight);
        }
    }
    function movedIntro2(e, startingMarginLeft, startingX, startingIntromoverRight, width) {
        var newMarginLeft = parseInt(startingMarginLeft) + parseInt(e.pageX) - parseInt(startingX);
        var newRight = parseInt(startingIntromoverRight) + ((parseInt(e.pageX) - parseInt(startingX)) * -1);
        if (newMarginLeft <= 0 && newMarginLeft >= -(width * 0.95)) {
            $("#introover2").css("marginLeft", newMarginLeft);
            $(".introover-bg2").css("left", newMarginLeft * -1);
            $("#intro-mover2").css("right", newRight);
        }
    }
    var currAngle = 0.2;
    function calculateBorderLine() {
        var width = $("#introover").css("width").replace(/[^-\d\.]/g, '');
        var b = width * 0.2;
        var a = $(window).height();
        var tana = a / b;
        var alfa = toDegrees(Math.atan(tana));
        var beta = parseFloat(90 - alfa).toFixed(2) * -1;
        $("#intro-mover").css({
            right: width * 0.5,
        });
    }
    function calculateBorderLine2() {
        var width = $("#introover2").css("width").replace(/[^-\d\.]/g, '');
        var b = width * 0.2;
        var a = $(window).height();
        var tana = a / b;
        var alfa = toDegrees2(Math.atan(tana));
        var beta = parseFloat(90 - alfa).toFixed(2) * -1;
        $("#intro-mover2").css({
            right: width * 0.5,
        });
    }
    function toDegrees(angle) {
        return angle * (180 / Math.PI);
    }
    function toDegrees2(angle) {
        return angle * (180 / Math.PI);
    }
    initIntroOver();
    initIntroOver2();
    function initIntroOver() {
        calculateBorderLine();
        var newMarginLeft = -$("#introover").css("width").replace(/[^-\d\.]/g, '')/2;
        var img = $('<img>').attr("src", $("#introover").data("src"));
        img.css("display", "none");
        $("body").append(img);
        img.on("load", function() {
            setTimeout(function() {
                $("#introover").animate({
                    marginLeft: newMarginLeft
                }, 2000);
                $(".introover-bg").animate({
                    left: newMarginLeft * -1
                }, 2000, function() {
                    $("#intro-mover").fadeIn();
                    var frame = "<iframe width='100%' height='100%' src='https://roundme.com/embed/xuAW0fFgDCwYmfnbk2MZ' frameborder='0' autorotation webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
                    $(".framegoesinside").append(frame);
                });
            }, 1250);
        });
    }
    function initIntroOver2() {
        calculateBorderLine2();
        var newMarginLeft = -$("#introover2").css("width").replace(/[^-\d\.]/g, '')/2;
        var img = $('<img>').attr("src", $("#introover2").data("src"));
        img.css("display", "none");
        $("body").append(img);
        img.on("load", function() {
            setTimeout(function() {
                $("#introover2").animate({
                    marginLeft: newMarginLeft
                }, 2000);
                $(".introover-bg2").animate({
                    left: newMarginLeft * -1
                }, 2000, function() {
                    $("#intro-mover2").fadeIn();
                    var frame = "<iframe width='100%' height='100%' src='https://roundme.com/embed/xuAW0fFgDCwYmfnbk2MZ' frameborder='0' autorotation webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
                    $(".framegoesinside").append(frame);
                });
            }, 1250);
        });
    }
    function initIntroOverForMobile() {
        var frame = "<iframe width='100%' height='100%' src='https://roundme.com/embed/xuAW0fFgDCwYmfnbk2MZ' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
        $(".framegoesinside").append(frame);
    }
    $(window).on("resize", function() {
        calculateBorderLine();
        $("#intro-mover").hide();
        var newMarginLeft = -$("#introover").css("width").replace(/[^-\d\.]/g, '')/2;
        $("#introover").stop().animate({
            marginLeft: newMarginLeft
        }, 900);
        $(".introover-bg").stop().animate({
            left: newMarginLeft * -1
        }, 900, function() {
            $("#intro-mover").fadeIn();
        });
        calculateBorderLine2();
        $("#intro-mover2").hide();
        var newMarginLeft = -$("#introover2").css("width").replace(/[^-\d\.]/g, '')/2;
        $("#introover2").stop().animate({
            marginLeft: newMarginLeft
        }, 900);
        $(".introover-bg2").stop().animate({
            left: newMarginLeft * -1
        }, 900, function() {
            $("#intro-mover2").fadeIn();
        });
    });

});