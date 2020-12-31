$(document).ready(function() {
    // Preload
    if (
        $(window).load(function() {
            $("#preloader").fadeOut("slow", function() {
                $(this).remove();
            });
        })
    );
    // humbergermenu
    if ($('.cd-stretchy-nav').length > 0) {
        var stretchyNavs = $('.cd-stretchy-nav');
        stretchyNavs.each(function() {
            var stretchyNav = $(this),
                stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
            stretchyNavTrigger.on('click', function(event) {
                event.preventDefault();
                stretchyNav.toggleClass('nav-is-visible');
            });
        });
        $(document).on('click', function(event) {
            (!$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span')) && stretchyNavs.removeClass('nav-is-visible');
        });
    }
    // tab nav mobile
    $('.tabcontent__scrol__menu').on('click', function() {
        $(".burger").click();
    });
    $('.tabcontent__scrol__menu').on('click', function() {
        $('.main-nav.is-open').removeClass('is-open');
    });
    // btnplay
    $('#submit1').on('click', function() {
        if ($('.iframe-container1').css('display') == 'none') {
            $('.iframe-container1').css('display', 'block');
        } else {
            $('.iframe-container1').css('display', 'none');
        }
    });
    $('#submit2').on('click', function() {
        if ($('.iframe-container2').css('display') == 'none') {
            $('.iframe-container2').css('display', 'block');
        } else {
            $('.iframe-container2').css('display', 'none');
        }
    });
    $('#submit3').on('click', function() {
        if ($('.iframe-container3').css('display') == 'none') {
            $('.iframe-container3').css('display', 'block');
        } else {
            $('.iframe-container3').css('display', 'none');
        }
    });
    $('#submit4').on('click', function() {
        if ($('.iframe-container4').css('display') == 'none') {
            $('.iframe-container4').css('display', 'block');
        } else {
            $('.iframe-container4').css('display', 'none');
        }
    });
    $('#submit5').on('click', function() {
        if ($('.iframe-container5').css('display') == 'none') {
            $('.iframe-container5').css('display', 'block');
        } else {
            $('.iframe-container5').css('display', 'none');
        }
    });
    $('#submit6').on('click', function() {
        if ($('.iframe-container6').css('display') == 'none') {
            $('.iframe-container6').css('display', 'block');
        } else {
            $('.iframe-container6').css('display', 'none');
        }
    });
    $('#submit7').on('click', function() {
        if ($('.iframe-container7').css('display') == 'none') {
            $('.iframe-container7').css('display', 'block');
        } else {
            $('.iframe-container7').css('display', 'none');
        }
    });
    $('#submit8').on('click', function() {
        if ($('.iframe-container8').css('display') == 'none') {
            $('.iframe-container8').css('display', 'block');
        } else {
            $('.iframe-container8').css('display', 'none');
        }
    });
    $('#submit9').on('click', function() {
        if ($('.iframe-container9').css('display') == 'none') {
            $('.iframe-container9').css('display', 'block');
        } else {
            $('.iframe-container9').css('display', 'none');
        }
    });
    $('#submit10').on('click', function() {
        if ($('.iframe-container10').css('display') == 'none') {
            $('.iframe-container10').css('display', 'block');
        } else {
            $('.iframe-container10').css('display', 'none');
        }
    });
    $('#submit11').on('click', function() {
        if ($('.iframe-container11').css('display') == 'none') {
            $('.iframe-container11').css('display', 'block');
        } else {
            $('.iframe-container11').css('display', 'none');
        }
    });
    $('#submit12').on('click', function() {
        if ($('.iframe-container12').css('display') == 'none') {
            $('.iframe-container12').css('display', 'block');
        } else {
            $('.iframe-container12').css('display', 'none');
        }
    });
    $('#submit13').on('click', function() {
        if ($('.iframe-container13').css('display') == 'none') {
            $('.iframe-container13').css('display', 'block');
        } else {
            $('.iframe-container13').css('display', 'none');
        }
    });
    $('#submit14').on('click', function() {
        if ($('.iframe-container14').css('display') == 'none') {
            $('.iframe-container14').css('display', 'block');
        } else {
            $('.iframe-container14').css('display', 'none');
        }
    });
    $('#submit15').on('click', function() {
        if ($('.iframe-container15').css('display') == 'none') {
            $('.iframe-container15').css('display', 'block');
        } else {
            $('.iframe-container15').css('display', 'none');
        }
    });
    $('#submit16').on('click', function() {
        if ($('.iframe-container16').css('display') == 'none') {
            $('.iframe-container16').css('display', 'block');
        } else {
            $('.iframe-container16').css('display', 'none');
        }
    });
    $('#submit17').on('click', function() {
        if ($('.iframe-container17').css('display') == 'none') {
            $('.iframe-container17').css('display', 'block');
        } else {
            $('.iframe-container17').css('display', 'none');
        }
    });
    $('#submit18').on('click', function() {
        if ($('.iframe-container18').css('display') == 'none') {
            $('.iframe-container18').css('display', 'block');
        } else {
            $('.iframe-container18').css('display', 'none');
        }
    });
    $('#submit19').on('click', function() {
        if ($('.iframe-container19').css('display') == 'none') {
            $('.iframe-container19').css('display', 'block');
        } else {
            $('.iframe-container19').css('display', 'none');
        }
    });
    $('#submit20').on('click', function() {
        if ($('.iframe-container20').css('display') == 'none') {
            $('.iframe-container20').css('display', 'block');
        } else {
            $('.iframe-container20').css('display', 'none');
        }
    });
    $('#submit21').on('click', function() {
        if ($('.iframe-container21').css('display') == 'none') {
            $('.iframe-container21').css('display', 'block');
        } else {
            $('.iframe-container21').css('display', 'none');
        }
    });
    $('#submit22').on('click', function() {
        if ($('.iframe-container22').css('display') == 'none') {
            $('.iframe-container22').css('display', 'block');
        } else {
            $('.iframe-container22').css('display', 'none');
        }
    });
    $('#submit23').on('click', function() {
        if ($('.iframe-container23').css('display') == 'none') {
            $('.iframe-container23').css('display', 'block');
        } else {
            $('.iframe-container23').css('display', 'none');
        }
    });
    $('#submit24').on('click', function() {
        if ($('.iframe-container24').css('display') == 'none') {
            $('.iframe-container24').css('display', 'block');
        } else {
            $('.iframe-container24').css('display', 'none');
        }
    });
    $('#submit25').on('click', function() {
        if ($('.iframe-container25').css('display') == 'none') {
            $('.iframe-container25').css('display', 'block');
        } else {
            $('.iframe-container25').css('display', 'none');
        }
    });
    $('#submit26').on('click', function() {
        if ($('.iframe-container26').css('display') == 'none') {
            $('.iframe-container26').css('display', 'block');
        } else {
            $('.iframe-container26').css('display', 'none');
        }
    });
    $('#submit27').on('click', function() {
        if ($('.iframe-container27').css('display') == 'none') {
            $('.iframe-container27').css('display', 'block');
        } else {
            $('.iframe-container27').css('display', 'none');
        }
    });
    $('#submit28').on('click', function() {
        if ($('.iframe-container28').css('display') == 'none') {
            $('.iframe-container28').css('display', 'block');
        } else {
            $('.iframe-container28').css('display', 'none');
        }
    });
    $('#submit29').on('click', function() {
        if ($('.iframe-container29').css('display') == 'none') {
            $('.iframe-container29').css('display', 'block');
        } else {
            $('.iframe-container29').css('display', 'none');
        }
    });
    $('#submit30').on('click', function() {
        if ($('.iframe-container30').css('display') == 'none') {
            $('.iframe-container30').css('display', 'block');
        } else {
            $('.iframe-container30').css('display', 'none');
        }
    });
    $('#submit31').on('click', function() {
        if ($('.iframe-container31').css('display') == 'none') {
            $('.iframe-container31').css('display', 'block');
        } else {
            $('.iframe-container31').css('display', 'none');
        }
    });
    $('#submit32').on('click', function() {
        if ($('.iframe-container32').css('display') == 'none') {
            $('.iframe-container32').css('display', 'block');
        } else {
            $('.iframe-container32').css('display', 'none');
        }
    });
    $('#submit33').on('click', function() {
        if ($('.iframe-container33').css('display') == 'none') {
            $('.iframe-container33').css('display', 'block');
        } else {
            $('.iframe-container33').css('display', 'none');
        }
    });
    $('#submit34').on('click', function() {
        if ($('.iframe-container34').css('display') == 'none') {
            $('.iframe-container34').css('display', 'block');
        } else {
            $('.iframe-container34').css('display', 'none');
        }
    });
    $('#submit35').on('click', function() {
        if ($('.iframe-container35').css('display') == 'none') {
            $('.iframe-container35').css('display', 'block');
        } else {
            $('.iframe-container35').css('display', 'none');
        }
    });
    $('#submit36').on('click', function() {
        if ($('.iframe-container36').css('display') == 'none') {
            $('.iframe-container36').css('display', 'block');
        } else {
            $('.iframe-container36').css('display', 'none');
        }
    });
    $('#submit37').on('click', function() {
        if ($('.iframe-container37').css('display') == 'none') {
            $('.iframe-container37').css('display', 'block');
        } else {
            $('.iframe-container37').css('display', 'none');
        }
    });
    $('#submit38').on('click', function() {
        if ($('.iframe-container38').css('display') == 'none') {
            $('.iframe-container38').css('display', 'block');
        } else {
            $('.iframe-container38').css('display', 'none');
        }
    });
    $('#submit39').on('click', function() {
        if ($('.iframe-container39').css('display') == 'none') {
            $('.iframe-container39').css('display', 'block');
        } else {
            $('.iframe-container39').css('display', 'none');
        }
    });
    $('#submit40').on('click', function() {
        if ($('.iframe-container40').css('display') == 'none') {
            $('.iframe-container40').css('display', 'block');
        } else {
            $('.iframe-container40').css('display', 'none');
        }
    });
    $('#submit41').on('click', function() {
        if ($('.iframe-container41').css('display') == 'none') {
            $('.iframe-container41').css('display', 'block');
        } else {
            $('.iframe-container41').css('display', 'none');
        }
    });
    $('#submit42').on('click', function() {
        if ($('.iframe-container42').css('display') == 'none') {
            $('.iframe-container42').css('display', 'block');
        } else {
            $('.iframe-container42').css('display', 'none');
        }
    });
    $('#submit43').on('click', function() {
        if ($('.iframe-container43').css('display') == 'none') {
            $('.iframe-container43').css('display', 'block');
        } else {
            $('.iframe-container43').css('display', 'none');
        }
    });
    $('#submit44').on('click', function() {
        if ($('.iframe-container44').css('display') == 'none') {
            $('.iframe-container44').css('display', 'block');
        } else {
            $('.iframe-container44').css('display', 'none');
        }
    });
    $('#submit45').on('click', function() {
        if ($('.iframe-container45').css('display') == 'none') {
            $('.iframe-container45').css('display', 'block');
        } else {
            $('.iframe-container45').css('display', 'none');
        }
    });
    $('#submit46').on('click', function() {
        if ($('.iframe-container46').css('display') == 'none') {
            $('.iframe-container46').css('display', 'block');
        } else {
            $('.iframe-container46').css('display', 'none');
        }
    });
    $('#submit47').on('click', function() {
        if ($('.iframe-container47').css('display') == 'none') {
            $('.iframe-container47').css('display', 'block');
        } else {
            $('.iframe-container47').css('display', 'none');
        }
    });
    $('#submit48').on('click', function() {
        if ($('.iframe-container48').css('display') == 'none') {
            $('.iframe-container48').css('display', 'block');
        } else {
            $('.iframe-container48').css('display', 'none');
        }
    });
    $('#submit49').on('click', function() {
        if ($('.iframe-container49').css('display') == 'none') {
            $('.iframe-container49').css('display', 'block');
        } else {
            $('.iframe-container49').css('display', 'none');
        }
    });
    $('#submit50').on('click', function() {
        if ($('.iframe-container50').css('display') == 'none') {
            $('.iframe-container50').css('display', 'block');
        } else {
            $('.iframe-container50').css('display', 'none');
        }
    });
    $('#submit51').on('click', function() {
        if ($('.iframe-container51').css('display') == 'none') {
            $('.iframe-container51').css('display', 'block');
        } else {
            $('.iframe-container51').css('display', 'none');
        }
    });
    $('#submit52').on('click', function() {
        if ($('.iframe-container52').css('display') == 'none') {
            $('.iframe-container52').css('display', 'block');
        } else {
            $('.iframe-container52').css('display', 'none');
        }
    });
    $('#submit53').on('click', function() {
        if ($('.iframe-container53').css('display') == 'none') {
            $('.iframe-container53').css('display', 'block');
        } else {
            $('.iframe-container53').css('display', 'none');
        }
    });
    $('#submit54').on('click', function() {
        if ($('.iframe-container54').css('display') == 'none') {
            $('.iframe-container54').css('display', 'block');
        } else {
            $('.iframe-container54').css('display', 'none');
        }
    });
    $('#submit55').on('click', function() {
        if ($('.iframe-container55').css('display') == 'none') {
            $('.iframe-container55').css('display', 'block');
        } else {
            $('.iframe-container55').css('display', 'none');
        }
    });
    $('#submit56').on('click', function() {
        if ($('.iframe-container56').css('display') == 'none') {
            $('.iframe-container56').css('display', 'block');
        } else {
            $('.iframe-container56').css('display', 'none');
        }
    });
    $('#submit57').on('click', function() {
        if ($('.iframe-container57').css('display') == 'none') {
            $('.iframe-container57').css('display', 'block');
        } else {
            $('.iframe-container57').css('display', 'none');
        }
    });
    $('#submit58').on('click', function() {
        if ($('.iframe-container58').css('display') == 'none') {
            $('.iframe-container58').css('display', 'block');
        } else {
            $('.iframe-container58').css('display', 'none');
        }
    });
    $('#submit59').on('click', function() {
        if ($('.iframe-container59').css('display') == 'none') {
            $('.iframe-container59').css('display', 'block');
        } else {
            $('.iframe-container59').css('display', 'none');
        }
    });
    $('#submit60').on('click', function() {
        if ($('.iframe-container60').css('display') == 'none') {
            $('.iframe-container60').css('display', 'block');
        } else {
            $('.iframe-container60').css('display', 'none');
        }
    });
    $('#submit61').on('click', function() {
        if ($('.iframe-container61').css('display') == 'none') {
            $('.iframe-container61').css('display', 'block');
        } else {
            $('.iframe-container61').css('display', 'none');
        }
    });
    $('#submit62').on('click', function() {
        if ($('.iframe-container62').css('display') == 'none') {
            $('.iframe-container62').css('display', 'block');
        } else {
            $('.iframe-container62').css('display', 'none');
        }
    });
    $('#submit63').on('click', function() {
        if ($('.iframe-container63').css('display') == 'none') {
            $('.iframe-container63').css('display', 'block');
        } else {
            $('.iframe-container63').css('display', 'none');
        }
    });
    $('#submit64').on('click', function() {
        if ($('.iframe-container64').css('display') == 'none') {
            $('.iframe-container64').css('display', 'block');
        } else {
            $('.iframe-container64').css('display', 'none');
        }
    });
    $('#submit65').on('click', function() {
        if ($('.iframe-container65').css('display') == 'none') {
            $('.iframe-container65').css('display', 'block');
        } else {
            $('.iframe-container65').css('display', 'none');
        }
    });
    $('#submit66').on('click', function() {
        if ($('.iframe-container66').css('display') == 'none') {
            $('.iframe-container66').css('display', 'block');
        } else {
            $('.iframe-container66').css('display', 'none');
        }
    });
    $('#submit67').on('click', function() {
        if ($('.iframe-container67').css('display') == 'none') {
            $('.iframe-container67').css('display', 'block');
        } else {
            $('.iframe-container67').css('display', 'none');
        }
    });
    $('#submit68').on('click', function() {
        if ($('.iframe-container68').css('display') == 'none') {
            $('.iframe-container68').css('display', 'block');
        } else {
            $('.iframe-container68').css('display', 'none');
        }
    });
    $('#submit69').on('click', function() {
        if ($('.iframe-container69').css('display') == 'none') {
            $('.iframe-container69').css('display', 'block');
        } else {
            $('.iframe-container69').css('display', 'none');
        }
    });
    $('#submit70').on('click', function() {
        if ($('.iframe-container70').css('display') == 'none') {
            $('.iframe-container70').css('display', 'block');
        } else {
            $('.iframe-container70').css('display', 'none');
        }
    });
    $('#submit71').on('click', function() {
        if ($('.iframe-container71').css('display') == 'none') {
            $('.iframe-container71').css('display', 'block');
        } else {
            $('.iframe-container71').css('display', 'none');
        }
    });
    $('#submit72').on('click', function() {
        if ($('.iframe-container72').css('display') == 'none') {
            $('.iframe-container72').css('display', 'block');
        } else {
            $('.iframe-container72').css('display', 'none');
        }
    });
    $('#submit73').on('click', function() {
        if ($('.iframe-container73').css('display') == 'none') {
            $('.iframe-container73').css('display', 'block');
        } else {
            $('.iframe-container73').css('display', 'none');
        }
    });
    $('#submit74').on('click', function() {
        if ($('.iframe-container74').css('display') == 'none') {
            $('.iframe-container74').css('display', 'block');
        } else {
            $('.iframe-container74').css('display', 'none');
        }
    });
    $('#submit75').on('click', function() {
        if ($('.iframe-container75').css('display') == 'none') {
            $('.iframe-container75').css('display', 'block');
        } else {
            $('.iframe-container75').css('display', 'none');
        }
    });
    $('#submit76').on('click', function() {
        if ($('.iframe-container76').css('display') == 'none') {
            $('.iframe-container76').css('display', 'block');
        } else {
            $('.iframe-container76').css('display', 'none');
        }
    });
    // click target
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                window.location.hash = hash;
            });
        }
    });
    $('.search1').click(function() {
        $(".find-in-nw-search-box").addClass("showSearch");
        $(".searchItem").addClass("searchHiden");

    });
    $('#find-in-nw-close').click(function() {
        $(".find-in-nw-search-box.showSearch").removeClass("showSearch");
        $(".searchItem.searchHiden").removeClass("searchHiden");
    });
});
// open button video
const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});
// open modal
const triggers = document.getElementsByClassName('trigger');
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName('modal');
const closeButtons = document.getElementsByClassName('modal__content__close');
for (let [index, trigger] of triggerArray) {
    let triggerIndex = index;

    function toggleModal() {
        modals[triggerIndex].classList.toggle('show-modal');
    }
    trigger.addEventListener("click", toggleModal);
    closeButtons[triggerIndex].addEventListener("click", toggleModal);
}

