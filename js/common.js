$(document).ready(function(){

	var _trigger = $("#guideTrigger, #tipTrigger"),
		_guide = $(".guide"),
		_mask = $(".mask"),
		_timer = 0;

		function _back() {
			_timer = setTimeout(function() {
			_mask.stop().animate({opacity:0}, function(){$(".mask").hide()});
			_guide.stop().animate({marginLeft:"-120px",opacity:0}, "400", "swing",function(){
				_guide.hide();
			});
			}, 100);
		}
	
	_guide.css({"left":"50%", "opacity":0});
	_trigger.css({"backgroundColor":"white", "opacity":"0"});
	_trigger.mouseover(function(){
		clearTimeout(_timer);
		_mask.show().stop().animate({"opacity":0.2});
		_guide.css("display","block").stop().animate({marginLeft:"+168px", opacity:1}, 900, "swing", function() {
			_guide.animate({marginLeft:"+153px"}, 300);
		});
	}).mouseout(_back);

	_guide.mouseover(function(){
		clearTimeout(_timer);
	}).mouseout(_back);

});