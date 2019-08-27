var mongoose= require('mongoose');
const parkingSlotUserSchema=mongoose.Schema({
	
	name: {
		type:String,
		require:true
	},
	email: {
		type:String,
		require:true,
		index: {unique:true}
	},
	phone: {
		type:String,
		require:false
	},
	createdDate: { 
		type: Date, 
		default: Date.now()
	 },
	user_type: {
		type:Number,
		require:true
	},
	password:{
		type:String
	}
},
	{
		timestamps:true

	}	


)


module.exports= mongoose.model('parkingslot_user',parkingSlotUserSchema);