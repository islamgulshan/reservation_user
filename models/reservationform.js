var mongoose= require('mongoose');
const reservationschema=mongoose.Schema({
	
	name: {
		type:String,
		require:true
	},
	email: {
		type:String,
		require:true,
		index: {unique:true}
	},
	room_type: {
		type:String,
		require:false
	},
	arrival_date: {
		type:Date,
		require:false
	},
	deprate_date: {
		type:Date,
		require:false	
	},
	no_of_guest: {
		type:Number,
		require:false
	},
	free_packup: {
		type:Number,
		require:false
	},
	flight_number: {
		type:String,
		require:false
	},
	specail_requests: {
		type:String,
		require:false
	}
},
	{
		timestamps:true

	}	


)


module.exports= mongoose.model('reservation',reservationschema);