// more menu
const $menu = $('.more');
$(document).mouseup(e => {
    if (!$menu.is(e.target) &&
        $menu.has(e.target).length === 0) {
        $menu.removeClass('is-active');
    }
});
$('#moremenu1').on('click', () => {
    $menu.toggleClass('is-active');
});
// 2
const $menu2 = $('.more2');
$(document).mouseup(e => {
    if (!$menu2.is(e.target) &&
        $menu2.has(e.target).length === 0) {
        $menu2.removeClass('is-active2');
    }
});
$('#moremenu2').on('click', () => {
    $menu2.toggleClass('is-active2');
});
// 3
const $menu3 = $('.more3');
$(document).mouseup(e => {
    if (!$menu3.is(e.target) &&
        $menu3.has(e.target).length === 0) {
        $menu3.removeClass('is-active3');
    }
});
$('#moremenu3').on('click', () => {
    $menu3.toggleClass('is-active3');
});
// 4
const $menu4 = $('.more4');
$(document).mouseup(e => {
    if (!$menu4.is(e.target) &&
        $menu4.has(e.target).length === 0) {
        $menu4.removeClass('is-active4');
    }
});
$('#moremenu4').on('click', () => {
    $menu4.toggleClass('is-active4');
});
// 5
const $menu5 = $('.more5');
$(document).mouseup(e => {
    if (!$menu5.is(e.target) &&
        $menu5.has(e.target).length === 0) {
        $menu5.removeClass('is-active5');
    }
});
$('#moremenu5').on('click', () => {
    $menu5.toggleClass('is-active5');
});
// 6
const $menu6 = $('.more6');
$(document).mouseup(e => {
    if (!$menu6.is(e.target) &&
        $menu6.has(e.target).length === 0) {
        $menu6.removeClass('is-active6');
    }
});
$('#moremenu6').on('click', () => {
    $menu6.toggleClass('is-active6');
});
// 7
const $menu7 = $('.more7');
$(document).mouseup(e => {
    if (!$menu7.is(e.target) &&
        $menu7.has(e.target).length === 0) {
        $menu7.removeClass('is-active7');
    }
});
$('#moremenu7').on('click', () => {
    $menu7.toggleClass('is-active7');
});
// 8
const $menu8 = $('.more8');
$(document).mouseup(e => {
    if (!$menu8.is(e.target) &&
        $menu8.has(e.target).length === 0) {
        $menu8.removeClass('is-active8');
    }
});
$('#moremenu8').on('click', () => {
    $menu8.toggleClass('is-active8');
});
// 9
const $menu9 = $('.more9');
$(document).mouseup(e => {
    if (!$menu9.is(e.target) &&
        $menu9.has(e.target).length === 0) {
        $menu9.removeClass('is-active9');
    }
});
$('#moremenu9').on('click', () => {
    $menu9.toggleClass('is-active9');
});
// 10
const $menu10 = $('.more10');
$(document).mouseup(e => {
    if (!$menu10.is(e.target) &&
        $menu10.has(e.target).length === 0) {
        $menu10.removeClass('is-active10');
    }
});
$('#moremenu10').on('click', () => {
    $menu10.toggleClass('is-active10');
});
// 11
const $menu11 = $('.more11');
$(document).mouseup(e => {
    if (!$menu11.is(e.target) &&
        $menu11.has(e.target).length === 0) {
        $menu11.removeClass('is-active11');
    }
});
$('#moremenu11').on('click', () => {
    $menu11.toggleClass('is-active11');
});
// 12
const $menu12 = $('.more12');
$(document).mouseup(e => {
    if (!$menu12.is(e.target) &&
        $menu12.has(e.target).length === 0) {
        $menu12.removeClass('is-active12');
    }
});
$('#moremenu12').on('click', () => {
    $menu12.toggleClass('is-active12');
});
// 13
const $menu13 = $('.more13');
$(document).mouseup(e => {
    if (!$menu13.is(e.target) &&
        $menu13.has(e.target).length === 0) {
        $menu13.removeClass('is-active13');
    }
});
$('#moremenu13').on('click', () => {
    $menu13.toggleClass('is-active13');
});
// 14
const $menu14 = $('.more14');
$(document).mouseup(e => {
    if (!$menu14.is(e.target) &&
        $menu14.has(e.target).length === 0) {
        $menu14.removeClass('is-active14');
    }
});
$('#moremenu14').on('click', () => {
    $menu14.toggleClass('is-active14');
});
// 15
const $menu15 = $('.more15');
$(document).mouseup(e => {
    if (!$menu15.is(e.target) &&
        $menu15.has(e.target).length === 0) {
        $menu15.removeClass('is-active15');
    }
});
$('#moremenu15').on('click', () => {
    $menu15.toggleClass('is-active15');
});
// 16
const $menu16 = $('.more16');
$(document).mouseup(e => {
    if (!$menu16.is(e.target) &&
        $menu16.has(e.target).length === 0) {
        $menu16.removeClass('is-active16');
    }
});
$('#moremenu16').on('click', () => {
    $menu16.toggleClass('is-active16');
});
// 17
const $menu17 = $('.more17');
$(document).mouseup(e => {
    if (!$menu17.is(e.target) &&
        $menu17.has(e.target).length === 0) {
        $menu17.removeClass('is-active17');
    }
});
$('#moremenu17').on('click', () => {
    $menu17.toggleClass('is-active17');
});
// 18
const $menu18 = $('.more18');
$(document).mouseup(e => {
    if (!$menu18.is(e.target) &&
        $menu18.has(e.target).length === 0) {
        $menu18.removeClass('is-active18');
    }
});
$('#moremenu18').on('click', () => {
    $menu18.toggleClass('is-active18');
});
// 19
const $menu19 = $('.more19');
$(document).mouseup(e => {
    if (!$menu19.is(e.target) &&
        $menu19.has(e.target).length === 0) {
        $menu19.removeClass('is-active19');
    }
});
$('#moremenu19').on('click', () => {
    $menu19.toggleClass('is-active19');
});
// 20
const $menu20 = $('.more20');
$(document).mouseup(e => {
    if (!$menu20.is(e.target) &&
        $menu20.has(e.target).length === 0) {
        $menu20.removeClass('is-active20');
    }
});
$('#moremenu20').on('click', () => {
    $menu20.toggleClass('is-active20');
});
// 21
const $menu21 = $('.more21');
$(document).mouseup(e => {
    if (!$menu21.is(e.target) &&
        $menu21.has(e.target).length === 0) {
        $menu21.removeClass('is-active21');
    }
});
$('#moremenu21').on('click', () => {
    $menu21.toggleClass('is-active21');
});
// 22
const $menu22 = $('.more22');
$(document).mouseup(e => {
    if (!$menu22.is(e.target) &&
        $menu22.has(e.target).length === 0) {
        $menu22.removeClass('is-active22');
    }
});
$('#moremenu22').on('click', () => {
    $menu22.toggleClass('is-active22');
});
// 23
const $menu23 = $('.more23');
$(document).mouseup(e => {
    if (!$menu23.is(e.target) &&
        $menu23.has(e.target).length === 0) {
        $menu23.removeClass('is-active23');
    }
});
$('#moremenu23').on('click', () => {
    $menu23.toggleClass('is-active23');
});
// 24
const $menu24 = $('.more24');
$(document).mouseup(e => {
    if (!$menu24.is(e.target) &&
        $menu24.has(e.target).length === 0) {
        $menu24.removeClass('is-active24');
    }
});
$('#moremenu24').on('click', () => {
    $menu24.toggleClass('is-active24');
});
// 25
const $menu25 = $('.more25');
$(document).mouseup(e => {
    if (!$menu25.is(e.target) &&
        $menu25.has(e.target).length === 0) {
        $menu25.removeClass('is-active25');
    }
});
$('#moremenu25').on('click', () => {
    $menu25.toggleClass('is-active25');
});
// 26
const $menu26 = $('.more26');
$(document).mouseup(e => {
    if (!$menu26.is(e.target) &&
        $menu26.has(e.target).length === 0) {
        $menu26.removeClass('is-active26');
    }
});
$('#moremenu26').on('click', () => {
    $menu26.toggleClass('is-active26 ');
});
// 27
const $menu27 = $('.more27');
$(document).mouseup(e => {
    if (!$menu27.is(e.target) &&
        $menu27.has(e.target).length === 0) {
        $menu27.removeClass('is-active27');
    }
});
$('#moremenu27').on('click', () => {
    $menu27.toggleClass('is-active27');
});
// 28
const $menu28 = $('.more28');
$(document).mouseup(e => {
    if (!$menu28.is(e.target) &&
        $menu28.has(e.target).length === 0) {
        $menu28.removeClass('is-active28');
    }
});
$('#moremenu28').on('click', () => {
    $menu28.toggleClass('is-active28');
});
// 29
const $menu29 = $('.more29');
$(document).mouseup(e => {
    if (!$menu29.is(e.target) &&
        $menu29.has(e.target).length === 0) {
        $menu29.removeClass('is-active29');
    }
});
$('#moremenu29').on('click', () => {
    $menu29.toggleClass('is-active29');
});
// 30
const $menu30 = $('.more30');
$(document).mouseup(e => {
    if (!$menu30.is(e.target) &&
        $menu30.has(e.target).length === 0) {
        $menu30.removeClass('is-active30');
    }
});
$('#moremenu30').on('click', () => {
    $menu30.toggleClass('is-active30');
});
// 31
const $menu31 = $('.more31');
$(document).mouseup(e => {
    if (!$menu31.is(e.target) &&
        $menu31.has(e.target).length === 0) {
        $menu31.removeClass('is-active31');
    }
});
$('#moremenu31').on('click', () => {
    $menu31.toggleClass('is-active31');
});
// 32
const $menu32 = $('.more32');
$(document).mouseup(e => {
    if (!$menu32.is(e.target) &&
        $menu32.has(e.target).length === 0) {
        $menu32.removeClass('is-active32');
    }
});
$('#moremenu32').on('click', () => {
    $menu32.toggleClass('is-active32');
});
// 33
const $menu33 = $('.more33');
$(document).mouseup(e => {
    if (!$menu33.is(e.target) &&
        $menu33.has(e.target).length === 0) {
        $menu33.removeClass('is-active33');
    }
});
$('#moremenu33').on('click', () => {
    $menu33.toggleClass('is-active33');
});
// 34
const $menu34 = $('.more34');
$(document).mouseup(e => {
    if (!$menu34.is(e.target) &&
        $menu34.has(e.target).length === 0) {
        $menu34.removeClass('is-active34');
    }
});
$('#moremenu34').on('click', () => {
    $menu34.toggleClass('is-active34');
});
// 35
const $menu35 = $('.more35');
$(document).mouseup(e => {
    if (!$menu35.is(e.target) &&
        $menu35.has(e.target).length === 0) {
        $menu35.removeClass('is-active35');
    }
});
$('#moremenu35').on('click', () => {
    $menu35.toggleClass('is-active35');
});
// 36
const $menu36 = $('.more36');
$(document).mouseup(e => {
    if (!$menu36.is(e.target) &&
        $menu36.has(e.target).length === 0) {
        $menu36.removeClass('is-active36');
    }
});
$('#moremenu36').on('click', () => {
    $menu36.toggleClass('is-active36');
});
// 37
const $menu37 = $('.more37');
$(document).mouseup(e => {
    if (!$menu37.is(e.target) &&
        $menu37.has(e.target).length === 0) {
        $menu37.removeClass('is-active37');
    }
});
$('#moremenu37').on('click', () => {
    $menu37.toggleClass('is-active37');
});
// 38
const $menu38 = $('.more38');
$(document).mouseup(e => {
    if (!$menu38.is(e.target) &&
        $menu38.has(e.target).length === 0) {
        $menu38.removeClass('is-active38');
    }
});
$('#moremenu38').on('click', () => {
    $menu38.toggleClass('is-active38');
});
// 39
const $menu39 = $('.more39');
$(document).mouseup(e => {
    if (!$menu39.is(e.target) &&
        $menu39.has(e.target).length === 0) {
        $menu39.removeClass('is-active39');
    }
});
$('#moremenu39').on('click', () => {
    $menu39.toggleClass('is-active39');
});
// 40
const $menu40 = $('.more40');
$(document).mouseup(e => {
    if (!$menu40.is(e.target) &&
        $menu40.has(e.target).length === 0) {
        $menu40.removeClass('is-active40');
    }
});
$('#moremenu40').on('click', () => {
    $menu40.toggleClass('is-active40');
});
// 41
const $menu41 = $('.more41');
$(document).mouseup(e => {
    if (!$menu41.is(e.target) &&
        $menu41.has(e.target).length === 0) {
        $menu41.removeClass('is-active41');
    }
});
$('#moremenu41').on('click', () => {
    $menu41.toggleClass('is-active41');
});

