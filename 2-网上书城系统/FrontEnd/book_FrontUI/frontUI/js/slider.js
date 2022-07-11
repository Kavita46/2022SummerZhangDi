 $(document).ready(function(){
  $('.slick').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay:true,
    autoplaySpeed:1000,
    // vertical:false,//垂直方向
    // dots: true,//指示点

    onAfterChange:function(o){
        console.log(o)
    },//切换后的回调函数

})
  });

//   rows 	number 	1 	将此值设置为1以上将初始化网格模式。使用slidesPerRow设置每行应该有多少张幻灯片。
// slide 	element 	‘’ 	要用作幻灯片的元素查询
// slidesPerRow 	number 	1 	通过rows选项初始化网格模式，可以设置每个网格行中有多少幻灯片
// slidesToShow 	number 	1 	每次显示几个
// slidesToScroll 	number 	1 	每次滚动几个
  

