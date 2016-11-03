$(function(){
	mui.init();
	mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	mui('.mui-content').on('tap','a',function(){document.location.href=this.href;});
	mui('.tiaoz').on('tap','a',function(){document.location.href=this.href;});
	mui('footer').on('tap','a',function(){document.location.href=this.href;});
	$(".hz_img li:nth-child(3n)").css("margin-right",0);
	var h=$(window).height();
	$("#mapPage").height(h);
})
function loop(str){
				var slider=mui('.'+str)[0];
				var group=slider.querySelector('.'+str+' .mui-slider-group');
				var items=mui('.mui-slider-item',group);
				//克隆第一个节点
				var first=items[0].cloneNode(true);
				first.classList.add('mui-slider-item-duplicate');
				//克隆最后一个节点
				var last=items[items.length-1].cloneNode(true);
				last.classList.add('mui-slider-item-duplicate');
				var sliderApi=mui(slider).slider({interval:3000});
				group.classList.add('mui-slider-loop');
				group.insertBefore(last, group.firstChild);
				group.appendChild(first);
				sliderApi.refresh();
				sliderApi.gotoItem(0);
			}