///////////////////////////////////////person.js
module.exports = function(){
	this.eat = function(){
		console.log('eating');
	}
	this.sleep = function(){
		console.log('sleeping');
	}
}
////////////////////////////////////////////////////////////student.js
var util = require('util');
var person = require('./person.js');
function student(){
	person.call(this);
	// util.inherits(this,person);
	// this.study = function(){
	// 	console.log('studing');
	// }
}
util.inherits(student,person);
student.prototype.study = function(){
	console.log('studing');/////////////////////两种写法
}
module.exports = student;

//////////////////////////////////////////teach.js
var util = require('util');
var person = require('./person.js');
function student(){
	person.call(this);
	util.inherits(this,person);
	this.teach = function(){
		console.log('teaching');
	}
}
module.exports = student;
//////////////////////////////////////////////////test.js

var util = require('util');
var person = require('./person.js');
var student = require('./student.js');
var programmer = require('./programmer.js');
console.log(person);
var person  = new person();
person.eat();
person.sleep();
console.log(student);
var student = new student();
student.study();
student.sleep();