// 42
const $menu42 = $('.more42');
$(document).mouseup(e => {
    if (!$menu42.is(e.target) &&
        $menu42.has(e.target).length === 0) {
        $menu42.removeClass('is-active42');
    }
});
$('#moremenu42').on('click', () => {
    $menu42.toggleClass('is-active42');
});
// 43
const $menu43 = $('.more43');
$(document).mouseup(e => {
    if (!$menu43.is(e.target) &&
        $menu43.has(e.target).length === 0) {
        $menu43.removeClass('is-active43');
    }
});
$('#moremenu43').on('click', () => {
    $menu43.toggleClass('is-active43');
});
// 44
const $menu44 = $('.more44');
$(document).mouseup(e => {
    if (!$menu44.is(e.target) &&
        $menu44.has(e.target).length === 0) {
        $menu44.removeClass('is-active44');
    }
});
$('#moremenu44').on('click', () => {
    $menu44.toggleClass('is-active44');
});
// 45
const $menu45 = $('.more45');
$(document).mouseup(e => {
    if (!$menu45.is(e.target) &&
        $menu45.has(e.target).length === 0) {
        $menu45.removeClass('is-active45');
    }
});
$('#moremenu45').on('click', () => {
    $menu45.toggleClass('is-active45');
});
// 46
const $menu46 = $('.more46');
$(document).mouseup(e => {
    if (!$menu46.is(e.target) &&
        $menu46.has(e.target).length === 0) {
        $menu46.removeClass('is-active46');
    }
});
$('#moremenu46').on('click', () => {
    $menu46.toggleClass('is-active46');
});
// 47
const $menu47 = $('.more47');
$(document).mouseup(e => {
    if (!$menu47.is(e.target) &&
        $menu47.has(e.target).length === 0) {
        $menu47.removeClass('is-active47');
    }
});
$('#moremenu47').on('click', () => {
    $menu47.toggleClass('is-active47');
});
// 48
const $menu48 = $('.more48');
$(document).mouseup(e => {
    if (!$menu48.is(e.target) &&
        $menu48.has(e.target).length === 0) {
        $menu48.removeClass('is-active48');
    }
});
$('#moremenu48').on('click', () => {
    $menu48.toggleClass('is-active48');
});
// 49
const $menu49 = $('.more49');
$(document).mouseup(e => {
    if (!$menu49.is(e.target) &&
        $menu49.has(e.target).length === 0) {
        $menu49.removeClass('is-active49');
    }
});
$('#moremenu49').on('click', () => {
    $menu49.toggleClass('is-active49');
});
// 50
const $menu50 = $('.more50');
$(document).mouseup(e => {
    if (!$menu50.is(e.target) &&
        $menu50.has(e.target).length === 0) {
        $menu50.removeClass('is-active50');
    }
});
$('#moremenu50').on('click', () => {
    $menu50.toggleClass('is-active50');
});
// 51
const $menu51 = $('.more51');
$(document).mouseup(e => {
    if (!$menu51.is(e.target) &&
        $menu51.has(e.target).length === 0) {
        $menu51.removeClass('is-active51');
    }
});
$('#moremenu51').on('click', () => {
    $menu51.toggleClass('is-active51');
});
// 52
const $menu52 = $('.more52');
$(document).mouseup(e => {
    if (!$menu52.is(e.target) &&
        $menu52.has(e.target).length === 0) {
        $menu52.removeClass('is-active52');
    }
});
$('#moremenu52').on('click', () => {
    $menu52.toggleClass('is-active52');
});
// 53
const $menu53 = $('.more53');
$(document).mouseup(e => {
    if (!$menu53.is(e.target) &&
        $menu53.has(e.target).length === 0) {
        $menu53.removeClass('is-active53');
    }
});
$('#moremenu53').on('click', () => {
    $menu53.toggleClass('is-active53');
});
// 54
const $menu54 = $('.more54');
$(document).mouseup(e => {
    if (!$menu54.is(e.target) &&
        $menu54.has(e.target).length === 0) {
        $menu54.removeClass('is-active54');
    }
});
$('#moremenu54').on('click', () => {
    $menu54.toggleClass('is-active54');
});
// 55
const $menu55 = $('.more55');
$(document).mouseup(e => {
    if (!$menu55.is(e.target) &&
        $menu55.has(e.target).length === 0) {
        $menu55.removeClass('is-active55');
    }
});
$('#moremenu55').on('click', () => {
    $menu55.toggleClass('is-active55');
});
// 56
const $menu56 = $('.more56');
$(document).mouseup(e => {
    if (!$menu56.is(e.target) &&
        $menu56.has(e.target).length === 0) {
        $menu56.removeClass('is-active56');
    }
});
$('#moremenu56').on('click', () => {
    $menu56.toggleClass('is-active56');
});
// 57
const $menu57 = $('.more57');
$(document).mouseup(e => {
    if (!$menu57.is(e.target) &&
        $menu57.has(e.target).length === 0) {
        $menu57.removeClass('is-active57');
    }
});
$('#moremenu57').on('click', () => {
    $menu57.toggleClass('is-active57');
});
// 58
const $menu58 = $('.more58');
$(document).mouseup(e => {
    if (!$menu58.is(e.target) &&
        $menu58.has(e.target).length === 0) {
        $menu58.removeClass('is-active58');
    }
});
$('#moremenu58').on('click', () => {
    $menu58.toggleClass('is-active58');
});
// 59
const $menu59 = $('.more59');
$(document).mouseup(e => {
    if (!$menu59.is(e.target) &&
        $menu59.has(e.target).length === 0) {
        $menu59.removeClass('is-active59');
    }
});
$('#moremenu59').on('click', () => {
    $menu59.toggleClass('is-active59');
});
// 60
const $menu60 = $('.more60');
$(document).mouseup(e => {
    if (!$menu60.is(e.target) &&
        $menu60.has(e.target).length === 0) {
        $menu60.removeClass('is-active60');
    }
});
$('#moremenu60').on('click', () => {
    $menu60.toggleClass('is-active60');
});
// 61
const $menu61 = $('.more61');
$(document).mouseup(e => {
    if (!$menu61.is(e.target) &&
        $menu61.has(e.target).length === 0) {
        $menu61.removeClass('is-active61');
    }
});
$('#moremenu61').on('click', () => {
    $menu61.toggleClass('is-active61');
});
// 62
const $menu62 = $('.more62');
$(document).mouseup(e => {
    if (!$menu62.is(e.target) &&
        $menu62.has(e.target).length === 0) {
        $menu62.removeClass('is-active62');
    }
});
$('#moremenu62').on('click', () => {
    $menu62.toggleClass('is-active62');
});
// 63
const $menu63 = $('.more63');
$(document).mouseup(e => {
    if (!$menu63.is(e.target) &&
        $menu63.has(e.target).length === 0) {
        $menu63.removeClass('is-active63');
    }
});
$('#moremenu63').on('click', () => {
    $menu63.toggleClass('is-active63');
});
// 64
const $menu64 = $('.more64');
$(document).mouseup(e => {
    if (!$menu64.is(e.target) &&
        $menu64.has(e.target).length === 0) {
        $menu64.removeClass('is-active64');
    }
});
$('#moremenu64').on('click', () => {
    $menu64.toggleClass('is-active64');
});
// 65
const $menu65 = $('.more65');
$(document).mouseup(e => {
    if (!$menu65.is(e.target) &&
        $menu65.has(e.target).length === 0) {
        $menu65.removeClass('is-active65');
    }
});
$('#moremenu65').on('click', () => {
    $menu65.toggleClass('is-active65');
});
// 66
const $menu66 = $('.more66');
$(document).mouseup(e => {
    if (!$menu66.is(e.target) &&
        $menu66.has(e.target).length === 0) {
        $menu66.removeClass('is-active66');
    }
});
$('#moremenu66').on('click', () => {
    $menu66.toggleClass('is-active66');
});
// 67
const $menu67 = $('.more67');
$(document).mouseup(e => {
    if (!$menu67.is(e.target) &&
        $menu67.has(e.target).length === 0) {
        $menu67.removeClass('is-active67');
    }
});
$('#moremenu67').on('click', () => {
    $menu67.toggleClass('is-active67');
});
// 68
const $menu68 = $('.more68');
$(document).mouseup(e => {
    if (!$menu68.is(e.target) &&
        $menu68.has(e.target).length === 0) {
        $menu68.removeClass('is-active68');
    }
});
$('#moremenu68').on('click', () => {
    $menu68.toggleClass('is-active68');
});
// 69
const $menu69 = $('.more69');
$(document).mouseup(e => {
    if (!$menu69.is(e.target) &&
        $menu69.has(e.target).length === 0) {
        $menu69.removeClass('is-active69');
    }
});
$('#moremenu69').on('click', () => {
    $menu69.toggleClass('is-active69');
});
const $menu70 = $('.more70');
$(document).mouseup(e => {
    if (!$menu70.is(e.target) &&
        $menu70.has(e.target).length === 0) {
        $menu70.removeClass('is-active70');
    }
});
$('#moremenu70').on('click', () => {
    $menu70.toggleClass('is-active70');
});
const $menu71 = $('.more71');
$(document).mouseup(e => {
    if (!$menu71.is(e.target) &&
        $menu71.has(e.target).length === 0) {
        $menu71.removeClass('is-active71');
    }
});
$('#moremenu71').on('click', () => {
    $menu71.toggleClass('is-active71');
});
const $menu72 = $('.more72');
$(document).mouseup(e => {
    if (!$menu72.is(e.target) &&
        $menu72.has(e.target).length === 0) {
        $menu72.removeClass('is-active72');
    }
});
$('#moremenu72').on('click', () => {
    $menu72.toggleClass('is-active72');
});
const $menu73 = $('.more73');
$(document).mouseup(e => {
    if (!$menu73.is(e.target) &&
        $menu73.has(e.target).length === 0) {
        $menu73.removeClass('is-active73');
    }
});
$('#moremenu73').on('click', () => {
    $menu73.toggleClass('is-active73');
});
const $menu74 = $('.more74');
$(document).mouseup(e => {
    if (!$menu74.is(e.target) &&
        $menu74.has(e.target).length === 0) {
        $menu74.removeClass('is-active74');
    }
});
$('#moremenu74').on('click', () => {
    $menu74.toggleClass('is-active74');
});
const $menu75 = $('.more75');
$(document).mouseup(e => {
    if (!$menu75.is(e.target) &&
        $menu75.has(e.target).length === 0) {
        $menu75.removeClass('is-active75');
    }
});
$('#moremenu75').on('click', () => {
    $menu75.toggleClass('is-active75');
});

