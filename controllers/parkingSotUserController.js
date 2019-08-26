const parkingslot_userschema=require('../models/parkingSlotUser');

// parking user insert 
const parkingSlotSignUp =( req,res)=>{
	let parkingslotsignup = new parkingslot_userschema(); 
	parkingslotsignup.name=req.body.name;
	parkingslotsignup.email=req.body.email;
	parkingslotsignup.phone=req.body.phone;
	parkingslotsignup.user_type=req.body.user_type;
	 
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




// Module Exports
module.exports={
	parkingSlotSignUp
}