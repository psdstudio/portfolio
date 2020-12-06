$(document).ready(function(){
	$(".mainSlider").slick({
        dots:true,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
		prevArrow:'<div class="sliderBtn prevBtn">이전</div>',
		nextArrow:'<div class="sliderBtn nextBtn">다음</div>'
      });
});
//스크롤이벤트
$(document).ready(function(){
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
	    if(sct>=485){
		    $(".fpImg").addClass("wmwInLeft");
		}else if(sct<485){
			$(".fpImg").removeClass("wmwInLeft");
		}if(sct>=1455){
		    $(".hcImg").addClass("wmwInRight");
		}else if(sct<1455){
			$(".hcImg").removeClass("wmwInRight");
		}if(sct>=2425){
		    $(".bsImg").addClass("wmwInLeft2");
		}else if(sct<2425){
			$(".bsImg").removeClass("wmwInLeft2");
		}
	});
});
//snow
$(document).ready(function(){
            $('.collectonme').hide();

            //Start the snow default options you can also make it snow in certain elements, etc.
            $(document).snowfall();

            var $testContainer = $('.test-container'),
                testContainerIsSnowing = true;

            $testContainer.snowfall();

            $testContainer.click(function(e){
                testContainerIsSnowing = !testContainerIsSnowing;

                if(!testContainerIsSnowing){
                    $testContainer.snowfall('clear');
                }else{
                    $testContainer.snowfall();
                }
            });

            $("#clear").click(function(){
                $(document).snowfall('clear'); // How you clear
            });
            
            $("#round").click(function(){
                document.body.className  = "darkBg";
                $('.collectonme').hide();
                $(document).snowfall('clear');
                $(document).snowfall({round : true, minSize: 5, maxSize:8}); // add rounded
            });
            
            $("#shadows").click(function(){
                document.body.className  = "lightBg";
                $('.collectonme').hide();
                $(document).snowfall('clear');
                $(document).snowfall({shadow : true, flakeCount:200}); // add shadows
            });

            $("#roundshadows").click(function(){
                document.body.className  = "lightBg";
                $('.collectonme').hide();
                $(document).snowfall('clear');
                $(document).snowfall({shadow : true, round : true,  minSize: 5, maxSize:8}); // add shadows
            });
            
            $("#collection").click(function(){
                $(document).snowfall('clear');
                document.body.className  = "darkBg";
                $('.collectonme').show();
                $(document).snowfall({collection : '.collectonme', flakeCount : 250});
            });
            
            $("#imgbut").click(function(){
                $('.collectonme').hide();
                $(document).snowfall('clear');
                document.body.className  = "darkBg";
                $(document).snowfall({image :"images/flake.png", minSize: 10, maxSize:32});
            });

            $("#deviceorientation").click(function(){
                $(document).snowfall('clear');
                $('.collectonme').hide();
                document.body.className  = "darkBg";
                $(document).snowfall({deviceorientation : true, round : true, minSize: 5, maxSize:8});
            });

        });