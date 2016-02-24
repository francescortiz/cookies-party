if (!jQuery.cookiesParty) {
    jQuery.cookiesParty = {
        message: '',
        container: 'body',
        cookieName: 'analytics'
    };

    jQuery(function () {

        var settings = jQuery.cookiesParty;

        function createCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        }

        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        //function eraseCookie(name) {
        //    createCookie(name, "", -1);
        //}

        var analytics = readCookie(settings.cookieName);

        function acceptCookies() {
            createCookie(settings.cookieName, 'true', 728);
            jQuery(window).trigger("cookies_accepted").off("scroll click", acceptCookies);
        }

        if (analytics == "true") {
            jQuery(window).trigger("cookies_accepted");
        } else {
            jQuery(settings.container).prepend(settings.message);
            jQuery(window).on("scroll click", acceptCookies);
        }
    });
}
