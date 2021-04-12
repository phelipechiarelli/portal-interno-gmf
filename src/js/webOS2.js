(function ( $ ) {
    $.fn.slantedMenu = function(){
        
        var target = $(this);
        
        var num = target.find("li").length * 1.05;
        var pc = (100 / num);
        var pco = (100 / (num + 1));
        var pch = pco * 2;
        
        sizing = function(){
            target.find("li").each(function(){
                $(this).removeAttr("style");
                $(this).css({"width" : pc + "%"});
            });
        };
        
        if(target.attr("data-webOs2") == "automatic"){
            sizing();
        }
           
        target.find("li").hover(
            function(){
                $(this).css({"width" : pch + "%"},200).siblings("li").css({"width" : pco + "%"},200);
            }, 
            function(){
                target.find("li").css({"width" : pc + "%"}, 200);
            }
        );

    };
}(jQuery));

$("#webOs2").slantedMenu();