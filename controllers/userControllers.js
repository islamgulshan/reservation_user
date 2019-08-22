const contactschema=require('../models/contactform');


// save data 
const login =( req,res)=>{
	let newcontact = new contactschema(); 
	newcontact.name=req.body.name;
	newcontact.email=req.body.email;
	newcontact.message=req.body.message;
	newcontact.save( (err,contact) => {
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "data save successfully",
				contact
			})
		}
	})
}

//   Get all result
const signup =( req,res)=>{

	contactschema.find( (err,contact) =>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "data save successfully",
				contact
			})
		}
			
	})
	
}

const getone= (req,res)=>{
	// contactschema.findByID(req.body.id, (err,contact)=>{
	// 	if(err){
	// 		res.send(err);
	// 	}
	// 	else{
	// 		res.status(200).json({
	// 			message: "get one  save successfully",
	// 			contact
	// 		})
	// 	}
	// })
}


const removeone=(req,res)=>{
	contactschema.findByIDAndRemove(req.body.id, (err,contact)=>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "delete one  save successfully",
				contact
			})
		}
	})
}


const updateone = (req,res)=>{

	contactschema.findByIDAndUpdate(req.body.id, req.body.contact,{ new :true}, (err,contact)=>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "delete one  save successfully",
				contact
			})
		}
	})
}




module.exports={
	login,
	signup,
	getone,
	removeone,
	updateone
}