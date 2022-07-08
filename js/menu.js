$(document).ready(function () {
    $('header>i').click(function () {
        $('section.menu').css({
            "left": "0"
        })
        setTimeout(function () {
            $('section.menu').css({
                "backgroundColor": "rgba(0,0,0,0.16)"
            })
        }, 300)
        $('section.menu').append("<div class='backMenu'></div>")
        $('div.backMenu').click(function () {
            $('section.menu').css({
                "backgroundColor": "transparent"
            })
            setTimeout(function () {
                $('section.menu').css({
                    "left": "-100%"
                })
            }, 300)
            $('section.menu>div.backMenu').remove()
        })
    })
    $('section.menu>nav>i').click(function () {
        $('section.menu').css({
            "backgroundColor": "transparent"
        })
        setTimeout(function () {
            $('section.menu').css({
                "left": "-100%"
            })
        }, 300)
    })
})



