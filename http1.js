//get
var http = require('http');
var url = require('url');
var querystring = require('querystring');
http.createServer(function(req,res){
	// res.writeHead('200',{'Content-type':'text/plain'});
	// res.end(console.log(req.url););
	var pathname = url.parse(req.url).pathname;
	var paramstr = url.parse(req.url).query;
	var param = querystring.parse(paramstr); ///变成{'name':'laoshan'}
	console.log(param);

}).listen(3000);
console.log('server is listening port 3000');
//////-----------------原生get提交---------------------///
