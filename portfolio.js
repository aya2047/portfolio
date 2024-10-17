$(window).scroll(function(){
    var scroll=$(window).scrollTop();
    $('#header-img').css({
        transform: 'scale('+(100+scroll/10)/100+')',
        top: -(scroll/50)+"%",
    });
});

// リンク　アニメーション
$('.navi').click(function () {
	var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top;	
	$('body,html').animate({scrollTop: pos}, 500); 
	return false;
});

// blur アニメーション
function blurAnime(){

    $('.blurTrigger').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('blur');
        }else{
            $(this).removeClass('blur');
        }
    });
}

$(window).scroll(function(){
    blurAnime();
});
$(window).on('load',function(){
    blurAnime();
});

// works スライダー
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

var access=$.cookie('access')
if(!access){
    flag=true;
    $.cookie('access',false);
}else{
    flag=false
}
$(".modal-open").modaal({
    overlay_close:true,
    before_open:function(){
        $('html').css('overflow-y','hidden');
    },
    after_close:function(){
        $('html').css('overflow-y','scroll');
    }
});

// ハンバーガーアイコン
$(".openbtn").click(function(){
    $(this).toggleClass('active');
    $("nav").slideToggle(400);
    $(this).removeClass('button_line001')
});

