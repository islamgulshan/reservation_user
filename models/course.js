var mongoose= require('mongoose');
const courseschema=mongoose.Schema({
	
    CourseCode:{
        type: String,
        lowercase:true

    }
    ,
    CourseName: {
		type:String,
	}
}
)


module.exports= mongoose.model('course',courseschema);