const $menu76 = $('.more76');
$(document).mouseup(e => {
    if (!$menu76.is(e.target) &&
        $menu76.has(e.target).length === 0) {
        $menu76.removeClass('is-active76');
    }
});
$('#moremenu76').on('click', () => {
    $menu76.toggleClass('is-active76');
});


// live menu
const $menu01 = $('.live1');

$(document).mouseup(e => {
    if (!$menu01.is(e.target) &&
        $menu01.has(e.target).length === 0) {
        $menu01.removeClass('is-active1');
    }
});

$('#livemenu1').on('click', () => {
    $menu01.toggleClass('is-active1');
});
// 2
const $menu02 = $('.live2');

$(document).mouseup(e => {
    if (!$menu02.is(e.target) &&
        $menu02.has(e.target).length === 0) {
        $menu02.removeClass('is-active2');
    }
});
$('#livemenu2').on('click', () => {
    $menu02.toggleClass('is-active2');
});
// 3
const $menu03 = $('.live3');
$(document).mouseup(e => {
    if (!$menu03.is(e.target) &&
        $menu03.has(e.target).length === 0) {
        $menu03.removeClass('is-active3');
    }
});
$('#livemenu3').on('click', () => {
    $menu03.toggleClass('is-active3');
});
// 4
const $menu04 = $('.live4');
$(document).mouseup(e => {
    if (!$menu04.is(e.target) &&
        $menu04.has(e.target).length === 0) {
        $menu04.removeClass('is-active4');
    }
});
$('#livemenu4').on('click', () => {
    $menu04.toggleClass('is-active4');
});
// 5
const $menu05 = $('.live5');

