const parkingslot_userschema=require('../models/parkingslote_user');
const parkingslotschema=require('../models/parkingslot');
const parkingslotassignschema=require('../models/parkingslotassign');

// parking user insert 
const parkingSlotSignup =( req,res)=>{
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


// parkslot insert 
const parkingslot_add =( req,res)=>{
	 
			res.status(200).json({
				message: "data save successfully" 
			})
		 
	 
}

//assign parking slot 
const parkingslot_assign =( req,res)=>{
	let parkingslotassign = new parkingslotassignschema(); 
	parkingslot.area_numer=req.body.area_numer;
	 
	 
	parkingslot.save( (err,slot) => {
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "data save successfully",
				slot
			})
		}
	})
}



module.exports={
	parkingSlotSignup,
	parkingslot_add,
	parkingslot_assign
}