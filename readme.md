<h1 align="center">Welcome to ctc-overlay-viewer 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.2.4-blue.svg?cacheSeconds=2592000" />
  <a href="https://ujw0l.github.io/ctc-overlay-viewer">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/ujw0l/ctc-overlay/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/ujw0l/ctc-overlay/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> jQuery plugin for image gallery overlay and modal content loading

## Install

```sh
npm i ctc-overlay-viewer
```

## Script Tag

```sh
Download Files
1. ctc_overlay.jquery.js,
2. ctc_overlay_style.css

Include files
1. Include jQuery :- https://code.jquery.com/jquery-3.4.0.min.js,
2. IncludeCTC Overlay(file) :- ctc_overlay.jquery.js,
3. Include CTC Overlay stylesheet(file) :- ctc_overlay_style.css

```

## Plugin Options

```sh
Overlay image viewer

	$('selector1,selector2').ctcOverlay();

Note: Apply ctcOverlay to as many gallery as you like (includes all images inside element)


Overlay content viewer

	$.ctcOverlayEl(parameter1, parameter2);

Content Viewer options

A.Parameter 1 options

       format: javascript object

1.elemHeight:- 'container height'( content div height in px do not use % or auto - optional )
2.elemWidth:-'container width'( content div width in px, do not use % or auto - optional )
3.ajaxUrl:- 'AJAX url'( url to make AJAX call - required for AJAX request )
4.ajaxData:= 'AJAXdata' ( data to send to server - jQuery AJAX request format)
5.ajaxMethod:- 'request method' ( method you wish to use use for AJAX request default GET )
6.elemSelector:-'jQuery element selector'( jQuery element selector if getting content of element not making AJAX request )
7.modalMessage:- 'some message' ( string you wish to load on modal window with OK button )
8.iframeUrl:- 'url of iframe' ( url you wish to iframe inside modal window )
9.hideCloseBtn:- 'no' ( if set "NO" user will not have option to close overlay, "YES" if left empty )


B.Parameter 2 options

   format: javascript object - optional(to do more with AJAX)

*Works eactly like function $.ajax() :- See http://api.jquery.com/jquery.ajax/

Note: leave parameter1 as empty var or object unless setting dimesnion Content loading priority

a.{parameter2} ( gets first priority over first width content loading parameter 1 can be use for setting dimesnion and hideCloseBtn )
b.{parameter1} ( content fetched from ajaxUrl )
c.{parameter1} ( content set for modalMessage )
d.{parameter1} ( ontent from iframeUrl )
e.{parameter1} ( content of element set for elemSelector )

Note:precending must not be there for suceeding to work
```

## Contributing

Contributions, issues and feature requests are welcome. Feel free to check [issues page](https://github.com/ujw0l/ctc-overlay/issues) if you want to contribute.

## Author

👤 **ujw0l**

* Twitter 👉 [@bastakotiujwol](https://twitter.com/bastakotiujwol)
* Github 👉 [@ujw0l](https://github.com/ujw0l)

## Show your support

Please ⭐️ this repository if you like it.

## License

Copyright © 2019 [ujw0l](https://github.com/ujw0l).

📜 This project is [MIT](https://github.com/ujw0l/ctc-overlay/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_