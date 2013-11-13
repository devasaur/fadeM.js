fadeM.js +
========

A simple jQuery plugin that fades in any elements using a single class.

While it was originally created to fade in elements, we've added some other transition and scroll affects: GlideM PopM and StickM.

fadeM.js has been tested and works in current versions of Chrome & Firefox, and IE 10. NOTE: In IE 9, transition speed isn't working. This is a known issue. You can still specify start opacity however. 

This script is currently UNDER DEVELOPMENT to improve and add more features.

Newest Features
===============

11/13/2013 

-The glideM feature now can be controlled to glide from left/right or alternate between the two.

- Added a new transition class: zooM. This effect allows you to set a default zoom and have the element transition to its
original size when reaching the transition point. Try setting the Zoom starting point to 0.5 (50%) and it will enlarge to 100% size on scroll.

11/11/2013 - Added more control over the stickM feature. You can now specify how long you want an element to stick (for example,
you can have a logo stick to the top of the page for 800 pixels, after which it will continue scrolling with the page).
Also, you can control how far from the top of the page the element sticks (Default is zero).

These new features have been tested in the latest versions of IE, FF, and Chrome and work smoothly. 


How To Use
========

1. Reference jQuery and the fadeM.min.js file in your HTML document.

2. Add the class "fadeM" to any element you want to fade in. 
   Add the class "glideM" to any element you want to glide in. (Slides from left).
   Add the class "popM" to any element for an effect similar to turning on an old TV screen.
   Add the class "stickM" to any element you want to stick in place when it reaches the top (Use wisely!).
   Add the class "zooM" to any element that you want to zoom to its default size when scrolled into view. 

3. Use the following code to launch faderM from your page. You can change the values in quotes to change:
   -FadeStrength: Starting opacity for fadeM ( 0 - 9 )
   -TransitPoint: Exact number of pixels from top of page you want transitions to occur.
   -TransitSpeed: 100-999; The speed at which the transition happens in milliseconds.
   -ShortStick: Can be set "on" or "off". When turned on, this feature lets you have the element stick for a 
                set distance in pixels instead of permantently sticking to the top.
   -StickTime: The Duration in pixels for the stickM element to stay at the top. After the user has scrolled past this 
               point, the element would continue to scroll out of view.
   -StickDistance: This setting is for how many pixels from the top of the page you want the element to stay in place.
                   It is defaulted to 0, but in cases where you want the element to stick before or after the top is reached, 
                   you can set a positive or negative value.
   -ZoomStartSize: Set this to a decimal value where 0.0 is the smallest and 1.0 is default zoom.
   -GlideDirection: You can set glideM direction with this variable. Accepted values are "left" (glide in from right to left),
                    "right" (glide in from left to right), and "alt" (alternate between left and right direction on all glideM elements).

<pre>
$(document).ready(function(){
var TransitPoint = "500";
var TransitSpeed = "2";
var FadeStrength = "3";
var ShortStick = "off";
var StickTime = "500";
var StickDistance = "0";
var ZoomStartSize = "0.7";
var GlideDirection = "alt";
startFadeM(FadeStrength,TransitPoint,TransitSpeed,ShortStick,StickTime,StickDistance,ZoomStartSize,GlideDirection);
});
</pre>

Notes: 

- it is recommended to place the fadeM script at the top of the document in order for everything to load smoothly.


Known Issues
========

1. Internet Explorer 9 (and earlier) browser fade speed cannot be configured. It fades at a 100ms speed.
2. The popM effect is buggy in Firefox when applied to elements such as videos or slideshows.


