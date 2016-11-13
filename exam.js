//做的一个网上的题，就是给两个文件，first.txt里一堆数据，second.txt里数据偏少，如果这里的数据在first.txt里，j就输出true，否则false
//first.txt:
	// 45
	// 67
	// 556647
	// 6787
	// 541509
	// 6767577
	// 187034
	// 6766
	// 23
	// 598147
	// 90
//second.text:
	// 556647
	// 541509
	// 187034
	// 598147
	// 1331831	

var fs = require('fs');
var arr=[];
var data = fs.readFileSync('first.txt','utf-8');
	arr = data.split('\r\n');
var arr1=[];
var data1 = fs.readFileSync('second.txt','utf-8');	// data.
	arr1 = data1.split('\r\n');
var arrnew = [];
var arrnew1 = [];
for(var i=0; i<arr.length; i++){
	arrnew[i] = parseInt(arr[i]);
}
for(var i=0; i<arr1.length; i++){
	arrnew1[i] = parseInt(arr1[i]);
}
for(var i=0; i<arrnew1.length; i++){
	for(var j=0; j<arrnew.length; j++){
		if(arrnew1[i] == arrnew[j]){
			console.log('true' + '\r');
			break;
		}
		else if((arrnew1[i] != arrnew[j]) && (j==arrnew.length-1)){
			console.log('false'+'\r');
		}
	}
}
