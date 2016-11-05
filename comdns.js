var url=require('url');
var http=require('http');
var dns=require('dns');
var fs=require('fs');
var querystring=require('querystring');


http.createServer(function(req,res){
	var pathname=url.parse(req.url).pathname;
	req.setEncoding('utf8');
	res.writeHead('200',{'Content-type':'text/html'});
	//var pathname=__dirname+'/module/'+url.parse('index.html').pathname;
	//var indexPage=fs.readFileSync(pathname);
	//res.end(indexPage);
	router(req,res,pathname);

}).listen(3000);

console.log('server start');

function router(req,res,pathname){
	switch(pathname){
		case '/parse' :
			parseDNS(req,res);
			break;
		default :
			getIndex(req,res);
			break;
	}
}

function getIndex(req,res){
	var pathname=__dirname+'/module/'+url.parse('index.html').pathname;
	var indexPage=fs.readFileSync(pathname);
	res.end(indexPage);
}

function parseDNS(req,res){
	//res.end('laoshan');
	var postData="";
	req.addListener('data',function(postDataChunk){
		postData+=postDataChunk;

	});

	
	req.addListener('end',function(){
		//console.log(123);
		//res.end('hello');

		var retData=getDns(postData,function(domain,addresses){
			//console.log(domain);
			//console.log(addresses);
			var str=""
			for($i=0;$i<addresses.length;$i++){
				str=" "+addresses[$i];
			}

			var data="domain : "+domain+" addresses "+str;
			res.end(data);
		});

		//console.log(postData);
	});
}

function getDns(postData,callback){
	var domain=querystring.parse(postData).search_name;

	//console.log(domain);

	dns.resolve4(domain,function(err,addresses){
		if(!addresses){
			addresses='no domain';
		}

		//console.log(addresses);
		callback(domain,addresses);

	});
}

/*
app.js
var routers=require('./routers.js');
var express=require('express');

var app=express;

routers(app);

routers.js

module.exports=function(app){
	app.get('/',user/login);
}*/


