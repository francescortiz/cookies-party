# cookies-party
Cookies message implementation based on the one in Spanish Ministerio de Justicia (www.mjusticia.gob.es)

## Usage

1. Download
2. Load jQuery
3. Load jquery.cookies-party.min.js
4. Provide some HTML to the variable $.cookiesParty.message. It will be prepended to the body.
5. Add a listener to the window event named "cookies_accepted". Make this listener load google analytics and all the stuff you want.

## Options

- **$.cookiesParty.message**: (default '') HTML to be appended to the container.
- **$.cookiesParty.container**: (default 'body') jQuery selector or object ot use as container. It will be wrapped with jQuery.
- **$.cookiesParty.cookieName**: (default 'analytics') HTML to be appended to the container.
- **$.cookiesParty.events**: (default "scroll click") Events that trigger cookie acceptance.

Check test.html for a working example.

