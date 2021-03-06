var url = require('url');
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var dns = require('dns');
http.createServer(function(req,res){
	res.writeHead('200',{'Content-type':'text/html'});
	var pathname = url.parse(req.url).pathname;
	req.setEncoding = 'utf8';
	// console.log(pathname);
	// var pathname = __dirname+ '/' + url.parse('index.html').pathname;
	// var indexPage = fs.readFileSync(pathname);
	//res.end(indexPage);         ///////用路由来处理了  包体的部分 没express  
	router(req,res,pathname);                                                     
}).listen(3000);
console.log('server is listening port 3000');
function router(req,res,pathname){
	switch(pathname){
		case '/parse':
			parseDNS(req,res);
			break;
		default:
			getIndex(req,res);
			break;
	}
} 
function getIndex(req,res){
	var pathname = __dirname+ '/' + url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(pathname);
	res.end(indexPage);  
}
function parseDNS(req,res){
	var postData = '';
	req.addListener('data',function(postDataChunk){
		postData+=postDataChunk;
		var retData = getDns(postData,function(domain,addresses){

		});
	});
}
function getDns(postData,callback){
	var domain = querystring.parse(postData).search_name;
	dns.resolve4(domain,function(err,addresses){
		if(!addresses){
			addresses = 'no domain!';
		}
		callback(domain,addresses);

	});
}

