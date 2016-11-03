$(function(){
	$(".h_lx_r").hover(function(){//二维码
		$(".h_ewm").show();
	},function(){
		$(".h_ewm").hide();
	})
	$('.nav li').not( $(".on")).hover(function(){//导航
		$('span',this).stop().css('height','2px');
		$('span',this).animate({
			left:'0',
			width:'100%',
			right:'0'
		},200);
	},function(){
		$('span',this).stop().animate({
			left:'50%',
			width:'0'
		},200);
	});
	jQuery(".banner").slide({titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop",  autoPlay:true, autoPage:true,delayTime:400});//banner
	jQuery(".p_ban").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true});
	$(".zz_zs li:last-child").css("margin",0)
	
	$('.h_indul li').each(function(){//轮播传值
		var index=$(this).index();
		var src=$(this).find('img').attr('src');
	   $('.h_inducon').eq(index).find('.h_indupic').find('img').attr({'src':src});
	})
	$('.h_inducon').eq(0).show();
//	var src0=$('.h_indul li').eq(0).find('img').attr('src');
//	$('.h_inducon').eq(0).find('.h_indupic').find('img').attr({'src':src0})
	var number=0;
	var liL=$('.h_indul li').length;
	var liW=$('.h_indul li').outerWidth(true);
	var ulW=liL*liW;
	$('.h_indul').width(ulW);
	$('.h_indul li').click(function(){
		var index=$(this).index();
		$(this).addClass('on').siblings('li').removeClass('on');
		$('.h_inducon').eq(index).show().siblings('.h_inducon').hide();
	});
	//右键
	$('.h_inds .h_indsnext').click(function(event){
	    number=number+1;
	    if(number>liL-5){
	    	number=0
	    };
	    $('.h_inducon').eq(number).show().siblings('.h_inducon').hide();
	    $('.h_indul li').eq(number).addClass('on').siblings('li').removeClass('on');
	    var liY=-number*liW;
	    $('.h_indspic .h_indul').animate({'left':liY},300);
	});
	//左键
	$('.h_inds .h_indsprev ').click(function(event){
		number=number-1;
		if(number<0){
			number=liL-5
		};
	 $('.h_inducon').eq(number).show().siblings('.h_inducon').hide();
	    $('.h_indul li').eq(number).addClass('on').siblings('li').removeClass('on');
		var liY=-number*liW;
		$('.h_indspic .h_indul').animate({'left':liY},300);	
	});
	jQuery(".coop_ma").slide({titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop",  autoPlay:true, autoPage:true,delayTime:400});
	$(".coop_ma li .c_m_i:nth-child(4n)").css("margin-right",0);
	jQuery(".new_l").slide({trigger:"click"});
	$(".i_rig li").hover(function(){//侧边栏
		$(this).find(".dd").stop().animate({right:61},500)
	},function(){
		$(this).find(".dd").stop().animate({right:-164},500)
	})
	scro()
	$(window).scroll(function(){
		scro()
	})
	$(".huid").click(function(){
		$("html,body").animate({"scrollTop":0},500)
	})
	$(".new_lis li").hover(function(){
		$(this).addClass("on")
	},function(){
		$(this).removeClass("on")
	})
	$(".n_ryzz li:nth-child(odd)").css("padding-right",4);
	$(".n_ryzz li:nth-child(even)").css("padding-left",4);
	$(".n_tdjs li:nth-child(3n)").css("padding-right",0);	
	
	var zn=0; //招商
		$(".zs_pr").click(function(){
			zn++;
			var l=$(".jiu_lb li").length;
			if(zn>=l-1){
				$(".jiu_lb ul").css("top",-(l-2)*235)
				zn=l-2;
			}
			$(".jiu_lb ul").animate({top:-zn*235},500)
		})
		$(".zs_nx").click(function(){
			zn--;
			var l=$(".jiu_lb li").length;
			if(zn<0){
				$(".jiu_lb ul").css("top",0)
				zn=0;
			}
			$(".jiu_lb ul").animate({top:-zn*235},500)
		})
		
		var xmv1 = $('.xingm');//验证
	    var re1 = /^[\u4e00-\u9fa5 ]{2,20}$/;
	    var xmv2 =  $(".dianhs");
	    var re2 = /^1[3-9]\d{9}$/;
	  function allyz (inputobject,methods){
	        if(inputobject.val() !="" || inputobject.val() != null)
	        {
	            if(methods.test(inputobject.val()))
	            {
	                inputobject.parent('.inp').find(".dui").show();
	                inputobject.parent('.inp').find(".cuo").hide();
	                return 1;
	            }else{
	                inputobject.parent('.inp').find(".cuo").show();
	                inputobject.parent('.inp').find(".dui").hide();
	                return 0;
	            }
	        }
	    }
	
	    $(function(){
	        $(".but").click(function(){
	            if(allyz(xmv1,re1) == 0){
                }if(allyz(xmv2,re2) == 0){
                }else if((allyz(xmv1,re1) == 1)&&(allyz(xmv2,re2) == 1)&&(allyz(xmv3,re3) == 1)&&($("#message").val() !== '')){



	            }return false;
	        });
	        $(".rest").click(function(){
	            $(".inp .dui").hide();
	            $(".inp .cuo").hide()
	        });
	    });	
		var ulL = $('.fazhan4 ul').length;
		ulLz = 0;
		$('.fazhan4 ul').first().show();
		$('.fazhan4 em').click(function(event) {
			ulLz--;
			if (ulLz<0) {ulLz=ulL-1};
			$('.fazhan4 ul').hide();
			$('.fazhan4 ul').eq(ulLz).show();
			$('.fazhan4 ul').eq(ulLz).find('li').addClass('animated fadeInUp');
		});
		$('.fazhan4 b').click(function(event) {
			ulLz++;
			if (ulLz>=ulL) {ulLz=0};
			$('.fazhan4 ul').hide();
			$('.fazhan4 ul').eq(ulLz).show();
			$('.fazhan4 ul').eq(ulLz).find('li').addClass('animated fadeInUp');
		});

		$(".jiaz").click(function(){//详情页字号
			var ztx=parseInt($(".new_zw p").css("font-size"));
			if(ztx>12){
				ztx-=2;
				$(".new_zw p").css("font-size",ztx);
			}
			$(".new_zw p").css("font-size",ztx);
		})
		$(".fuz").click(function(){
			var ztd=parseInt($(".new_zw p").css("font-size"));
			if(ztd<26){
				ztd+=2;
				$(".new_zw p").css("font-size",ztd);
			}
			
		})
		
})
function scro(){
	if($(window).scrollTop()>400){
		$(".huid").fadeIn(500)
	}else{
		$(".huid").fadeOut(500)
	}
}