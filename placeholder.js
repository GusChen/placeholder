/*****
 * @author Guschen
 * @github https://github.com/Guschen/placeholder
 * @modified 2016/1/14
 **/
!(function(window){
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
        var inputTag = document.getElementsByTagName("input");
        for (var i = 0; i < inputTag.length; i++) {
            inputPlaceholder(inputTag[i]);
        } 
        var textareaTag = document.getElementsByTagName("textarea");
        for (var i = 0; i < textareaTag.length; i++) {
            inputPlaceholder(textareaTag[i]);
        } 
    }

    //input
    function inputPlaceholder(_t){
        if (_t.hasAttribute("placeholder")) {
            var _val = _t.getAttribute("placeholder");
            _t.value = _val;
            addStyle(_t);
            _t.onfocus = function(){
                if (this.value == _val) {
                    removeStyle(this);
                    this.value = '';
                }
            }
            _t.onblur = function(){
                if (this.value == "") {
                    addStyle(this);
                    this.value = _val;
                }
            }
        }
    }

    //addStyle
    function addStyle(_t){
        if (config.Class == '') {
            _t.style.color = config.Color;
        } else {
            _t.className += " " + config.Class; 
        }
    }

    //removeStyle
    function removeStyle(_t){
        if (config.Class == '') {
            _t.style.color = "";
        } else {
            var reg = new RegExp('(\\s|^)' + config.Class + '(\\s|$)');  
            _t.className = _t.className.replace(reg, ' ');   
        }
    }

    Placeholder.prototype.init.prototype = Placeholder.prototype;
    window.Placeholder = Placeholder;
}(window));