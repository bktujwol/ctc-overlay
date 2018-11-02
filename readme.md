# CTC Overlay jQuery



jQuery plugin to add overlay image viewer to your image gallery and content viewer to you you want to load on modal window. 
jQuery plugin version of overlay functionalities built-in in CT Commerec WordPress Plugin  

# USAGE
Plugin  lets you display all of the images inside the element , you can apply it to one or multiple galleries
<dl>
<dt> Including CTC Overlay jQuery


 </dt> 
<dd>Below are some of the most common ways to include ctc-overlay-jquery<dd> 

#<dt>1.Script tag</dt>


<dt> Download files </dt>
<dd>1.ctc_overlay.jquery.js,</dd>
<dd>2.ctc_overlay_style.css</dd>

  
<dt>Include files</dt>
 <dd>1. include jQuery :- https://code.jquery.com/jquery-3.3.1.min.js,</dd>
 <dd>2.includeCTC Overlay(file) :- ctc_overlay.jquery.js,</dd>
 <dd>3. include CTC Overlay stylesheet(file) :-  ctc_overlay_style.css</dd>



######<dd>Apply ctcOverlay to as many gallery as you like (includes all images inside element)</dd>
<dt>Overlay image viewer</dt>
 <dd> $('.image_gallery,.image_gallery_2,.image_gallery_3').ctcOverlay();</dd>
	
  
 <dt>Overlay content viewer use $.ctcOverlayEl({parameter1}{parameter2})</dt>
 <dt>A.Parameter 1</dt>
 <dd>*elemHeight: 'in px' do not use % or auto - optional </dd>
 <dd>*elemWidth:'in px' do not use % or auto - optional</dd>
 <dd>*ajaxUrl:'url to get response from' - required for AJAX request</dd>
 <dd>*ajaxData:'data to send to server' - uses format applicable for jQuery AJAX reuest</dd>
 <dd>*ajaxMethod:'' method you wish to use use for AJAX request default GET</dd>
 <dd>*elemSelector:'' jQuery element selector if getting content of element not makeing AJAX request</dd>
 <dd>*modalMessage:'' string you wish to load on modal window with OK button</dd>
 <dd>*iframeUrl:'' url you wish to iframe inside modal window</dd>
<dd>*hideCloseBtn:'no' if set 'NO' user won't have option to close overlay, 'YES' if left empty </dd>

 <dt>B.Parameter 2 - optional (use only if you want to do more with AJAX)</dt>
  <dd>*Works eactly like $.ajax() function http://api.jquery.com/jquery.ajax/ (can leave first aparament empty with {} ) </dd>

######<dd>Content loading  priority</dd>
<dd>a.{parameter2} gets first priority over first width content loading parameter 1 can be use for setting dimesnion and hideCloseBtn</dd>
<dd>b.{parameter1} content fetched from ajaxUrl </dd>
<dd>c.{parameter1} content set for modalMessage </dd>
<dd>d.{parameter1} content from  iframeUrl </dd>
<dd>e.{parameter1} content of element set for  elemSelector </dd>
<dd>Note:precending must not be there for suceeding to work </dd>
</dl>
<dl>

#<dt>2.Node</dt>
<dd>To include CTC overlay in Node, first install with npm</dd>

#### <dd> npm install ctc-overlay-jquery</dd>

<dt>And you know the rest...</dt>

# License 
<dd>MIT</dd>

</dl>

