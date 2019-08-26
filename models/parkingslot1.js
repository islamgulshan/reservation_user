var mongoose= require('mongoose');
const parkingslotschema=mongoose.Schema({
	
    area_numer:{
        type: String,
        require:true

    }
    ,
    create_date: {
		type:String,
		default: Date.now()
	}
},
	{
		timestamps:true

	}	


)


module.exports= mongoose.model('parkingslot',parkingslotschema);