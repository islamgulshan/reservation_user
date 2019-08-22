var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

// mongoose.connection.openUri('mongodb://localhost:27017/myfirstproject', { useNewUrlParser:true});
// mongoose.connection.on('connected',()=>{
// 	console.log('coonected To db ');
// })

// mongoose.connection.on('error',(err)=>{
// 	if(err){
// 		console.log(`error while connection to db ${err}`);
// 	}
// })

var router =require('./routes/user');

const port = 5000;

var app = express();
app.use(cors());





// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serving static content
app.use(express.static(path.join(__dirname, "public")));
app.use('/api',router);
app.use('/', (req,res)=>{
	res.send('my first');
	
});

// Heroku 
// app.listen(process.env.PORT || port , () => {
//   console.log(`listening on port ${port}`);
// });

// Openshift


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

