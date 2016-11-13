//exports  与 module.exports  的区别    ----require
var name;
exports.setName=function(thisname){
	name=thisname;
}
exports.sayHello=function(){
	console.log('hello '+name);
}
//commonjs  特性


exports  与  module.exports的区别
1.exports 是 module.exports的引用
2.module.exports的初始值是一个空对象，exports的初始值也是空对象.
3.require()返回的是（拿到的）module.exports  而不是exports
4.导出非对象接口就必须是module.exports
5.lizi     如上

1----------------
function person(){
	this.eat = function(){
		console.log('the food is good');
	}
	this.say = function(){
		console.log('laoshan ');
	}
}
module.exports = person;
2-------------------
exports.person={
	'eat':function(){
		console.log('eat');
	},
	'say':function(){
		console.log('say');
	}
}
3-------------------
module.exports = {'arr' : ['wendy','john','susan']};
exports.arr = ['a','b','c'];    arr就是那个对象
两行代码的意思是一样的，运行时删掉注释


