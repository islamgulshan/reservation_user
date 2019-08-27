var mongoose= require('mongoose');
var bcrypt=require("bcrypt-node");
var SALT_WORK_FACTOR=10;
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

parkingSlotUserSchema.pre('save', function(next){
	var user=this;
	//
	

	// if(!user.isModified('password')){
	// 	return next();
	// }
	// console.log('hey')

	//generate ]
	if (!user.isModified("password")) {
   				 return next();
  	 }
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err,salt){
		
		if (err) return next();

		bcrypt.hash(user.password, salt, null, function (err,hash){
		
			if (err) return next();
		
			user.password=hash;

			return next();
		})
	})

})

 
	parkingSlotUserSchema.methods.comparePassword = function(candidatePassword, cb) {
		bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		 if (err) return cb(err);
		 cb(null, isMatch);
		});
};

 



module.exports= mongoose.model('parkingslot_user',parkingSlotUserSchema);