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
