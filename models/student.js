var mongoose= require('mongoose');
const studentschema=mongoose.Schema({
	
    studentName:{
        type: String,
        require:true,
        lowercase:true

    }
    ,
    phone: {
		type:String,
	}
}

)


module.exports= mongoose.model('student',studentschema);