$(function () {
    var $slider = $("#art-carousel");
    var $wrapper = $(".rotate-slider");
    var $animateHolder = $(".animate-holder");
    var $animateElements = $animateHolder.find("*");
    var $more = $(".slider-more");
    var gallery = {
        duration: 5000,
        deg: 0,
        step: -36,
        //carousel: setInterval(carousel, 5000),
        prevElement: '<span class="prev"></span>',
        nextElement: '<span class="next"></span>',
        active: $slider.find("li.active"),
        direction: "left"
    };
    $wrapper.hover(function () {
        $more.animate({opacity: 0.85}, 400);
    }, function () {
        $more.animate({opacity: 0.5}, 200);
    });
    $slider.find("> li").first().addClass("active");
    var href = $slider.find("> li").first().find("a").attr("href");
    $more.attr("href", href);
    $wrapper.append(gallery.prevElement, gallery.nextElement);
    setTimeout(function () {
        miniSlide(0);
    }, 300);
    $(document).on("click", "#art-carousel > li > a", function (e) {
        e.preventDefault();
    });
    function carousel() {
        var el;
        $animateElements.attr("style", "");
        $slider.addClass("disable-hover");
        $slider.stop(true, true).animate({rotatedeg: gallery.deg += gallery.step}, {
            duration: 400,
            step: function (now) {
                if (now >= 360) {
                    now = now - 360;
                } else {
                    if (now <= -360) {
                        now = now + 360;
                    }
                }
                $(this).css("transform", "rotate(" + now + "deg)");
                $(this).css("-webkit-transform", "rotate(" + now + "deg)");
            },
            complete: function () {
                gallery.active = $slider.find("li.active").removeClass("active");
                if (gallery.direction == "right" && gallery.step == 36) {
                    if (gallery.active.prev() && gallery.active.prev().length) {
                        el = gallery.active.prev().index();
                        gallery.active.prev().addClass("active");
                    } else {
                        gallery.active.siblings(":last-child").addClass("active");
                        el = 9;
                    }
                }
                if (gallery.direction == "left" && gallery.step == -36) {
                    if (gallery.active.next() && gallery.active.next().length) {
                        el = gallery.active.next().index();
                        gallery.active.next().addClass("active");
                    } else {
                        gallery.active.siblings(":first-child").addClass("active");
                        el = 0;
                    }
                }
                if (!$slider.is(":animated")) {
                    miniSlide(el);
                }
                $slider.removeClass("disable-hover");
            }
        }, "ease");
    }

    function slideC() {
        var el;
        $animateElements.attr("style", "");
        $slider.addClass("disable-hover");
        $slider.stop(true, true).animate({rotatedeg: gallery.deg += gallery.step}, {
            duration: 400,
            step: function (now) {
                if (now >= 360) {
                    now = now - 360;
                } else {
                    if (now <= -360) {
                        now = now + 360;
                    }
                }
                $(this).css("transform", "rotate(" + now + "deg)");
                $(this).css("-webkit-transform", "rotate(" + now + "deg)");
            },
            complete: function () {
                gallery.active = $slider.find("li.active");
                el = $slider.find("li.active").index();
                if (!$slider.is(":animated")) {
                    miniSlide(el);
                }
                $slider.removeClass("disable-hover");
            }
        }, "ease");
    }

    $(document).on("click", "#art-carousel > li", function () {
        var itemClick = $(this).index();
        var itemActive = $slider.find("li.active").index();
        var stepScroll = itemClick - itemActive;
        $slider.children("li").removeClass("active");
        $(this).addClass("active");
        gallery.step = (-(stepScroll * 36));
        if (stepScroll * 36 >= 288) {
            gallery.step = (-(stepScroll * 36) + 360);
        }
        if (stepScroll * 36 <= -288) {
            gallery.step = (-(stepScroll * 36) - 360);
        }
        slideC();
        gallery.step = -36;
        gallery.direction = "left";
    });
    $(document).on("click", "div.rotate-slider > span.next", function () {
        if (!$slider.is(":animated")) {
            gallery.direction = "left";
            gallery.step = -36;
            carousel();
        }
    });
    $(document).on("click", "div.rotate-slider > span.prev", function () {
        if (!$slider.is(":animated")) {
            gallery.direction = "right";
            gallery.step = 36;
            carousel();
        }
    });
    /*
    $wrapper.hover(function () {
        clearInterval(gallery.carousel);
    }, function () {
        gallery.carousel = setInterval(carousel, gallery.duration);
        if (!$slider.is(":animated")) {
            $slider.stop(true, true);
            gallery.step = -36;
            gallery.direction = "left";
        }
    });
    */
    function miniSlide(el) {
        var href = $slider.find("li.active").find("a").attr("href");
        $more.attr("href", href);
        var element = el + 1;
        $(".animate-holder > div").find(".animate-wrapper").find("div").stop(true, true);
        switch (element) {
            case 1:
                var $item = $("#animation1");
                $item.css("display", "block");
                $item.find(".animate1").animate({top: 0}, 750);
                $item.find(".animate2").animate({bottom: 0}, 1200);
                $item.find(".animate3").animate({right: 55}, 1600);
                $item.find(".animate4").animate({left: 80}, 2000);
                break;
            case 2:
                var $item = $("#animation2");
                $item.css("display", "block");
                $item.find(".animate1").animate({top: 0}, 750);
                $item.find(".animate2").animate({top: 95}, 1600);
                $item.find(".animate3").animate({top: 5}, 2000);
                $item.find(".animate4").animate({top: 10}, 2200);
                break;
            case 3:
                var $item = $("#animation3");
                $item.css("display", "block");
                $item.find(".animate1").animate({top: 0}, 750);
                $item.find(".animate2").animate({top: 0}, 900);
                $item.find(".animate3").animate({top: 55, opacity: 1}, 1600);
                $item.find(".animate4").animate({top: -125}, 1500);
                $item.find(".animate5").animate({opacity: 1}, 1300);
                $item.find(".animate5").animate({opacity: 0}, 1800);
                $item.find(".animate6").animate({opacity: 1, top: 160}, 1700);
                $item.find(".animate6").animate({opacity: 0}, 2000);
                $item.find(".animate7").animate({opacity: 1, top: 150}, 1800);
                $item.find(".animate7").animate({opacity: 0}, 2100);
                break;
            case 4:
                var $item = $("#animation4");
                $item.css("display", "block");
                $item.find(".animate1").animate({opacity: 1}, 750);
                $item.find(".animate2").animate({top: 0}, 1000);
                $item.find(".animate3").animate({opacity: 1}, 3000);
                break;
            case 5:
                var $item = $("#animation5");
                $item.css("display", "block");
                $item.find(".animate1").animate({top: 0}, 750);
                $item.find(".animate2").animate({left: 148}, 600);
                $item.find(".animate3").animate({right: 98}, 650);
                break;
            case 6:
                var $item = $("#animation6");
                $item.css("display", "block");
                $item.find(".animate1").animate({left: 115}, 750);
                $item.find(".animate2").animate({left: 350}, 900);
                break;
            case 7:
                var $item = $("#animation7");
                $item.css("display", "block");
                $item.find(".animate1").animate({left: 105}, 750);
                $item.find(".animate2").animate({top: 20}, 1000);
                $item.find(".animate3").animate({right: 80}, 1500);
                $item.find(".animate4").animate({bottom: 0}, 2000);
                $item.find(".animate5").animate({top: 155}, 1800);
                break;
            case 8:
                var $item = $("#animation8");
                $item.css("display", "block");
                $item.find(".animate1").animate({top: 0}, 750);
                $item.find(".animate2").animate({top: 0}, 1000);
                $item.find(".animate3").animate({top: 0}, 1500);
                $item.find(".animate4").animate({left: 177}, 1500);
                $item.find(".animate5").animate({left: 394}, 1500);
                $item.find(".animate6").animate({opacity: 1}, 3000);
                $item.find(".animate7").animate({opacity: 1}, 2000);
                $item.find(".animate8").animate({opacity: 1}, 2000);
                break;
            case 9:
                var $item = $("#animation9");
                $item.css("display", "block");
                $item.find(".animate1").animate({top: -10}, 750);
                $item.find(".animate2").animate({right: 85}, 1200);
                $item.find(".animate3").animate({left: 75}, 1100);
                $item.find(".animate4").animate({top: 200}, 1500);
                $item.find(".animate5").animate({top: 45}, 1900);
                $item.find(".animate6").animate({top: 140}, 1200);
                break;
            case 10:
                var $item = $("#animation10");
                $item.css("display", "block");
                $item.find(".animate1").animate({opacity: 1}, 750);
                $item.find(".animate2").animate({left: 100}, 1200);
                $item.find(".animate3").animate({right: 80}, 1100);
                $item.find(".animate4").animate({top: 15}, 1500);
                $item.find(".animate5").animate({top: 5}, 1900);
                $item.find(".animate6").animate({top: 85}, 1700);
                break;
            default:
                console.log("Упс, что то пошло не так...");
        }
    }
});