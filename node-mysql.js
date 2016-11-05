var mysql=require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'blogll'
});

connection.connect();

connection.query('select * from user',function(err,rows,fields){
	if(err){
		console.log(789);
	}else{
		console.log(rows);
		console.log(fields);
	}
})
