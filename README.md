fadeM.js +
========

A simple jQuery plugin that fades in any elements using a single class.

While it was originally created to fade in elements, we've added some other transition and scroll affects A La Mode: GlideM and StickM.

fadeM.js has been tested and works in current versions of Chrome & Firefox, and IE. NOTE: In IE, transition speed isn't working. This is a known issue. You can still specify start opacity however. 

This script is currently under development to improve and add more features.


To initiate:

1. Reference jQuery and the fadeM.min.js file in your HTML document.

2. Add the class "fadeM" to any element you want to fade in. 
   Add the class "glideM" to any element you want to glide in. (Slides from left).
   Add the class "stickM" to any element you want to stick in place when it reaches the top (Use wisely!)

3. Use the following code to launch faderM from your page. You can change the values in quotes to change:
   -FadeStrength: Starting opacity ( 0 - 9 )
   -TransitPoint: Exact number of pixels from top of page you want transitions to occur.
   -TransitSpeed: 1-99; The speed at which the transition happens. (1=0.1s / 99 = 0.99s)

<pre>
$(document).ready(function(){
var FadeStrength = "5";
var TransitPoint = "500";
var TransitSpeed = "3";
startFadeM(FadeStrength,TransitPoint,TransitSpeed);
});
</pre>