$(document).mouseup(e => {
    if (!$menu05.is(e.target) &&
        $menu05.has(e.target).length === 0) {
        $menu05.removeClass('is-active5');
    }
});
$('#livemenu5').on('click', () => {
    $menu05.toggleClass('is-active5');
});
// 6
const $menu06 = $('.live6');
$(document).mouseup(e => {
    if (!$menu06.is(e.target) &&
        $menu06.has(e.target).length === 0) {
        $menu06.removeClass('is-active6');
    }
});
$('#livemenu6').on('click', () => {
    $menu06.toggleClass('is-active6');
});
// 7
const $menu07 = $('.live7');
$(document).mouseup(e => {
    if (!$menu07.is(e.target) &&
        $menu07.has(e.target).length === 0) {
        $menu07.removeClass('is-active7');
    }
});
$('#livemenu7').on('click', () => {
    $menu07.toggleClass('is-active7');
});
// 8
const $menu08 = $('.live8');
$(document).mouseup(e => {
    if (!$menu08.is(e.target) &&
        $menu08.has(e.target).length === 0) {
        $menu08.removeClass('is-active8');
    }
});
$('#livemenu8').on('click', () => {
    $menu08.toggleClass('is-active8');
});
// 9
const $menu09 = $('.live9');
$(document).mouseup(e => {
    if (!$menu09.is(e.target) &&
        $menu09.has(e.target).length === 0) {
        $menu09.removeClass('is-active9');
    }
});
$('#livemenu9').on('click', () => {
    $menu09.toggleClass('is-active9');
});
// 10
const $menu010 = $('.live10');
$(document).mouseup(e => {
    if (!$menu010.is(e.target) &&
        $menu010.has(e.target).length === 0) {
        $menu010.removeClass('is-active10');
    }
});
$('#livemenu10').on('click', () => {
    $menu010.toggleClass('is-active10');
});

