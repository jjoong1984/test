(function($){

    // 왼쪽에 메뉴를 클릭하면 해당 섹션으로 가로스크롤로 이동하게 하시오.

    // $('#menu li').eq(0).addClass('on')
    // $('html, body').stop().animate({ 
    //     scrollLeft: 0
    // }, 800)

    // $('#menu li a').on('click', function(){ 
    //     $(this).parent().addClass('on')
    //     $(this).parent().siblings().removeClass('on')
    //     var index = $(this).parent().index()
    //     $('html, body').stop().animate({ 
    //         scrollLeft: index*$(window).width()
    //     }, 800)
    //     return false
    // })
    $('#menu li').eq(0).addClass('on')
    $('html, body').stop().animate({
        scrollLeft:0
    }, 800)

    $('#menu li a').on('click',function(){ 
        $(this).parent().addClass('on')
        $(this).parent().siblings().removeClass('on')
        var index = $(this).parent().index()
        var ww = $(window).width()
        $('html, body').stop().animate({
            scrollLeft: index*ww
        }, 800)
    })


    // 마우스휠 이벤트 발생시 휠의 방향이 위쪽이면 이전섹션으로 이동하게 하고,
    // 휠의 방향이 아래쪽이면 다음섹션으로 이동하게 구현하시오.

    var secIndex;
    $('#wrap section').on('mousewheel',function(e,wh){ 
        if (wh > 0) { 
            secIndex = $(this).prev().index()
            if (secIndex < 0) { 
                secIndex = 0
            }
        } else if ( wh<0 ) { 
            secIndex = $(this).next().index()
            if (secIndex < 0) { 
                secIndex = 3
            }   
        }
        $('html, body').stop().animate({ 
            scrollLeft: secIndex*$(window).width()
        }, 800)
        $('#menu li').eq(secIndex).addClass('on')
        $('#menu li').eq(secIndex).siblings().removeClass('on')
    })

    //마우스 움직임에따라 이미지위치가 변경된다.
    $('section').on('mousemove',function(e){ 
        var posX = e.pageX
        var posY = e.pageY
        $("section:nth-child(1) img:nth-of-type(1)").css({
            right:20-(posX/30), bottom:20-(posY/30)     })
        $("section:nth-child(1) img:nth-of-type(2)").css({
            right:130-(posX/20), bottom:-40-(posY/20)   })
        $("section:nth-child(1) img:nth-of-type(3)").css({
            right:60+(posX/20), top:180+(posY/20)       })
    
        $("section:nth-child(2) img:nth-of-type(1)").css({ 
            right:-180-(posX/30), bottom:-480-(posY/30) })
        $("section:nth-child(2) img:nth-of-type(2)").css({ 
            right:130+(posX/50), bottom:-40+(posY/50) })
    
        $("section:nth-child(3) img:nth-of-type(1)").css({
            right:280-(posX/30), bottom:30-(posY/30) })
        $("section:nth-child(3) img:nth-of-type(2)").css({
            right:110+(posX/20), bottom:-270+(posY/20) })
        $("section:nth-child(3) img:nth-of-type(3)").css({
            right:-70+(posX/20), bottom:-130+(posY/20) })	        
        

    })








})(jQuery)