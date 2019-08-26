const parkingslotschema=require('../models/parkingSlot');
 

// parking user insert 
const AddParkingSlot =( req,res)=>{
	let Newparkingslot = new parkingslotschema(); 
	Newparkingslot.SlotCode=req.body.SlotCode;
	Newparkingslot.SlotName=req.body.SlotName; 
	 
	Newparkingslot.save( (err,slatinfo) => {
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "data save successfully",
				slatinfo
			})
		}
	})
}


 
 


module.exports={
	AddParkingSlot 
}