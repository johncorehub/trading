/* =====================================================
Template Name   : Cryptex
Description     : Crypto Exchange HTML5 Template
Author          : Themesland
Version         : 1.2
=======================================================*/


(function ($) {
    "use strict";


    // multi level dropdown menu
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass('show');
        });
        return false;
    });



    // data-background    
    $(document).on('ready', function () {
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    });


    // wow init
    new WOW().init();


    // partner-slider
    $('.partner-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    // testimonial-slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });



    // preloader
    $(window).on('load', function () {
        $(".preloader").fadeOut("slow");
    });


    // fun fact counter
    $('.counter').countTo();
    $('.counter-box').appear(function () {
        $('.counter').countTo();
    }, {
        accY: -100
    });



    // magnific popup init
    $(".popup-gallery").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    // scroll to top
    $(window).scroll(function () {

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#scroll-top").fadeIn('slow');
        } else {
            $("#scroll-top").fadeOut('slow');
        }
    });

    $("#scroll-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("fixed-top");
        } else {
            $('.navbar').removeClass("fixed-top");
        }
    });


    // countdown
    if ($('#countdown').length) {
        $('#countdown').countdown('2030/01/30', function (event) {
            $(this).html(event.strftime('' + '<div class="row">' + '<div class="col countdown-single">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">Day%!d</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">Hours</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">Minutes</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">Seconds</h5>' + '</div>' + '</div>'));
        });
    }


    // copywrite date
    let date = new Date().getFullYear();
    $("#date").html(date);


    //nice select
    if($('.select').length){
        $('.select').niceSelect();
    }


     // profile image upload btn
     $(".profile-img-btn").click(function () {
        $(".profile-img-file").click();
    });
    

    // copy link,code,api key
    $('#copy-link-btn').click(function(){
        navigator.clipboard.writeText($('#copy-link-input').val());
        $('#copy-link-btn').text('Copied');
    });
    $('#copy-code-btn').click(function(){
        navigator.clipboard.writeText($('#copy-code-input').val());
        $('#copy-code-btn').text('Copied');
    });
    $('#copy-api-btn').click(function(){
        navigator.clipboard.writeText($('#copy-api-input').val());
        $('#copy-api-btn').text('Copied');
    });



    // scheme-switcher
    var schemeSwitcher = $('.scheme-switcher');
    if(schemeSwitcher.length){

        let theme = localStorage.getItem('theme');
        const goDarkBtn   = document.querySelector('.go-dark-btn')
        const goLightBtn  = document.querySelector('.go-light-btn')

        const darkTheme = function() {
            goDarkBtn.style.display="none";
            goLightBtn.style.display="block";
            document.documentElement.classList.remove('light-scheme');
            document.documentElement.classList.add('dark-scheme');
            localStorage.setItem('theme', 'dark-scheme');
        }

        const lightTheme = function() {
            goLightBtn.style.display="none";
            goDarkBtn.style.display="block";
            document.documentElement.classList.add('light-scheme');
            document.documentElement.classList.remove('dark-scheme');
            localStorage.setItem('theme', 'light-scheme');
        }

        document.addEventListener('DOMContentLoaded', function() {
            localStorage.getItem('theme');    
            if (localStorage.theme === 'dark-scheme') {
            darkTheme();
            } else if (localStorage.theme === 'light-scheme') {
            lightTheme();
            } else {
            lightTheme();
            }
        });

        goDarkBtn.addEventListener('click', function() {
            darkTheme();
        });

        goLightBtn.addEventListener('click', function() {
            lightTheme();
        });
    }


})(jQuery);


 window.calculatePipValue = function() {
        const pair = document.getElementById('calcPair').value;
        const lots = parseFloat(document.getElementById('calcLots').value);
        const accountCurrency = document.getElementById('calcAccountCurrency').value;
        const resultElement = document.getElementById('pipValueResult');

        if (isNaN(lots) || lots <= 0) {
            resultElement.innerText = 'Please enter a valid trade size.';
            return;
        }

        let pipValueUSD = 0; 

        const fxRates = {
            'EURUSD': 1.0850, 'GBPUSD': 1.2500, 'USDJPY': 145.00,
            'AUDUSD': 0.6500, 'NZDUSD': 0.6000, 'USDCAD': 1.3600,
            'USDCHF': 0.9000, 'EURJPY': 157.30, 'GBPJPY': 181.25
        };

        const conversionRatesToUSD = {
            'USD': 1, 'EUR': 1.0850, 'GBP': 1.2500,
            'JPY': 1 / 145.00, 'AUD': 0.6500, 'CAD': 1 / 1.3600,
            'CHF': 1 / 0.9000, 'INR': 1 / 83.50 
        };

        if (pair.includes('JPY')) {
            const usdJpyRate = fxRates['USDJPY'] || 145.00;
            pipValueUSD = (1000 / usdJpyRate) * lots;
        } else if (pair.includes('USD') && pair.indexOf('USD') === pair.length - 3) {
            pipValueUSD = 10 * lots;
        } else if (pair.includes('USD') && pair.indexOf('USD') === 0) {
            pipValueUSD = 10 * lots; 
        } else {
            const quoteCurrency = pair.slice(-3);
            if (quoteCurrency === 'JPY') {
                 const usdJpyRate = fxRates['USDJPY'] || 145.00;
                 pipValueUSD = (1000 / usdJpyRate) * lots;
            } else {
                pipValueUSD = 10 * lots; 
            }
        }
        
        let finalPipValue = pipValueUSD * conversionRatesToUSD[accountCurrency];

        resultElement.innerHTML = `<strong>${finalPipValue.toFixed(2)} ${accountCurrency}</strong> per pip`;
    };







