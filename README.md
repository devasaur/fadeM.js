fadeM.js
========

A simple jQuery plugin that fades in any elements using a single class.


To initiate:

1. Reference jQuery and the fadeM.min.js file in your HTML document.
2. Add the class "fadeMe" to any element you want to fade in.
3. Use the following code to launch faderM from your page. You can change the values in quotes to change:
   -FadeStrength: Starting opacity ( 0 - 9 )
   -FadePoint: Exact number of pixels from top of page you want each element to fade in.


<script>
$(document).ready(function(){
var FadeStrength = "3";
var FadePoint = "500";
startFadeM(FadeStrength,FadePoint);
});
</script>
