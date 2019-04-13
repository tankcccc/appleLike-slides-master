var menuItems = $('#menu>ul>.menuItem')
for(let i = 0; i<menuItems.length; i++){
    $(menuItems[i]).on('click',(x)=>{
        let index = $(x.currentTarget).index('#menu>ul>.menuItem')
        slide(index)
        activemenuItem(menuItems.eq(index))

    })
    $(menuItems[i]).on('mouseenter',(x)=>{
        let index = $(x.currentTarget).index('#menu>ul>.menuItem')
        enterMenuItem(menuItems.eq(index))
    })
    $(menuItems[i]).on('mouseleave',(x)=>{
        let index = $(x.currentTarget).index('#menu>ul>.menuItem')
        menuItems.eq(index).removeClass('enter')
    })
    
}


/****************************************/

function activemenuItem($menuItem){
    $menuItem.addClass('active')
        .siblings('.active').removeClass('active')
}
function enterMenuItem($menuItem){
    if(! $menuItem.is('.active')) {//判断是否在active（点击）状态
        $menuItem.addClass('enter')
            .siblings('.enter').removeClass('enter')
    }
}
function slide(i){
    let p = i * (-920)
    $('#images').css({
        transform: `translateX(${p}px)`
    })
}





