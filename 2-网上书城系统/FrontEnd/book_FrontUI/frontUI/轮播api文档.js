$(document).ready(function(){

$('.box').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:1000,
    autoplay: true, //是否自动播放
    pauseOnHover: false,  //鼠标悬停暂停自动播放
    speed: 1500,  //切换动画速度
    // autoplaySpeed: 2000,  //自动播放速度
    slidesToShow: 1,  //要显示的动画速度
    swipeToSlide: true,  //允许用户直接拖动或滑动到幻灯片上
    touchThreshold: 100,  //更换幻灯片需滑动宽度（1 / touchThreshold）
    centerMode: true,  //启动居中
    centerPadding: '0', //处于中心模式时的侧面填充（像素或％）
　　　　　arrows:true, //是否开启左右切换

　　　　　draggable: true, //是否启用鼠标拖动
　　　　　vertical: false, //是否开启垂直滑动模式
　　　　　verticalSwiping: false,  //是否开启垂直滑动切换

})
});