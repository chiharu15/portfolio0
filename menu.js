$(function() {
   $('a[href^="#"]').click(function(){
		var speed = 300;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - 60;
		$("html, body").animate({
      scrollTop:position
    }, speed, "swing");
		return false;
	});

  var menu = $('#gnav'),
  offset = menu.offset();
  $(window).scroll(function () {
    if($(window).scrollTop() > offset.top) {
      menu.addClass('fixed');
    } 
    else {
      menu.removeClass('fixed');
    }
  });

  var scrollMenu = function() {
		// 配列宣言
		// ここにスクロールで点灯させる箇所のidを記述する
		// 数値は全て0でOK
		var array = {
			'#works': 0,
			'#about': 0,
			'#skill': 0
		};

		var $globalNavi = new Array();

		// 各要素のスクロール値を保存
		for (var key in array) {
			if ($(key).offset()) {
				array[key] = $(key).offset().top - 10; // 数値丁度だとずれるので10px余裕を作る
				$globalNavi[key] = $('a[href="' + key + '"]');
			}
		}

		// スクロールイベントで判定
		$(window).scroll(function () {
			for (var key in array) {
				if ($(window).scrollTop() > array[key] - 50) {
					$('#header ul li a').each(function() {
						$(this).removeClass('active');
					});
					$globalNavi[key].addClass('active');
				}
			}
		});
	}

	// 実行
	scrollMenu();

	let mouseMoved = false;
	const button = document.querySelector('.infoButton');

	const mouseMoveHandler = event => {
    clearInterval(loop);
    document.onmousemove = null;
    button.classList.remove('infoButton_isActive');
};

const toggleHandler = event => {    
    const classes = button.classList;
    if (classes.contains('infoButton_isActive')) {
        classes.remove('infoButton_isActive');
    } else {
        classes.add('infoButton_isActive');
    }
}

document.onmousemove = mouseMoveHandler;

const loop = setInterval(toggleHandler, 1000);



$('.btn3').click(function() {
    $('.trans3').toggleClass('active');
  });

});

