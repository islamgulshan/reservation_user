var mongoose= require('mongoose');
const contactschema=mongoose.Schema({
	
	name: {
		type:String,
		require:true
	},
	
	email: {
		type:String,
		require:true,
		index: {unique:true}
	},
	
	message: {
		type:String,
		require:false
	
	}
},
	{
		timestamps:true

	}	


)

module.exports= mongoose.model('contactform',contactschema);