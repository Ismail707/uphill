(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

        // START MENU JS
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 50) {
                $('.main-nav').addClass('menu-shrink');
            } else {
                $('.main-nav').removeClass('menu-shrink');
            }
        });		
        // END MENU JS

        // Mean Menu
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });


        // Home Slider JS
        $('.home-slider').owlCarousel({
            items:1,
            loop:true,
            margin:10,
            nav: true,
            dots: false,
            autoplay: true,
            smartSpeed: 550,
            autoplayTimeout:3000,
            navText: [
                "<i class='icofont-rounded-left'></i>",
                "<i class='icofont-rounded-right'></i>"
            ],
        })
        // Work Slider JS
        $('.work-slider').owlCarousel({
            loop: false,
            margin:10,
            nav: true, 
            dots:  false,
            smartSpeed: 550,
            autoplay: true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            navText: [
                "<i class='icofont-rounded-left'></i>",
                "<i class='icofont-rounded-right'></i>"
            ],
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }
            
        });

        // Home Slider-two JS
        $('.home-slider-two').owlCarousel({
            items:1,
            loop:true,
            margin:10,
            nav: true,
            dots: false,
            autoplay: true,
            smartSpeed: 550,
            autoplayTimeout:3000,
            navText: [
                "<i class='icofont-rounded-left'></i>",
                "<i class='icofont-rounded-right'></i>"
            ],
        })


        // team Slider JS
        $('.team-slider').owlCarousel({
            loop: false,
            margin:10,
            nav: true, 
            dots:  false,
            smartSpeed: 550,
            autoplay: true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            navText: [
                "<i class='icofont-rounded-left'></i>",
                "<i class='icofont-rounded-right'></i>"
            ],
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }
            
        });

        // feedback Slider JS
        $('.feedback-slider').owlCarousel({
            items:1,
            loop:true,
            margin:15,
            nav: true,
            dots: false,
            autoplay: true,
            smartSpeed: 550,
            autoplayTimeout:3000,
            navText: [
                "<i class='icofont-rounded-left'></i>",
                "<i class='icofont-rounded-right'></i>"
            ],
        })

        // CounterUp JS
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });


        // WOW JS
        new WOW().init();


        // Popup youtube JS
        $('.popup-youtube').magnificPopup({
            disableOn: 300,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // Price Slider JS
        $('.slider-pric').owlCarousel({
            loop:true,
            center:true,
            margin:10,
            nav: true,
            dots: false,
            smartSpeed: 1000,
            autoplay: true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            navText: [
                "<i class='icofont-thin-left'></i>",
                "<i class='icofont-thin-right'></i>"
            ],
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                    nav: true
                }
            }
        })


        // Back to top 
        $('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-hand-drag1"></i></div>');
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        }); 
        $('#toTop').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 900);
            return false;
        });


        // PRELOADER
        jQuery(window).on('load',function(){
            jQuery(".spinner").fadeOut(500);
        });
     

        // Accordian JS //
        if (document.readyState !== 'loading') {
            console.log("ready!");
            ready();
        } else {
            document.addEventListener('DOMContentLoaded', ready);
        }
        
        function ready() {
            var accordion = document.getElementsByTagName("dt");
        
            for (var i = 0; i<accordion.length; i++){
                accordion[i].addEventListener('click', function(){
                    accordionClick(event);
                
                });
            }
        }
        var accordionClick = (eventHappened) => {
                console.log(eventHappened);
            var targetClicked =event.target;
                console.log(targetClicked);
            var classClicked = targetClicked.classList;
                console.log("target clicked: " + targetClicked);
                console.log(classClicked[0]);
            while ((classClicked[0] !="description-title")){
                console.log("parent element: " + targetClicked.parentElement);
                targetClicked = targetClicked.parentElement;
                classClicked = targetClicked.classList;
                console.log("target clicked while in loop:" + targetClicked);
                console.log("class clicked while in loop: " + classClicked);
            }
            var description = targetClicked.nextElementSibling;
                console.log(description);
            var expander = targetClicked.children[0];
            if (description.style.maxHeight){
                description.style.maxHeight = null;
                expander.innerHTML = "&#10133;"  
            }
            else {
                var allDescriptions = document.getElementsByTagName("dd");
                for (var i = 0; i < allDescriptions.length; i++){
                    console.log("current description: " + allDescriptions[i]);
                    if (allDescriptions[i].style.maxHeight){
                        console.log("there is a description already open");
                        allDescriptions[i].style.maxHeight = null;
                        allDescriptions[i].previousElementSibling.children[0].innerHTML = "&#10133;"
                    }
                }
                description.style.maxHeight = description.scrollHeight + "px";
                expander.innerHTML = "&#10134;";
                
            }
        }
  
        // Timer Counter Js //
            const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
    
            let countDown = new Date('march 18, 2020 2:23:15').getTime(),
            x = setInterval(function() {
    
            let now = new Date().getTime(),
            distance = countDown - now;
    
            document.getElementById('days') .innerText = Math.floor(distance / (day)),
            document.getElementById('hours') .innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes') .innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds') .innerText = Math.floor((distance % (minute)) / second);
        }, second)

        }); 	
    })(jQuery);