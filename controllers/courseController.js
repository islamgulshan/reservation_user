const Courseschema=require('../models/course');


// Course Add 
const AddCourse =( req,res)=>{
	let NewCourse = new Courseschema(); 
	NewCourse.CourseCode=req.body.CourseCode;
	NewCourse.CourseName=req.body.CourseName;

	NewCourse.save( (err,Course) => {
		if(err){
			res.status(500).json({
				message: "Some issue on sever",
				Course
			})
		}
		else{
			res.status(200).json({
				message: "data save successfully",
				Course
			})
		}
	})
}



module.exports={
	AddCourse
}