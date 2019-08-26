var mongoose= require('mongoose');
const parkingslot_userschema=mongoose.Schema({
	
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
	}
},
	{
		timestamps:true

	}	


)


module.exports= mongoose.model('parkingslot_user',parkingslot_userschema);