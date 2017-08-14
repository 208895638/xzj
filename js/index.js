$(function(){
	var index={		
		init:function(){
			this.bindEvent();
		},
		bindEvent:function(){
			var that=this;
			$(".infoPage li").on("click",function(){
				var i=$(this).index();
				$(this).addClass("on").siblings().removeClass("on");
//				$(".content .conPer").addClass("hide");
				$(".content .conPer").eq(i).fadeIn().siblings().fadeOut();
			})
		},
		render:function(){
			var that=this;
			
		}
		
		
	};
	index.init();
})