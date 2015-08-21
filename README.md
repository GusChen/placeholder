# placeholder
兼容ie的placeholder小插件
***
## 使用
***
0. 需要引进一个jq库（这个插件依赖于jquery）
0. 页面引入placeholder.js
	```js
		<script src="placeholder.js"></script>
	```
0. 使用方式如下
	```js
	<script>
	//第一种方式
	new Placeholder({selecter:".cla1",text:"文字1",color:"#d3d3d3"});
	//第二种方式
	Placeholder2.add({selecter:".cla2",text:"文字2",color:"#d3d3d3"});
	//上面的内容中
	//selecter 为一个选择器，可以是一个class也可以是一个id
	//text 是提示的文字
	//color 是可选项 提示文字的颜色
	</script>
	```
	html代码
	```html
	<input class="cla1" type="text" />
	```
***
## 作用
在html5页面中可以使用placeholder，但是如果页面同时要兼容ie浏览器的时候该属性是无效的，所以写了这个插件来兼容这个问题。
第一次写js插件，希望有人能给点意见