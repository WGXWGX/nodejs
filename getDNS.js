var mysql=require('./mysql.js');

function User_model(){

}

module.exports=User_model;

User_model.prototype.getArt=function(callback){
	connection.query('select * from user',function(err,rows){
		return callback(err,rows);
	})
}

Controllers---->User.js

var user_model=require('../Models/user_model.js');

var user_model=new user_model();
user_model.getArt(function(err,data){
	//console.log(data);

	$this->load->view('index.php',$data);
	res.render('index.ejs',{
		'data':data

	})

	/*
	res.writeHead('200',{'Content-type':'text/html'});
	res.end(data);*/
});
