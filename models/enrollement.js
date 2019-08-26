var mongoose= require('mongoose');
const enrollementschema=mongoose.Schema({
	
    StuId:{
        type : mongoose.Schema.Types.ObjectId,
        rel: "student"

    }
    ,
    CId:{
        type : mongoose.Schema.Types.ObjectId,
        rel: "course"

    }
}

)

enrollementschema.index({ StuId:1,CId:1},{ unique: true});


module.exports= mongoose.model('enrollment',enrollementschema);