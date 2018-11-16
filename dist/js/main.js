'use strict';

eval(function (p, a, c, k, _e, r) {
    _e = function e(c) {
        return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    };if (!''.replace(/^/, String)) {
        while (c--) {
            r[_e(c)] = k[c] || _e(c);
        }k = [function (e) {
            return r[e];
        }];_e = function _e() {
            return '\\w+';
        };c = 1;
    };while (c--) {
        if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
    }return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
    document.head.appendChild(msViewportStyle);
}

$(function () {
    var nua = navigator.userAgent;
    var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%');
    }
});
// Main
$(document).ready(function () {});

function getContent(e) {
    // let t = $('href').text()
    // $('h2').text(t)
    // console.log(u, y)
    // var a = $(e).attr('data-bg');
    // var b = $(e).attr('data-bo')
    // $('h5').css({
    //     'background': b,
    //     'color': a,
    //     'border': '1rem solid' + a

    // })
    // console.log(a, b)


}

function devTool() {
    var butdev = '<div class="togglegird"> <button class="btn btn-primary" type="button">ON/OFF</button> </div>';
    var girddev = '<div class="luoi"> <div class="container"> <div class="row"> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> </div> </div> </div>';
    var cssdev = '.togglegird { position: fixed; right: 1rem; bottom: 1rem; z-index: 9000; }.luoi { position: fixed; top: 0; left: 0; height: 100vh; display: none; width: 100%; z-index: 8000; } .luoi.active { display: flex; } .luoi .row { height: 100vh; } .luoi .row .item { height: 100vh; flex-basis: 0; flex-grow: 1; max-width: 100%; background: none; padding-top: 0; padding-right: 15px; padding-bottom: 0; padding-left: 15px; } .luoi .row .item .bg { background: #a2a2a5; height: 100vh; opacity: .5; }@media (max-width: 1199.98px) { .item:nth-child(9) { display: none; } .item:nth-child(10) { display: none; } .item:nth-child(11) { display: none; } .item:nth-child(12) { display: none; } } @media (max-width: 767.98px) { .item:nth-child(5) { display: none; } .item:nth-child(6) { display: none; } .item:nth-child(7) { display: none; } .item:nth-child(8) { display: none; } }';
    // var butfluid = '<div class="togglefluid"> <button class="btn btn-primary" type="button">fluid</button> </div>'

    $('head').append('<style type="text/css">' + cssdev + '</style>');
    $('body').append(butdev).append(girddev);

    $('.togglegird button').on('click', function () {
        var a = $('.luoi .container').hasClass('container');
        if (a) {
            $(".luoi .container").removeClass('container').addClass('container-fluid');
        } else {
            $(".luoi .container-fluid").removeClass('container-fluid').addClass('container');
            $('.luoi').toggleClass('active');
        }
    });
    // $('.datalist li a').on('click', function() {
    //     $('.item').css({
    //         "background": a,
    //         "border": "1px solid " + b
    //     })
    // })
    // $('.item').hide();
    // $('.item').each(function() {
    //         var a = $(this).attr('data')
    //         if (a == b) {
    //             $(this).show()
    //         }

    //     })
    // (a == b) ? $(this).show : $(this).hide()
}
// $('.list li a').on('click', function() {
//     $(this).parents('ul').find('li').removeClass('active')
//     $(this).parents('li').addClass('active')
//     $(this).parents('.tab').find('.data .item').hide()
//     var m = $(this).attr('data')
//     $('#' + m).show()
// })
devTool();

$('.boxinput input').on('focus blur', function () {
    $(this).parents('.boxinput').toggleClass('active');
});
//# sourceMappingURL=main.js.map
