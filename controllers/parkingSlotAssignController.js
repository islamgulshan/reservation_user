const slotAssignSchema=require('../models/assignslot');


// Add Enrollement 
const AssignSlot =( req,res)=>{
	let NewslotAssign = new slotAssignSchema(); 
	NewslotAssign.PSId=req.body.PSId;
	NewslotAssign.SID=req.body.SID;
	NewslotAssign.save( (err,slot) => {
		if(err){
			res.status(500).json({
				message: "Some issue on sever",
				slot
			})
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
	AssignSlot
}