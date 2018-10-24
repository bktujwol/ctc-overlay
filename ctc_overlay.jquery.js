/***
	 * 
	 * 
	 * 
	 * ctcOverlay jQuery plugin
	 * jQuery plugin to display images in overlay
	 * https://ujwolbastakoti.wordpress.com/
	 * MIT license
	 * 
	 * 
	 * 
	 */




		
		
		
(function( $ ){

		
	$.fn.ctcOverlay = function (){
		
		//load overlay conatiner on window load
		window.onload = function(){
			
				var overlayContainer = '';
						
						overlayContainer += '<div  id="ctcOverlay" class="ctcOverlay">'; 
						overlayContainer +='<span id="ctcGalleryLeftNav" class="ctcGalleryLeftNav"></span>';
						overlayContainer +='<span id="ctcGalleryRightNav" class="ctcGalleryRightNav"></span>';
						overlayContainer +=' <div id="ctcLoadedImgAltTitle" class="ctcLoadedImgAltTitle"></div>';	
						overlayContainer +='<div id="ctcOverlayCountAndCurrentImage" class="ctcOverlayCountAndCurrentImage">';
						overlayContainer +='<span id="ctcOverlayCurrentImageNumber" class="ctcOverlayCurrentImageNumber"></span>';
						overlayContainer +='<span id="ctcOverlayTotalImageCount" class="ctcOverlayTotalImageCount">  </span>';
						overlayContainer +=' </div>';
						overlayContainer +='<div id="ctcOverlayImageContainer" class="ctcOverlayImageContainer">';		
						overlayContainer +=' </div>'; 
						overlayContainer +='<span id="ctcOverlayClosebtn" title="close" class="ctcOverlayClosebtn" ></span>';	
						overlayContainer +=' </div>';			   
						$('body').prepend(overlayContainer);

			}	
		
		

	/*
	 * 
	 * supplementary functions to the core function
	 * 
	 * 
	 * 
	 */	
		
	//function to resize font based on screen size
		
	function ctcResizeFontOnResize(screenWidth){
		if(screenWidth<1280){
			 var optimizedFontSize = (screenWidth/1280)*80; 
			 	
			 	if($('#ctc-font-style').length>=1){
			 	
				 		$('#ctc-font-style').remove();
				 		$('head').append('<style id=ctc-font-style>#ctcGalleryLeftNav::before,#ctcGalleryRightNav::before{font-size:'+Math.ceil(optimizedFontSize)+'px !important;} #ctcOverlayClosebtn::before{font-size:'+Math.ceil((optimizedFontSize/2))+'px !important}</style>');
			 	
			 	}
			 	else{
			 		$('head').append('<style id=ctc-font-style>.ctcGalleryLeftNav::before,.ctcGalleryRightNav::before{font-size:'+optimizedFontSize+'px !important;}</style>');
			 	}
		 }	
		}	
		
	//function to return title and alt for image
	function returnImgTitleAlt(imgAttr){

		if(imgAttr !==(undefined || null ||''||'undefined')){
			return imgAttr;
		}
		else{
			
			return '';
		}
	}




	/***
	 * 
	 * core plugin functionalities
	 * 
	 * 
	 */

	$( window ).resize(function() {


		if(jQuery("#ctcOverlay").height() != 0){
			
				 loadOverlayImages($('.ctcImageBeingDisplayed').attr('data-img-number'));
			}
		return false;
	});

		/* Close when someone clicks on the "x" symbol inside the overlay */
		$(document).on("click",'#ctcOverlayClosebtn', function(){
				 $("#ctcOverlay").animate({
					    height:0,
						opacity:0,
						},
					    300,
					    function(){
							 $('.ctcImageBeingDisplayed').hide();
							  //if scroll bar exists hide it first
							  $('body').css('overflow','auto');
						});
		});	



		$(document).on("click","#ctcGalleryLeftNav,#ctcGalleryRightNav",function () {loadOverlayImages($(this).attr("data-img-number"));});

		

	document.addEventListener('keydown', function(event) {
		
		if($("#ctcOverlay").height() !== 0){

			if (event.code === 'ArrowLeft'){ 
				var imgNumber = $("#ctcGalleryLeftNav").attr("data-img-number");
				if(imgNumber.length > 0) {loadOverlayImages(imgNumber)};
			}
			else if (event.code == 'ArrowRight'){ 
				var imgNumber = $("#ctcGalleryRightNav").attr("data-img-number");
				if(imgNumber.length > 0) {loadOverlayImages(imgNumber)};
						
			}
			else if (event.code == 'Escape'){ 
				$('#ctcOverlayClosebtn').click();
			}
		}
		  
	});

	$(this).on('mouseover',function(event){
		
		if($(this).attr('data-ctc-active-gallery') != 'active'){
				let overlayImageGallery ='';
				let i=0;
				
				$('img',this).each(function(){
					$(this).attr('data-img-number',i);
					overlayImageGallery += '<img  data-img-number="'+i+'" class="ctcOverlayImages"  title="'+$(this).attr('title')+'" id="ctc-image-overlay-'+i+'" alt="'+$(this).attr('alt')+'" src="'+$(this).attr('src')+'"/>';
					i++;
				});
				$("#ctcOverlayImageContainer").empty();
				$("#ctcOverlayImageContainer").prepend(overlayImageGallery);
				$("*[data-ctc-active-gallery = 'active']").removeAttr('data-ctc-active-gallery');
				$(this).attr('data-ctc-active-gallery','active');
		}
		else{
			if($("#ctcOverlay").height() !== 0){
				let overlayImageGallery ='';
				let i=0;
				$('img',this).each(function(){
					$(this).attr('data-img-number',i);
					overlayImageGallery += '<img  data-img-number="'+i+'" class="ctcOverlayImages"  title="'+$(this).attr('title')+'" id="ctc-image-overlay-'+i+'" alt="'+$(this).attr('alt')+'" src="'+$(this).attr('src')+'"/>';
					i++;
				});
				$("#ctcOverlayImageContainer").prepend( overlayImageGallery);
			}
			
		}

	});


	//on click of each image  trigger overlay
	$('img',this).on('click',function(event){
		loadOverlayImages($(this).attr('data-img-number'));
		event.preventDefault();
	});



	function loadOverlayImages(currentImageNumber){
		
			var imageRatio = 0;
			var imageWidth = 0;
			var imageHeight = 0;
			var imageActualHeight =0;
			var imageActualWidth =0;
			var imgHeightRatio =0;
			var imgMarginTop ='';
			var prevImage = 0;
			var nextImage = 0;
			var imageToHide =$('.ctcImageBeingDisplayed');
			var imageToDisplay = $("#ctc-image-overlay-"+currentImageNumber);
			var screenWidth = window.screen.width;
			var screenHeight = window.screen.height;
			var image = new Image();
			    image.src =imageToDisplay.attr('src');
	  
	  image.addEventListener('load',function(){
			 
		  //if scroll bar exists hide it first
		  $('body').css('overflow','hidden');
		  
			imageActualHeight = image.height;
			imageActualWidth  = image.width; 
			
			//special case when window is not in full screen
			
			 var windowWidth = window.innerWidth;
			 var windowHeight = window.innerHeight;
			 
			 
			 //while window is resized little bit
			 
			 if(screenWidth>windowWidth  || screenHeight>windowHeight){
				screenWidth =  windowWidth;
				screenHeight = windowHeight;
			 }
			
			 var optimizedFontSize = (screenWidth/1280)*80;    
			//call function to style font based on screen size
			 ctcResizeFontOnResize(screenWidth);
			 
			 
			var totalImageCount = $('.ctcOverlayImages').length;
			
		
			
		
						    if(totalImageCount >= 2){
			
							
															var imageNumberToLoad = parseInt(currentImageNumber);
															var prevImage = imageNumberToLoad-1;
															
															var nextImage = imageNumberToLoad+1;
																
															
												
																		if(prevImage >= 0  && nextImage < totalImageCount){
																		
																			$('#ctcGalleryLeftNav').attr('data-img-number',prevImage);
																			$('#ctcGalleryRightNav').attr('data-img-number',nextImage);
																			$('#ctcOverlayCurrentImageNumber').empty().prepend('Image '+(imageNumberToLoad+1));
																			$('#ctcOverlayTotalImageCount').empty().prepend(' of '+totalImageCount);
																			$('#ctcGalleryLeftNav,.ctcGalleryRightNav').animate({opacity:1},100, function(){});
																
																		}
																		else if(prevImage < 0  && nextImage < totalImageCount){
																		
																			$('#ctcGalleryLeftNav').attr('data-img-number','').animate({opacity:0},300, function(){});
																			$('#ctcGalleryRightNav').attr('data-img-number',nextImage);
																			$('#ctcOverlayCurrentImageNumber').empty().prepend('Image '+(imageNumberToLoad+1));
																			$('#ctcOverlayTotalImageCount').empty().prepend(' of '+totalImageCount);
																			$('#ctcGalleryRightNav').animate({opacity:1},100, function(){});
																			
																			
																		}
																		else if (prevImage >= 0 && nextImage >= totalImageCount){
																			
																			$('#ctcGalleryRightNav').attr('data-img-number','').animate({opacity:0},300, function(){});
																			$('#ctcGalleryLeftNav').attr('data-img-number',prevImage);
																			$('#ctcOverlayCurrentImageNumber').empty().prepend('Image '+(imageNumberToLoad+1));
																			$('#ctcOverlayTotalImageCount').empty().prepend(' of '+totalImageCount);
																			$('#ctcGalleryLeftNav').animate({opacity:1},100, function(){});
																
																		}	
															
						}	
						else{
				
							imageNumberToLoad = currentImageNumber;
							$('#ctcGalleryRightNav,#ctcGalleryLeftNav,#ctcOverlayCountAndCurrentImage').css('visibility','hidden');
					
						}	
			
						
						var imageScreenHeightRatio = 0;
						var imageScreenWidthRatio =0;
						var optimizedImageHeight = 0;
						var optimizedImageWidth = 0;
		
					if((imageActualWidth >= screenWidth) && (imageActualHeight >= screenHeight )){	
								if(imageActualWidth >= imageActualHeight){
														if(imageActualWidth > imageActualHeight ){
															 
														     imageScreenWidthRatio = imageActualWidth/screenWidth;
														     
														     optimizedImageWidth = (imageActualWidth/imageScreenWidthRatio)-(0.15*screenWidth);
													    		
														     optimizedImageHeight = imageActualHeight*(optimizedImageWidth/imageActualWidth);
														     
																	     if(optimizedImageHeight >=(0.85*screenHeight)){
																	    	 imageScreenHeightRatio = screenHeight/imageActualHeight;
																			 optimizedImageHeight = imageActualHeight*imageScreenHeightRatio-(0.15*screenHeight);
																			 optimizedImageWidth = imageActualWidth*(optimizedImageHeight/imageActualHeight);
																			 
																	     }
													 
													}
										
										else{

													   if(screenWidth > screenHeight){
														   optimizedImageHeight = (0.85*screenHeight);
														   optimizedImageWidth =  optimizedImageHeight;
														  
													     }
													   else if(screenHeight > screenWidth){
														   
														   optimizedImageWidth = (0.85*screenWidth);
														   optimizedImageHeight =  optimizedImageWidth;
														   
													   }
													   else{	   
													
														   imageScreenHeightRatio = screenHeight/imageActualHeight;
															 optimizedImageHeight = imageActualHeight*imageScreenHeightRatio-(0.15*screenHeight);
															 optimizedImageWidth = imageActualWidth*(optimizedImageHeight/imageActualHeight);
													   }
										}	 
								 	
						}
						else{
							 imageScreenHeightRatio = imageActualHeight/screenHeight;
							 optimizedImageHeight = (imageActualHeight/imageScreenHeightRatio)-(0.15*screenHeight);
							 optimizedImageWidth = imageActualWidth*(optimizedImageHeight/imageActualHeight);
						}    
					        
					}
					else if(imageActualWidth >= screenWidth &&  imageActualHeight  < screenHeight){
						 imageScreenWidthRatio = screenWidth/imageActualWidth;
						 optimizedImageWidth = imageActualWidth*imageScreenWidthRatio-(0.15*screenWidth);
						  optimizedImageHeight = imageActualHeight*(optimizedImageWidth/imageActualWidth);
					}
					else if(imageActualHeight >= screenHeight && imageActualWidth < screenWidth){
						 imageScreenHeightRatio = screenHeight/imageActualHeight;
						 optimizedImageHeight = imageActualHeight*imageScreenHeightRatio-(0.15*screenHeight);
						 optimizedImageWidth = imageActualWidth*(optimizedImageHeight/imageActualHeight);
						 optimizedImageHeight = imageActualHeight*(optimizedImageWidth/imageActualWidth);
					}
					else{
								var avilableImageWidth =  0.85*screenWidth;		
								var avilableImageHeight =  0.85*screenHeight;
								if(imageActualWidth >= avilableImageWidth &&  imageActualHeight >= avilableImageHeight){
									var imageAvilableWidthRatio = avilableWidth/imageActualWidth;
									imageAvilableHeightRatio = avilableHeight/imageActualHeight;
										 optimizedImageWidth = avilableWidth*imageAvilableWidthRatio;
								         optimizedImageHeight = screenHeight*imageScreenHeightRatio;
								}	
								else if(imageActualWidth >= avilableImageWidth &&  imageActualHeight < avilableImageHeight ){
									 var imageAvilableWidthRatio = avilableImageWidth/imageActualWidth;
									 optimizedImageWidth = imageActualWidth*imageAvilableWidthRatio;
									  optimizedImageHeight = imageActualHeight*(optimizedImageWidth/imageActualWidth);
								}
								else if(imageActualHeight >= avilableImageHeight && imageActualWidth < avilableImageWidth){
									 imageAvilableHeightRatio = avilableImageHeight/imageActualHeight;
									 optimizedImageHeight = imageActualHeight*imageAvilableHeightRatio;
									 optimizedImageWidth = imageActualWidth*(optimizedImageHeight/imageActualHeight);
								}
								else{
									optimizedImageWidth = imageActualWidth;
									optimizedImageHeight = imageActualHeight;
								}
								optimizedImageHeight = imageActualHeight*(optimizedImageWidth/imageActualWidth);
					} 
					
					
			//at last check it optimized width is still large			
		   if(optimizedImageWidth>(0.85*screenWidth)){	   
			   optimizedImageWidth = 0.85*screenWidth;
			   optimizedImageHeight = imageActualHeight*(optimizedImageWidth/imageActualWidth);
			   
		   }
			
		   
			
			//first set image to be displayed height width to 0 for effect
		   imageToDisplay.css({ 'width':optimizedImageWidth+'px','height':optimizedImageHeight+'px'});
	           $("#ctcOverlay").animate({width:screenWidth,height:screenHeight,opacity:1},200,function(){	
	        	var containerMarginTop = (screenHeight-optimizedImageHeight)/2;
	        	var containerMarginLeft = ((screenWidth-optimizedImageWidth)/2)-30;

				var navIconMargin = 	containerMarginTop+(optimizedImageHeight/2)-45;
				var closeButton =  $('#ctcOverlayClosebtn');
				var ctcExtraInfoTop = screenHeight-50;
						if($('img.ctcOverlayImages').length>=2){
												if(imageToHide.length ===1){
											
												imageToHide.animate({opacity:0},300,function(){
													
													imageToHide.removeClass("ctcImageBeingDisplayed").hide(100,function(){
														
														 
														  $('#ctcOverlayImageContainer').animate({'margin-left':containerMarginLeft+'px','margin-top':containerMarginTop+'px'},10,function(){	
															  //hide all images before diplaying one
															  $('.ctcOverlayImages').hide();
															  
															  closeButton.animate({'margin-right':(((screenWidth-optimizedImageWidth)/2)-(optimizedFontSize))+'px'},300,function(){
																	$(this).animate({'margin-top':(containerMarginTop-20)+'px'},250,function(){});
																	 
																 });
															  
															    imageToDisplay.show().animate({
												        			  opacity:1
																	  },600,function(){
																		 
																		//first load alt image
																			 if(returnImgTitleAlt($(this).attr('title'))){
																				    $('#ctcLoadedImgAltTitle').empty().animate({opacity:1,'right':'10px','bottom':'10px'},300,function(){}).prepend($(this).attr('title'));
																				  }
																		    else if(returnImgTitleAlt($(this).attr('alt'))){
																				    $('#ctcLoadedImgAltTitle').empty().animate({opacity:1,'right':'10px','bottom':'10px'},300,function(){}).prepend($(this).attr('alt'));
																				  }
																			  else{
																				  
																				  $('#ctcLoadedImgAltTitle').animate({'opacity':'0','right':'0px','bottom':'0px'});
																				  
																			  }
																			 
																			 $('#ctcOverlayCountAndCurrentImage').animate({opacity:1,'left':'5px','bottom':'30px'},200,function(){});
																				  
																			  }).addClass('ctcImageBeingDisplayed');
															        $('#ctcGalleryRightNav').css({'margin-top':navIconMargin+'px'});
															        $('#ctcGalleryLeftNav').css({'margin-top':(navIconMargin+10)+'px'});
															  });
													});
													
												  });	
										}else{
											  $('#ctcOverlayImageContainer').animate({'margin-left':containerMarginLeft+'px','margin-top':containerMarginTop+'px'},10,function(){	
												  //hide all images before diplaying one
												  $('.ctcOverlayImages').hide();
												  
												  closeButton.animate({'margin-right':(((screenWidth-optimizedImageWidth)/2)-(optimizedFontSize))+'px'},300,function(){
														$(this).animate({'margin-top':(containerMarginTop-20)+'px'},250,function(){});
														 
													 });
												    imageToDisplay.show().animate({
									        			  opacity:1
														
														  },600,function(){
															
															//first load alt image
																 if(returnImgTitleAlt($(this).attr('title'))){
																	    $('#ctcLoadedImgAltTitle').empty().animate({opacity:1,'right':'10px','bottom':'10px'},300,function(){}).prepend($(this).attr('title'));
																	  }
															    else if(returnImgTitleAlt($(this).attr('alt'))){
																	    $('#ctcLoadedImgAltTitle').empty().animate({opacity:1,'right':'10px','bottom':'10px'},300,function(){}).prepend($(this).attr('alt'));
																	  }
																  else{
																	  
																	  $('#ctcLoadedImgAltTitle').animate({'opacity':'0','right':'0px','bottom':'0px'});
																	  
																  }
	 
																 if(totalImageCount >= 2){
																	 $('#ctcOverlayCountAndCurrentImage').animate({opacity:1,'left':'5px','bottom':'30px'},200,function(){});
																 }
																
																  }).addClass('ctcImageBeingDisplayed');	
												    
												    
												        $('#ctcGalleryRightNav').css({'margin-top':navIconMargin+'px'});
												        $('#ctcGalleryLeftNav').css({'margin-top':(navIconMargin+10)+'px'});
												  });
											
										}		
										
								}
								else{
									
									 $('#ctcOverlayImageContainer').animate({'margin-left':containerMarginLeft+'px','margin-top':containerMarginTop+'px'},10,function(){	
										 
										 closeButton.animate({'margin-right':(((screenWidth-optimizedImageWidth)/2)-(optimizedFontSize))+'px'},300,function(){
												$(this).animate({'margin-top':(containerMarginTop-20)+'px'},250,function(){});
												 
											 });
										  
										 
										    imageToDisplay.show().animate({
							        			  opacity:1
												  },600,function(){
													 
													 
													
														 if(returnImgTitleAlt($(this).attr('title'))){
															    $('#ctcLoadedImgAltTitle').empty().animate({opacity:1,'right':'10px','bottom':'10px'},300,function(){}).prepend($(this).attr('title'));
															  }
													    else if(returnImgTitleAlt($(this).attr('alt'))){
															    $('#ctcLoadedImgAltTitle').empty().animate({opacity:1,'right':'10px','bottom':'10px'},300,function(){}).prepend($(this).attr('alt'));
															  }
														  else{
															  
															  $('#ctcLoadedImgAltTitle').animate({'opacity':'0','right':'0px','bottom':'0px'});
															  
														  }
	 
														  }).addClass('ctcImageBeingDisplayed');
										        $('#ctcGalleryRightNav').css({'margin-top':navIconMargin+'px'});
										        $('#ctcGalleryLeftNav').css({'margin-top':(navIconMargin+10)+'px'});
										  });
							
								}
				
		        	});

				
		  });

		
	}

	  return this;
							
	 };

		}(jQuery));
		





	
	


