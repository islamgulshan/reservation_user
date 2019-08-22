const reservationschema=require('../models/reservationform');


// Reservation insert 
const add_reservation =( req,res)=>{
	let newreservation = new reservationschema(); 
	newreservation.name=req.body.name;
	newreservation.email=req.body.email;
	newreservation.room_type=req.body.room_type;
	newreservation.arrival_date=req.body.arrival_date;
	newreservation.deprate_date=req.body.deprate_date;
	newreservation.no_of_guest=req.body.no_of_guest;
	newreservation.free_packup=req.body.free_packup;
	newreservation.flight_number=req.body.flight_number;
	newreservation.specail_requests=req.body.specail_requests;
	
	newreservation.save( (err,reservationn) => {
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "data save successfully",
				reservationn
			})
		}
	})
}

// //   Get all result
const get_all_reservation =( req,res)=>{

	reservationschema.find( (err,reservationn) =>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "data get successfully",
				reservationn
			})
		}
			
	})
	
}

const getReservationId =  (req,res) => {


	reservationschema.findById(req.body.id, (err,reservationn)=>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "get one   successfully",
				reservationn
			})
		}
	})
}


const deleteReservation=  (req,res) => {
	reservationschema.findByIdAndRemove(req.body.id, (err,reservationn)=>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "delete one   successfully",
				reservationn
			})
		}
	})
}


 const updatReservation = (req,res)=>{

	reservationschema.findByIdAndUpdate(req.body.id, req.body.contact,{ new :true}, (err,reservationn)=>{
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
	add_reservation,
	get_all_reservation,
	getReservationId,
	deleteReservation,
	updatReservation,
}