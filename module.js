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
