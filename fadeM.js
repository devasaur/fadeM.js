 * Version: 0.0.1
 * Author: Shawn Pavlas
 * Contact: shawnzabar@gmail.com
 * Website: http://www.devasaur.com/
 *
 *
 * Copyright (c) 2013 Devasaur
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

function startFadeM(fmx,fmy){

                    //check if the values are numbers

					
							if (isNaN(fmx) || isNaN(fmy)) {
							alert('The FadeM settings require numbers. Looks like you typed '+fmx+' and '+fmy+'. Oops!');
							} 

							
					
					

                    //convert the values to a number string
                    var x = parseInt(fmx);
                    var y = parseInt(fmy);
					

							

					//Set defaults on all elements using fadeclass
                   	var fadeSet = $(".fadeclass").toArray();
							for (var i = 0; i < fadeSet.length; i++) {
							
							$(fadeSet[i]).css("transition","all 0.5s ease-in-out");
							$(fadeSet[i]).css("opacity","0."+x);
							$(fadeSet[i]).css("filter","aplha(opacity="+x+"0)");
							
							}



						//event responds to scrolling
						window.onscroll = function(event){


							//get the number of pixels scrolled from the top
							var doc = document.documentElement, body = document.body;
							var top = (doc && doc.scrollTop  || body && body.scrollTop  || 0);
			
			
			
			
			                    //find all elements using the fadeclass attribute

								var faderM = $(".fadeclass").toArray();
										for (var i = 0; i < faderM.length; i++) {
										

								
								//get the offset for each element
								
								posF = $(faderM[i]).offset().top - y;
						
												
								 //set the element css when it reaches the set distance from top	
								 
								if(top > posF) {
								
								$(faderM[i]).css("opacity","1.0");
								$(faderM[i]).css("filter","aplha(opacity=100)");
				
								
											  }
								else {
								
								$(faderM[i]).css("opacity","0."+x);
								$(faderM[i]).css("filter","aplha(opacity="+x+"0)");
									   }
								
								}
                    
   
	
						                              }
	      
		  
		  
		                   
								
								

							
		  
                           }
