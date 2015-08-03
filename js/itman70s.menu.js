
var itman70s_menu = '<li><a href="http://itman70s.github.io/about.html" data-placement="left" title="To ItMan70s.github.io">ITMan70s</a></li>\n' + 
            '<li><a href="https://github.com/ItMan70s/tangrammy" data-placement="left" title="To Tangrammy page">Tangrammy</a></li>\n' + 
            '<li><a href="http://itman70s.github.io/richtext" data-placement="left" title="To github.io/richtext">Rich Text</a></li>\n' + 
            '<li><a href="http://itman70s.github.io/about.html" data-placement="left" title="To know itman70s?">About</a></li>\n';

$(document).ready(function(){
try {
	var head = $(".itman70s_menu");
	head.attr("title", "All about ItMan70s.github.io");
	head.find("img").attr("src", "/img/logo_w.png");
	
	$(".itman70s_sub_menu").html(itman70s_menu);
	$('[data-placement]').tooltip();
} catch(e) {}
});
