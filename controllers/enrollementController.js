const enrollementSchema=require('../models/enrollement');


// Add Enrollement 
const AddEnrollement =( req,res)=>{
	let NewEnrollement = new enrollementSchema(); 
	NewEnrollement.StuId=req.body.StuId;
	NewEnrollement.CId=req.body.CId;
	NewEnrollement.save( (err,Enrollement) => {
		if(err){
			res.status(500).json({
				message: "Some issue on sever",
				Enrollement
			})
		}
		else{
			res.status(200).json({
				message: "data save successfully",
				Enrollement
			})
		}
	})
}



module.exports={
	AddEnrollement
}