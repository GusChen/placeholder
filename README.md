# placeholder v0.2

兼容ie的placeholder小插件

## 使用

> jquery版本

0. 需要引进一个jq库（这个插件依赖于jquery）
0. 页面引入placeholder.js

	```js
	<script src="placeholder.jquery.js"></script>
	```

> 原生版本

	```js
	<script src="placeholder.js"></script> //同样是直接引入
	```


0. 使用方式如下

> jquery版本

	```js
	<script>
	Placeholder(); //这样就可以了 做了自适应 这个没写样式和class的配置 (ノ=Д=)ノ┻━┻
	</script>
	```
> 原生版本

	```js
	<script>
	Placeholder(); //这样就可以了 做了自适应
	Placeholder({Class: "ClassName"}); //可以配置class样式
	Placeholder({Color: "#c5c5c5"}); //可以配置颜色
	</script>
	```

	html代码

	```html
	<input type="text" placeholder="test"/>
	```

