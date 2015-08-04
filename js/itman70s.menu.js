
var itman70s_menu = '<li><a href="http://itman70s.github.io/" data-placement="left" title="To ItMan70s.github.io">ITMan70s</a></li>\n' + 
            '<li><a href="https://github.com/ItMan70s/tangrammy" data-placement="left" title="To Tangrammy page">Tangrammy</a></li>\n' + 
            '<li><a href="http://itman70s.github.io/richtext" data-placement="left" title="To github.io/richtext">Rich Text</a></li>\n' + 
            '<li><a href="http://itman70s.github.io/about.html" data-placement="left" title="To know itman70s?">About</a></li>\n' + 
            '<li class="print"><a href="javascript:;" data-placement="left" title="Print current page">Print</a></li>\n';
		
$(document).ready(function(){
try {
	var head = $(".itman70s_menu");
	head.attr("title", "All about ItMan70s.github.io");
	head.find("img").attr("src", "/img/logo_w.png");
	
	$(".itman70s_sub_menu").html(itman70s_menu);
	$('[data-placement]').tooltip();
	
	$(".itman70s_sub_menu").parents(".pull-right").append('<a href="https://github.com/ItMan70s"><img style="position: absolute; right: 0; border: 0;" src="/img/forkme.png" title="Fork me on GitHub"></a>');
		
	$('.print').on('click', function(){	
		$('.print').hide();
		html2canvas(document.body, {
			onrendered: function(canvas) {
				
				$("#page").hide();
				document.body.appendChild(canvas);
				window.print();
				$('canvas').remove();
				$("#page").show();
				$('.print').show();
			}
		});
		
	});
} catch(e) {}
});
