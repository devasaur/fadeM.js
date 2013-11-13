/**
 *
 * Version: 0.0.1
 * Author: Shawn Pavlas
 * Contact: shawnzabar@gmail.com
 * Website: http://www.devasaur.com/
 *
 MIT license
 *
 * Copyright (c) 2013 Shawn Pavlas
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 **/

//checks to see if CSS transitions are supported in the browser
function cssTransitions() {
    var style = document.documentElement.style;

    if (
        style.webkitTransition !== undefined ||
        style.MozTransition !== undefined ||
        style.OTransition !== undefined ||
        style.MsTransition !== undefined ||
        style.transition !== undefined
    ) {
        return false // Support CSS3 transititon
    }
    else {
        return true
    }
}


//fixes the flicker effect caused by the css elements being changed on document ready
document.write('<style type="text/css">body{display:none}</style>');
jQuery(function ($) {
    $('body').css('display', 'block');
});



function startFadeM(fmx, fmy, fmz, tempstick, stime, sdist, zoomss, glideDr) {

    //check if the values are numbers


    if (isNaN(fmx) || isNaN(fmy) || isNaN(fmz)) {
        alert('The FadeM settings require numbers. Looks like you typed ' + fmx + ' and ' + fmy + ' and ' + fmz + '. Oops!');
    }




    //convert the values to a number string
    var x = parseInt(fmx);
    var y = parseInt(fmy);
    var z = parseInt(fmz);
	var sticktime = parseInt(stime);
	var stickdistance = parseInt(sdist);
    var iex = "0." + x;


    //hide overflow caused by css transform settings.
    $("body").css("overflow-x", "hidden");


    //Set defaults on all elements using fadeM
    var fadeSet = $(".fadeM").toArray();
    for (var i = 0; i < fadeSet.length; i++) {

        $(fadeSet[i]).css("transition", "all 0." + z + "s ease-in-out");
        $(fadeSet[i]).css("opacity", "0." + x);


    }

    //Set defaults on all elements using glideM
    var glideSet = $(".glideM").toArray();
    for (var i = 0; i < glideSet.length; i++) {
    
        $(glideSet[i]).css("transition", "all 0." + z + "s cubic-bezier(0.785, 0.135, 0.15, 0.86)");
		
		if(glideDr=="alt"){
		
			if(i % 2 == 0){
			$(glideSet[i]).css("transform", "translate(" + $(window).width() + "px,0px)");
			$(glideSet[i]).css("-moz-transform", "translate(" + $(window).width() + "px,0px)");
			$(glideSet[i]).css("-webkit-transform", "translate(" + $(window).width() + "px,0px)");		
			} else if(i % 2 == 1) {
			$(glideSet[i]).css("transform", "translate(-" + $(window).width() + "px,0px)");
			$(glideSet[i]).css("-moz-transform", "translate(-" + $(window).width() + "px,0px)");
			$(glideSet[i]).css("-webkit-transform", "translate(-" + $(window).width() + "px,0px)");
			
			}
			
		}
		
		else if(glideDr=="left")
		
		{
		    $(glideSet[i]).css("transform", "translate(" + $(window).width() + "px,0px)");
			$(glideSet[i]).css("-moz-transform", "translate(" + $(window).width() + "px,0px)");
			$(glideSet[i]).css("-webkit-transform", "translate(" + $(window).width() + "px,0px)");	
		}
		
		else 
		
		{
			$(glideSet[i]).css("transform", "translate(-" + $(window).width() + "px,0px)");
			$(glideSet[i]).css("-moz-transform", "translate(-" + $(window).width() + "px,0px)");
			$(glideSet[i]).css("-webkit-transform", "translate(-" + $(window).width() + "px,0px)");
		
		}
		

    }

    //Set defaults on all elements using popM
    var popSet = $(".popM").toArray();
    for (var i = 0; i < popSet.length; i++) {

        $(popSet[i]).css("transition", "all 0." + z + "s cubic-bezier(0.785, 0.135, 0.15, 0.86)");
        $(popSet[i]).css("transform", "skew(90deg) scale(0.1)");

    }
	
	//Set defaults on all elements using zooM
    var zoomSet = $(".zooM").toArray();
    for (var i = 0; i < zoomSet.length; i++) {

        $(zoomSet[i]).css("transition", "all 0." + z + "s ease-in-out");
        $(zoomSet[i]).css("transform", "scale("+zoomss+")");
        $(zoomSet[i]).css("-moz-transform", "scale("+zoomss+")");
        $(zoomSet[i]).css("-webkit-transform", "scale("+zoomss+")");

    }

    //Set defaults on all elements using stickHere
    var stickSet = $(".stickM").toArray();

    var stickTop = [];
    for (var i = 0; i < stickSet.length; i++) {

        $(stickSet[i]).css("position", "relative");
        $(stickSet[i]).css("z-index", "100000");
        //setting the default distance from top of page for each element

        stickTop.push($(stickSet[i]).offset().top);
    }
	




    //event responds to scrolling
    $(window).scroll(function () {


        //get the number of pixels scrolled from the top
        var doc = document.documentElement,
            body = document.body;
        var top = (doc && doc.scrollTop || body && body.scrollTop || 0);




        //find all elements using the fadeM attribute

        var faderM = $(".fadeM").toArray();
        for (var i = 0; i < faderM.length; i++) {



            //get the offset for each element

            posF = $(faderM[i]).offset().top - y;


            //set the element css when it reaches the set distance from top        

            if (top > posF) {




                //checks if css transitions are supported and runs either transitions or fadeIn animation.	

                if (!cssTransitions() == false) {

                    $(faderM[i]).fadeTo(100, 1.0);

                }
                else if (!cssTransitions() == true) {

                    $(faderM[i]).css("opacity", "1.0");

                }


            }
            else {


                //checks if css transitions are supported and runs either transitions or fadeOut animation.	

                if (!cssTransitions() == false) {

                    $(faderM[i]).fadeTo(100, iex);

                }
                else if (!cssTransitions() == true) {

                    $(faderM[i]).css("opacity", "0." + x);

                }

            }
        }



        //find all elements using the glideM attribute

        var gliderM = $(".glideM").toArray();
        for (var i = 0; i < gliderM.length; i++) {



            //get the offset for each element

            posG = $(gliderM[i]).offset().top - y;


            //set the element css when it reaches the set distance from top        

            if (top > posG) {

                $(gliderM[i]).css("transform", "translate(0px,0px)");
                $(gliderM[i]).css("-moz-transform", "translate(0px,0px)");
                $(gliderM[i]).css("-webkit-transform", "translate(0px,0px)");

            }
            else {
			
				if(glideDr=="alt"){

					if(i % 2 == 0){
					$(gliderM[i]).css("transform", "translate(" + $(window).width() + "px,0px)");
					$(gliderM[i]).css("-moz-transform", "translate(" + $(window).width() + "px,0px)");
					$(gliderM[i]).css("-webkit-transform", "translate(" + $(window).width() + "px,0px)");		
					} else if(i % 2 == 1) {
					$(gliderM[i]).css("transform", "translate(-" + $(window).width() + "px,0px)");
					$(gliderM[i]).css("-moz-transform", "translate(-" + $(window).width() + "px,0px)");
					$(gliderM[i]).css("-webkit-transform", "translate(-" + $(window).width() + "px,0px)");
					}
					
				}
				
				else if(glideDr=="left")
				
				{

					$(gliderM[i]).css("transform", "translate(" + $(window).width() + "px,0px)");
					$(gliderM[i]).css("-moz-transform", "translate(" + $(window).width() + "px,0px)");
					$(gliderM[i]).css("-webkit-transform", "translate(" + $(window).width() + "px,0px)");				
				
				}
				
				else
				
				{
				
					$(gliderM[i]).css("transform", "translate(-" + $(window).width() + "px,0px)");
					$(gliderM[i]).css("-moz-transform", "translate(-" + $(window).width() + "px,0px)");
					$(gliderM[i]).css("-webkit-transform", "translate(-" + $(window).width() + "px,0px)");
				
				}
            }

        }



        //find all elements using the glideM attribute

        var poppeM = $(".popM").toArray();
        for (var i = 0; i < poppeM.length; i++) {



            //get the offset for each element

            posP = $(poppeM[i]).offset().top - y;


            //set the element css when it reaches the set distance from top        

            if (top > posP) {

                $(poppeM[i]).css("transform", "skew(0deg) scale(1.0)");
                $(poppeM[i]).css("-moz-transform", "skew(0deg) scale(1.0)");
                $(poppeM[i]).css("-webkit-transform", "skew(0deg) scale(1.0)");

            }
            else {

                $(poppeM[i]).css("transform", "skew(90deg) scale(0.1)");
                $(poppeM[i]).css("-moz-transform", "skew(90deg) scale(0.1)");
                $(poppeM[i]).css("-webkit-transform", "skew(90deg) scale(0.1)");
            }

        }
		
        //find all elements using the zooM attribute

        var zoomM = $(".zooM").toArray();
        for (var i = 0; i < zoomM.length; i++) {



            //get the offset for each element

            posZ = $(zoomM[i]).offset().top - y;


            //set the element css when it reaches the set distance from top        

            if (top > posZ) {

                $(zoomM[i]).css("transform", "scale(1.0)");
                $(zoomM[i]).css("-moz-transform", "scale(1.0)");
                $(zoomM[i]).css("-webkit-transform", "scale(1.0)");

            }
            else {

                $(zoomM[i]).css("transform", "scale("+zoomss+")");
                $(zoomSet[i]).css("-moz-transform", "scale("+zoomss+")");
                $(zoomSet[i]).css("-webkit-transform", "scale("+zoomss+")");
            }

        }


        //makes elements with stickHere stick to top


        for (var i = 0; i < stickSet.length; i++) {
		
		
		   if(tempstick == "on"){


				if (top >= stickTop[i]-stickdistance && top <= (stickTop[i]+sticktime-stickdistance)) {

					$(stickSet[i]).css("position", "fixed");
					$(stickSet[i]).css("top", stickdistance+"px");
				}

				else if(top >= (stickTop[i]+sticktime-stickdistance))

					   {
					   
						$(stickSet[i]).css("position", "relative");
						$(stickSet[i]).css("top", top-top+sticktime + "px");


					   }
				
				else
				
				       {
					   
						$(stickSet[i]).css("position", "relative");
					    $(stickSet[i]).css("top", "0px");
						
				       }
			} 
			
			else 
			
			{
			    if (top >= (stickTop[i]-stickdistance)) {

					$(stickSet[i]).css("position", "fixed");
					$(stickSet[i]).css("top", stickdistance+"px");
				}

				else

				{
					$(stickSet[i]).css("position", "absolute");
					$(stickSet[i]).css("top", "0px");


				}
			}

        }




    });




}
