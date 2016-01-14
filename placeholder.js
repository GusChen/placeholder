/*****
 * @author Guschen
 * @github https://github.com/Guschen/placeholder
 * @modified 2016/1/14
 **/
!(function(window, $){
    function Placeholder(){
        return Placeholder.prototype.init();
    }

    //init 方法
    Placeholder.prototype.init = function (){
        if (!isPlaceholderSupport()) {
            support();
        }
    }

    //是否支持placeholder
    function isPlaceholderSupport() {  
        return 'placeholder' in document.createElement('input');  
    }

    //添加支持
    function support(){
        $("input[type='text'], textarea").each(function(){
            if (typeof($(this).attr("placeholder"))!="undefined") {
                inputPlaceholder(this);
            }
        });
    }

    //input
    function inputPlaceholder(_t){
        var color = "#c5c5c5"; //(ノ=Д=)ノ┻━┻
        var _val = $(_t).attr("placeholder");
        $(_t).val(_val);
        $(_t).css("color", color);
        $(_t).focus(function () {
            if ($(_t).val() == _val) {
                $(_t).css("color", '');
                $(_t).val("");
            }
        });
        $(_t).blur(function(){
            if ($(_t).val() == '') {
                $(_t).css("color", color);
                $(_t).val(_val);
            }
        });
    }
    Placeholder.prototype.init.prototype = Placeholder.prototype;
    window.Placeholder = Placeholder;
}(window,$));