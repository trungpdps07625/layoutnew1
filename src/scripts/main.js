// Main
$(document).ready(function() {

});

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
    var butdev = '<div class="togglegird"> <button class="btn btn-primary" type="button">ON/OFF</button> </div>'
    var girddev = '<div class="luoi"> <div class="container"> <div class="row"> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> </div> </div> </div>'
    var cssdev = '.togglegird { position: fixed; right: 1rem; bottom: 1rem; z-index: 9000; }.luoi { position: fixed; top: 0; left: 0; height: 100vh; display: none; width: 100%; z-index: 8000; } .luoi.active { display: flex; } .luoi .row { height: 100vh; } .luoi .row .item { height: 100vh; flex-basis: 0; flex-grow: 1; max-width: 100%; background: none; padding-top: 0; padding-right: 15px; padding-bottom: 0; padding-left: 15px; } .luoi .row .item .bg { background: #a2a2a5; height: 100vh; opacity: .5; }@media (max-width: 1199.98px) { .item:nth-child(9) { display: none; } .item:nth-child(10) { display: none; } .item:nth-child(11) { display: none; } .item:nth-child(12) { display: none; } } @media (max-width: 767.98px) { .item:nth-child(5) { display: none; } .item:nth-child(6) { display: none; } .item:nth-child(7) { display: none; } .item:nth-child(8) { display: none; } }'
        // var butfluid = '<div class="togglefluid"> <button class="btn btn-primary" type="button">fluid</button> </div>'

    $('head').append('<style type="text/css">' + cssdev + '</style>')
    $('body').append(butdev).append(girddev)


    $('.togglegird button').on('click', function() {
            var a = $('.luoi .container').hasClass('container')
            if (a) {
                $(".luoi .container").removeClass('container').addClass('container-fluid')
            } else {
                $(".luoi .container-fluid").removeClass('container-fluid').addClass('container')
                $('.luoi').toggleClass('active')
            }
        })
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
devTool()

$('.boxinput input').on('focus', function() {
    $(this).parents('.boxinput').addClass('active')
})
$('.boxinput input').on('blur', function() {
        $(this).val() ? $(this).parents('.boxinput').addClass('active') : $(this).parents('.boxinput').removeClass('active')
    })
    // $('.btn').on('click', function() {
    //     $(this).parents('.menutoggle').toggleClass('active')
    // })
function button() {
    $('.bt .next').on('click', function() {
        var dem = $('.nav .active').length
        dem += 1
        $('.nav li:nth-child(' + dem + ')').addClass('active')
    })
    $('.bt .back').on('click', function() {
        var dem = $('.nav .active').length
        dem += 0
        if (dem == 1) {
            $('.nav li:nth-child(' + dem + ')').addClass('active')
        } else {
            $('.nav li:nth-child(' + dem + ')').removeClass('active')
        }
    })
}
button()