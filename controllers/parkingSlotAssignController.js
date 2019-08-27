const slotAssignSchema=require('../models/assignslot');


// Add Enrollement 
const AssignSlot =( req,res)=>{
	var currentdata = new Date();
	slotAssignSchema.find({ SID: req.body.SID,currentdata:currentdata }, function (err, data) {
			 if(err){
			res.status(500).json({
				message: "Some issue on sever"
			})
		}
		if(data.length == 0) {

			let NewslotAssign = new slotAssignSchema(); 
			NewslotAssign.SID=req.body.SID;
			NewslotAssign.PSId=req.body.PSId;

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
		}else{
			res.status(500).json({
				message: "already added"
			})

		}
	})


	
	// 	if(err){
	// 		res.status(500).json({
	// 			message: "Some issue on sever"
	// 		})
	// 	}
	// 	if(data.length == 0) {
	// 		NewslotAssign.save( (err,slot) => {
	// 			if(err){
	// 				res.status(500).json({
	// 					message: "Some issue on sever",
	// 					slot
	// 				})
	// 			}
	// 			else{
	// 				res.status(200).json({
	// 					message: "data save successfully",
	// 					slot
	// 				})
	// 			}
	// 		})
	// 	}else{
	// 		res.status(500).json({
	// 			message: "already added"
	// 		})

	// 	}
	// })

}



module.exports={
	AssignSlot
}