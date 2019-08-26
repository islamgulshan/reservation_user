const Studentschema=require('../models/student');


// Reservation insert 
const AddStudent =( req,res)=>{
	let NewStudent = new Studentschema(); 
	NewStudent.studentName=req.body.studentName;
	NewStudent.phone=req.body.phone;


	NewStudent.save( (err,Student) => {
		if(err){
			res.status(500).json({
				message: "Some issue on sever",
				Student
			})
		}
		else{
			res.status(200).json({
				message: "data save successfully",
				Student
			})
		}
	})
}



module.exports={
	AddStudent
}