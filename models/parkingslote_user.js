var mongoose= require('mongoose');
var bcrypt=require("bcrypt-node");
var SALT_WORK_FACTOR=10;

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

parkingslot_userschema.pre('save',function  (next)){
	var user=this;
	//
	iif(!user.isModified('password')){
		return next();
	}
	//generate ]
	bcrypt.genSalt(SALT_WORK_FACTOR , function(err,salt)){
		if (err) return next();
		bcrypt.hast(user.password,salt,null, function (err,hash)){
			if (err) return next();
			user.password=hash;
			return next();
		}
	}

}

parkingslot_userschema.methods.compare= function (cadidatePassword,cb){
	bcrypt.compare(cadidatePassword,this.password, function (err ,isMatch){
		if (err) return next();
		cb(null,isMatch);
	})
}


module.exports= mongoose.model('parkingslot_user',parkingslot_userschema);