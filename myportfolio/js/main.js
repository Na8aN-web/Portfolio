/**
 * ===================================================================
 * main js
 * -------------------------------------------------------------------
 */
(function ($) {

	"use strict";

	/* Scale the hero heading to the viewport */
	setTimeout(function () {
		$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });
	}, 100);

	/* Portfolio grid */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded(function () {
		containerProjects.masonry({
			itemSelector: '.folio-item',
			resize: true
		});
	});

	/* Navigation menu */
	var toggleButton = $('.menu-toggle'),
		nav = $('.main-navigation');

	toggleButton.on('click', function (e) {
		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
	});

	nav.find('li a').on('click', function () {
		toggleButton.toggleClass('is-clicked');
		nav.fadeOut();
	});

	/* Highlight the current section in the navigation */
	var navigationLinks = $('#main-nav-wrap li a');

	$('section').waypoint({
		handler: function (direction) {
			var activeSection = $('section#' + this.element.id);

			if (direction === 'up') activeSection = activeSection.prev();

			var activeLink = $('#main-nav-wrap a[href="#' + activeSection.attr('id') + '"]');

			navigationLinks.parent().removeClass('current');
			activeLink.parent().addClass('current');
		},
		offset: '25%'
	});

	/* Smooth scrolling */
	$('.smoothscroll').on('click', function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			scrollTop: $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});
	});

	/* Back to top button */
	var pxShow = 300,
		fadeTime = 400,
		goTop = $('#go-top');

	$(window).on('scroll', function () {
		if ($(window).scrollTop() >= pxShow) {
			goTop.fadeIn(fadeTime);
		} else {
			goTop.fadeOut(fadeTime);
		}
	});

})(jQuery);
