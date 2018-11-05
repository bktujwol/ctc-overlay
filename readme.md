# CTC Overlay Viewer

jQuery plugin to add overlay image viewer to your image gallery and content viewer to you you want to load on modal window. 
jQuery plugin version of overlay functionalities built-in in CT Commerec WordPress Plugin  

# USAGE
Plugin  lets you display all of the images inside the element , you can apply it to one or multiple galleries
<dl>
<dt>Including CTC Overlay jQuery plugin<dt> 
<dt>Below are some of the most common ways to include ctc-overlay-jquery</dd> 

## 1.Script tag


######<dt> Download files </dt>

<dd>1. ctc_overlay.jquery.js,</dd>
<dd>2. ctc_overlay_style.css</dd>

  
<dd>Include files</dd>

 <dd>1. Include jQuery :- https://code.jquery.com/jquery-3.3.1.min.js,</dd>
 <dd>2. IncludeCTC Overlay(file) :- ctc_overlay.jquery.js,</dd>
 <dd>3. Include CTC Overlay stylesheet(file) :-  ctc_overlay_style.css</dd>

</dl>
<dl>

## 2.Node
<dd>To include CTC overlay in Node, first install with npm</dd>

#### <dd> npm install ctc-overlay-jquery</dd>


</dl>
<dl>


### Plugin Options :
#### <dt> Overlay image viewer </dt>
		$('selector1,selector2').ctcOverlay();
	
  <dd>Note: Apply ctcOverlay to as many gallery as you like (includes all images inside element)</dd>


#### <dt>Overlay content viewer </dt> 
 		$.ctcOverlayEl(parameter1, parameter2);

###  Content Viewer options

#### <dt>A.Parameter 1 options</dt>
           format: javascript object
 <dt>1.elemHeight: 'container height':-</dt> 
	<dd>content div height in px do not use % or auto - optional </dd>
 <dt>2.elemWidth:'container width':-</dt>
	<dd> content div width in px, do not use % or auto - optional</dd>
 <dt>3.ajaxUrl: 'AJAX url':-</dt>
	<dd> url to make AJAX call - required for AJAX request</dd>
 <dt>4.ajaxData: 'ajax data' :-</dt>
	<dd>data to send to server' - jQuery AJAX request format </dd>
 <dt>5.ajaxMethod:'request method':-</dt>
<dd> method you wish to use use for AJAX request default GET</dd>
 <dt>6.elemSelector:'jQuery element selector':-</dt>
	<dd> jQuery element selector if getting content of element not making AJAX request</dd>
 <dt>7.modalMessage:'some message':-</dt>
<dd> string you wish to load on modal window with OK button</dd>
 <dt>8.iframeUrl:'url of iframe' :-</dt>
<dd> url you wish to iframe inside modal window</dd>
<dt>9.hideCloseBtn:'no' :-</dt>
<dd> if set 'NO' user won't have option to close overlay, 'YES' if left empty </dd>

#### <dt>B.Parameter 2 options<dt>
	   format: javascript object - optional(to do more with AJAX)
  <dd> *Works eactly like function $.ajax()  :- See http://api.jquery.com/jquery.ajax/<dd>
   <dd> Note: leave parameter1 as empty var or object unless setting dimesnion </dd>

###### <dt>Content loading  priority</dt>
 <dt>a.{parameter2}</dt>
   <dd>gets first priority over first width content loading parameter 1 can be use for setting dimesnion and hideCloseBtn</dd>
 <dt>b.{parameter1}</dt>
<dd> content fetched from ajaxUrl </dd>
<dt>c.{parameter1}</dt>
<dd>  content set for modalMessage </dd>
<dt>d.{parameter1}</dt>
<dd>  content from  iframeUrl </dd>
<dt>e.{parameter1}</dt>
<dd>content of element set for  elemSelector </dd>

<dt>Note:precending must not be there for suceeding to work </dt>
</dl>

# License 
<dd>MIT</dd>

