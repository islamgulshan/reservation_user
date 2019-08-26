var mongoose= require('mongoose');
const parkingslotassignschema=mongoose.Schema({
	
    assing_date:{
        type: String,
        default: Date.now()

    }
    ,
    expire_date: {
		type:String,
		default: Date.now()
    }
    ,
    assignto : [{ type: Schema.Types.ObjectId, ref: 'parkingslot_users' }] 

},
	{
		timestamps:true

	}	


)


module.exports= mongoose.model('parkingslot_assign',parkingslotassignschema);