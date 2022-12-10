/*
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

function RedoMainC() {

	(function ($) {

		// Menu.
		var $menu = $('#menu'),
			$menu_openers = $menu.children('ul').find('.opener');

		// Openers.
		$menu_openers.each(function () {

			var $this = $(this);

			$this.on('click', function (event) {

				// Prevent default.
				event.preventDefault();

				// Toggle.
				$menu_openers.not($this).removeClass('active');
				$this.toggleClass('active');

				// Trigger resize (sidebar lock).
				$window.triggerHandler('resize.sidebar-lock');

			});

		});

	})(jQuery);
}