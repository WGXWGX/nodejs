function class1(){
	this.showText = function(){
		console.log(this.name);
	}
}
var obj = new Object();
obj.name = 'laoshan';
class1.call(obj);//把class1
class1.call(obj);//把class1e 内容覆盖 到obj上
console.log(obj.showText());  //laoshan    undefined
obj.showText();
//两种输出方式都行

