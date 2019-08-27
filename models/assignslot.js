var mongoose= require('mongoose');
const assignslotschema=mongoose.Schema({
	
    PSId:{
        type : mongoose.Schema.Types.ObjectId,
        rel: "parkingslots"

    }
    ,
    SID:{
        type : mongoose.Schema.Types.ObjectId,
        rel: "parkingslot_users"

    }
    ,
    currentdata:{
        type:Date,
        default: Date.now()
    }
}

)

assignslotschema.index({ PSId:1,SID:1,currentdata:1},{ unique: true});
module.exports= mongoose.model('assignslot',assignslotschema);