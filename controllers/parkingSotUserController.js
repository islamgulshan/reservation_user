var jwt= require("jsonwebtoken");
const parkingslot_userschema=require('../models/parkingSlotUser');
var bcrypt=require("bcrypt-node");
 // parking user insert 
const parkingSlotSignUp =( req,res)=>{
	
	let parkingslotsignup = new parkingslot_userschema(); 
	parkingslotsignup.name=req.body.name;
	parkingslotsignup.email=req.body.email;
	parkingslotsignup.phone=req.body.phone;
	parkingslotsignup.user_type=req.body.user_type;
	parkingslotsignup.password=req.body.password;
	 
	parkingslotsignup.save( (err,userinfo) => {
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "data save successfully",
				userinfo
			})
		}
	})
}

 // parking user insert 
 const parkingUserLogin =( req,res)=>{
	 
	// fetch user and test password verification
	parkingslot_userschema.findOne({ email: req.body.email }, function(err, user) {
		if(err){
			res.status(500).json({
				message: "error",
				err
			})
		}
		else{  
			user.comparePassword(req.body.password, function(err, isMatch) {
				if(err){
					res.status(500).json({
						message: "error",
						err
					})
				}else{

					jwt.sign({user},'secretkey',{ expiresIn:'3000s'},(err,token)=>{
						 
						if(err){
							res.status(500).json({
								message: "error",
								err
							})
						}else{
							res.status(200).json({
								message: "Login Successfully",
								token,user
							})
						}
						


					})
					 
				}
				
			});
	
		 
			
		}

	
	});
 }	


// Module Exports
module.exports={
	parkingSlotSignUp,
	parkingUserLogin
}