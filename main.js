var lala = 0;

var tooltip = d3.select('body').append('div')
		.style('position', 'absolute')
		.style('padding', '0 10')
		.style('background', '#E7E0CB')
		.style('opacity', '0');

App = {
	init : function() {
		App.lala();
		App.setPalette();
		App.navClickEvent();
		App.expandCollapsClickEvent();
		App.navItemClickEvent();
		App.querySelector();
		App.tooltip();
		App.dropdownAction();
	},
	lala : function () {
		$(".lala").click(function() {
			lala += 1;
			if (lala == 10) {
				$(this).attr('data-src', $(this).attr('src'));
				$(this).attr("src", "http://cdn.meme.am/instances/61836288.jpg")
					.css("width", "140px")
					.css("border-radius", "0px");
			} else if (lala == 11) {
				$(this).attr('src', $(this).attr('data-src'))
					.css("width", "65px")
					.css("border-radius", "50px");
				lala = 0;
			}
			var ele = $(this).parent().next();
			ele.html(lala);
			setTimeout(function() {
				ele.html("Rahul Agarwal");
			}, 200);
		});
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
			if($(this).attr("id") != "nav-item-6") {
				$(this).addClass("nav-item-highlight");
			}
		});
		$(".nav-list-h-item.dropdown-item").click(function() {
			if ($(this).find(".dropdown-list").hasClass("hidden")) {
				$(this).find(".dropdown-list").removeClass("hidden");
				$(this).children().first().find("span")
					.removeClass("glyphicon-plus")
					.addClass("glyphicon-minus");
			} else {
				$(this).find(".dropdown-list").addClass("hidden");
				$(this).children().first().find("span")
					.removeClass("glyphicon-minus")
					.addClass("glyphicon-plus");

			}
		});

		$("#expand-collapse-all").click(function() {
			if ($(this).find(".glyphicon")
					.hasClass("glyphicon-minus")) {
				$(this).find(".glyphicon-minus")
					.removeClass("glyphicon-minus")
					.addClass("glyphicon-plus");
				$("#middleSection div div:nth-child(2)").slideUp();
				$("#middleSection div div.header h2 span")
					.removeClass("glyphicon-minus")
					.addClass("glyphicon-plus");
			} else {
				$(this).find(".glyphicon-plus")
					.removeClass("glyphicon-plus")
					.addClass("glyphicon-minus");
				$("#middleSection div div:nth-child(2)").slideDown();
				$("#middleSection div div.header h2 span")
					.removeClass("glyphicon-plus")
					.addClass("glyphicon-minus");
			}
			
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
		$("#nav-item-1").click(function() {
			window.location.href = "./index.html";
		});
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

		$("#go-to-top").click(function() {
			$('html, body').animate({
        		scrollTop: $("#universe").offset().top
    		}, 1000);
		});
	},
	querySelector : function() {
		$(".query-n").click(function() {
			window.open($(this).attr("id")+".html");
		});
	},
	tooltip : function () {
		$("body").on("click", ".tool-tip", function(){
			$(this).removeClass("active-tooltip")
				.css("display", "none");
		})
	},
	dropdownAction : function () {
		$("#query-5-1-country-selector input").focus(function() {
			$(this).val("");
		})

		$("#query-5-1-country-selector input").blur(function() {
			$(this).val("");
		})
	}

}