// 11
const $menu011 = $('.live11');
$(document).mouseup(e => {
    if (!$menu011.is(e.target) &&
        $menu011.has(e.target).length === 0) {
        $menu011.removeClass('is-active11');
    }
});
$('#livemenu11').on('click', () => {
    $menu011.toggleClass('is-active11');
});
const $menu070 = $('.live70');
$(document).mouseup(e => {
    if (!$menu070.is(e.target) &&
        $menu070.has(e.target).length === 0) {
        $menu070.removeClass('is-active70');
    }
});
$('#livemenu70').on('click', () => {
    $menu070.toggleClass('is-active70');
});
const $menu071 = $('.live71');
$(document).mouseup(e => {
    if (!$menu071.is(e.target) &&
        $menu071.has(e.target).length === 0) {
        $menu071.removeClass('is-active71');
    }
});
$('#livemenu71').on('click', () => {
    $menu071.toggleClass('is-active71');
});
const $menu072 = $('.live72');
$(document).mouseup(e => {
    if (!$menu072.is(e.target) &&
        $menu072.has(e.target).length === 0) {
        $menu072.removeClass('is-active72');
    }
});
$('#livemenu72').on('click', () => {
    $menu072.toggleClass('is-active72');
});
const $menu073 = $('.live73');
$(document).mouseup(e => {
    if (!$menu073.is(e.target) &&
        $menu073.has(e.target).length === 0) {
        $menu073.removeClass('is-active73');
    }
});
$('#livemenu73').on('click', () => {
    $menu073.toggleClass('is-active73');
});
const $menu074 = $('.live74');
$(document).mouseup(e => {
    if (!$menu074.is(e.target) &&
        $menu074.has(e.target).length === 0) {
        $menu074.removeClass('is-active74');
    }
});
$('#livemenu74').on('click', () => {
    $menu074.toggleClass('is-active74');
});
const $menu075 = $('.live75');
$(document).mouseup(e => {
    if (!$menu075.is(e.target) &&
        $menu075.has(e.target).length === 0) {
        $menu075.removeClass('is-active75');
    }
});
$('#livemenu75').on('click', () => {
    $menu075.toggleClass('is-active75');
});
const $menu076 = $('.live76');
$(document).mouseup(e => {
    if (!$menu076.is(e.target) &&
        $menu076.has(e.target).length === 0) {
        $menu076.removeClass('is-active76');
    }
});
$('#livemenu76').on('click', () => {
    $menu076.toggleClass('is-active76');
});

