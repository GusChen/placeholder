/*****
 * @author Guschen
 * @github https://github.com/Guschen/placeholder
 * @modified 2016/1/14
 **/
!(function(window, $){
    var  config = {};
    function Placeholder(cfg){
        return Placeholder.prototype.init(cfg);
    }

    //init 方法
    Placeholder.prototype.init = function (cfg){
        if (cfg == undefined) {
            cfg = {};
        }
        config.Color = cfg.Color || "#c5c5c5"; //字体颜色
        config.Class = cfg.Class || ""; //class样式
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
        var _val = $(_t).attr("placeholder");
        $(_t).val(_val);
        $(_t).css("color", config.Color);
        $(_t).focus(function () {
            if ($(_t).val() == _val) {
                removeStyle(_t);
                $(_t).val("");
            }
        });
        $(_t).blur(function(){
            if ($(_t).val() == '') {
                 addStyle(_t);
                $(_t).val(_val);
            }
        });
    }
    //addStyle
    function addStyle(_t){
        if (config.Class == '') {
            $(_t).css("color",config.Color);
        } else {
            $(_t).addClass(config.Class);
        }
    }

    //removeStyle
    function removeStyle(_t){
        if (config.Class == '') {
            $(_t).css("color","");
        } else {
            $(_t).removeClass(config.Class);
        }
    }
    Placeholder.prototype.init.prototype = Placeholder.prototype;
    window.Placeholder = Placeholder;
}(window,$));