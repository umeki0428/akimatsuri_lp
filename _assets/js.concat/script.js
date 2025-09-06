// ================================================================================
// script.js
// 案件用のスクリプトファイル
// ================================================================================



$(function(){

	$.ajaxSetup({
		beforeSend: function(xhr) {
		  xhr.setRequestHeader('User-Agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1');
		}
	});

	$(function() {
		const fixedBtn = $('.fixed-btn');
		const bottom = $('.bottom');

		$(window).on('scroll', function() {
			const bottomPosition = bottom.offset().top;
			const windowHeight = $(window).height();
			const scrollTop = $(window).scrollTop();

			if (bottomPosition <= scrollTop + windowHeight) {
				fixedBtn.addClass("is-hide");
			} else {
				fixedBtn.removeClass("is-hide");
			}
		});
	});


});
