/*****
 *添加格式 new Placeholder({selecter:".class",text:"文字",color:"color"});
 **/

var Placeholder = function (obj) {
    //选择器
    this.selecter = obj.selecter;
    //文字
    this.text = obj.text;
    //颜色
    this.color = obj.color || "#C5C5C5";
    //启动函数
    this.init();
}

Placeholder.prototype.init = function () {
    if (this.isPlaceholderSupport()) {
        this.support();
    } else{
        this.nonsupport();
    };
}

Placeholder.prototype.isPlaceholderSupport = function () {
    //判断是否支持placeholder
    return 'placeholder' in document.createElement('input');  
}

//支持placeholder
Placeholder.prototype.support = function () {
    $(this.selecter).attr("placeholder",this.text);
}

//不支持placeholder
Placeholder.prototype.nonsupport = function () {
    var T = this.selecter;
    var Text = this.text;
    var color = this.color;
    //初始化
    $(T).val(Text);
    $(T).css("color", color);
    //focus 聚焦
    $(T).focus(function () {
        if ($(this).val() == Text) {
            $(this).css("color", '');
            $(this).val("");
        }
    });
    //离开
    $(T).blur(function(){
        if ($(this).val() == '') {
            $(this).css("color", color);
            $(this).val(Text);
        }
    });
}



var Placeholder2 = Placeholder2 || {};
Placeholder2 = function () {
    //"use strict"
    var Placeholder2 = {};
    var Pl = {};

    //unil
    function _init() {
        if (isPlaceholderSupport()) {
            support();
        } else {
            nonsupport();
        }
    }
    function support() {
        $(Pl.selecter).attr("placeholder",Pl.text);
    }

    //不支持placeholder
    function nonsupport() {
        var T = Pl.selecter;
        var Text = Pl.text;
        var color = Pl.color;
        //初始化
        $(T).val(Text);
        $(T).css("color", color);
        //focus 聚焦
        $(T).focus(function () {
            if ($(this).val() == Text) {
                $(this).css("color", '');
                $(this).val("");
            }
        });
        //离开
        $(T).blur(function(){
            if ($(this).val() == '') {
                $(this).css("color", color);
                $(this).val(Text);
            }
        });
    }
    
    //是否支持placeholder
    function isPlaceholderSupport() {  
        return 'placeholder' in document.createElement('input');  
    } 

    //添加
    Placeholder2.add = function (obj) {  
        Pl.selecter = obj.selecter;
        //文字
        Pl.text = obj.text;
        //颜色
        Pl.color = obj.color || "#C5C5C5";
        //init
        _init();
    }
    return Placeholder2;
} ();