// menu mobile
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
// 
let burger = document.getElementById('burger'),
    nav = document.getElementById('main-nav'),
    slowmo = document.getElementById('slowmo');
burger.addEventListener('click', function(e) {
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});
// call data inventory
tribun.displayObject("1", iklan1);
tribun.displayObject("2", iklan2);
tribun.displayObject("3", iklan3);
tribun.displayObject("4", iklan4);
tribun.displayObject("5", iklan5);
tribun.displayObject("6", iklan6);
tribun.displayObject("7", iklan7);
tribun.displayObject("8", iklan8);
tribun.displayObject("9", iklan9);
tribun.displayObject("10", iklan10);
tribun.displayObject("11", iklan11);
tribun.displayObject("12", iklan12);
tribun.displayObject("13", iklan13);
tribun.displayObject("14", iklan14);
tribun.displayObject("15", iklan15);
tribun.displayObject("16", iklan16);
tribun.displayObject("17", iklan17);
tribun.displayObject("18", iklan18);
tribun.displayObject("19", iklan19);
tribun.displayObject("20", iklan20);
tribun.displayObject("21", iklan21);
tribun.displayObject("22", iklan22);
tribun.displayObject("23", iklan23);
tribun.displayObject("24", iklan24);
tribun.displayObject("25", iklan25);
tribun.displayObject("26", iklan26);
tribun.displayObject("27", iklan27);
tribun.displayObject("28", iklan28);
tribun.displayObject("29", iklan29);
tribun.displayObject("30", iklan30);
tribun.displayObject("31", iklan31);
tribun.displayObject("32", iklan32);
tribun.displayObject("33", iklan33);
tribun.displayObject("34", iklan34);
tribun.displayObject("35", iklan35);
tribun.displayObject("36", iklan36);
tribun.displayObject("37", iklan37);
tribun.displayObject("38", iklan38);
tribun.displayObject("39", iklan39);
tribun.displayObject("40", iklan40);
tribun.displayObject("41", iklan41);
tribun.displayObject("42", iklan42);
tribun.displayObject("43", iklan43);
tribun.displayObject("44", iklan44);
tribun.displayObject("45", iklan45);
tribun.displayObject("46", iklan46);
tribun.displayObject("47", iklan47);
tribun.displayObject("48", iklan48);
tribun.displayObject("49", iklan49);
tribun.displayObject("50", iklan50);
tribun.displayObject("51", iklan51);
tribun.displayObject("52", iklan52);
tribun.displayObject("53", iklan53);
tribun.displayObject("54", iklan54);
tribun.displayObject("55", iklan55);
tribun.displayObject("56", iklan56);
tribun.displayObject("57", iklan57);
tribun.displayObject("58", iklan58);
tribun.displayObject("61", iklan61);
tribun.displayObject("63", iklan63);
tribun.displayObject("64", iklan64);
tribun.displayObject("65", iklan65);
tribun.displayObject("66", iklan66);
tribun.displayObject("67", iklan67);
tribun.displayObject("68", iklan68);
tribun.displayObject("69", iklan69);
tribun.displayObject("70", iklan70);
tribun.displayObject("71", iklan71);
tribun.displayObject("72", iklan72);
tribun.displayObject("73", iklan73);
tribun.displayObject("74", iklan74);
tribun.displayObject("75", iklan75);
tribun.displayObject("76", iklan76);



// Mobile Version
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

}