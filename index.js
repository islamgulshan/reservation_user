var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

mongoose.connection.openUri('mongodb://localhost:27017/myfirstproject', { useNewUrlParser:true});
mongoose.connection.on('connected',()=>{
	console.log('coonected To db ');
})

mongoose.connection.on('error',(err)=>{
	if(err){
		console.log(`error while connection to db ${err}`);
	}
})

var router =require('./routes/user');

const PORT = 3000;

var app = express();
app.use(cors());





// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serving static content
app.use(express.static(path.join(__dirname, "public")));
app.use('/api',router);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});