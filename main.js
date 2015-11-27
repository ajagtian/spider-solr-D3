var palette;
App = {
	init : function() {
		App.setPalette();
		App.navClickEvent();
		App.expandCollapsClickEvent();
		App.navItemClickEvent();
	},
	setPalette : function() {
		palette = {
			"lightgray": "#819090",
      		"gray": "#708284",
      		"mediumgray": "#536870",
      		"darkgray": "#475B62",

      		"darkblue": "#0A2933",
      		"darkerblue": "#042029",

      		"paleryellow": "#FCF4DC",
      		"paleyellow": "#EAE3CB",
      		"yellow": "#A57706",
      		"orange": "#BD3613",
      		"red": "#D11C24",
      		"pink": "#C61C6F",
      		"purple": "#595AB7",
      		"blue": "#2176C7",
      		"green": "#259286",
      		"yellowgreen": "#738A05"
		};
	},
	navClickEvent : function() {
		$(".nav-list-h-item").click(function() {
			$(".nav-list-h-item")
				.removeClass("nav-item-highlight");
			$(this).addClass("nav-item-highlight");
		});
	},
	expandCollapsClickEvent : function() {
		$("#middleSection div div.header h2 span").on('click', function() {
			if ($(this).hasClass("glyphicon-minus")) {
				$(this).parent().parent().next().slideUp();
				$(this).removeClass("glyphicon-minus")
					.addClass("glyphicon-plus");

			} else {
				$(this).removeClass("glyphicon-plus")
					.addClass("glyphicon-minus");
				$(this).parent().parent().next().slideDown();
			}
		});
	},
	navItemClickEvent : function() {
		$("#nav-item-2").click(function() {
			$('html, body').animate({
        		scrollTop: $("#data-viz").offset().top
    		}, 1000);
		});

		$("#nav-item-3").click(function() {
			$('html, body').animate({
        		scrollTop: $("#").offset().top
    		}, 1000);
		});
	}
}