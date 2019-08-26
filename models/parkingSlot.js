var mongoose= require('mongoose');
const parkingslotSchema=mongoose.Schema({
	
    SlotCode:{
        type: String,
        require:true

    }
    ,
    SlotName: {
		type:String,
		require:true
    },
    createdDate: { 
		type: Date, 
		default: Date.now()
     },
     
}
)


module.exports= mongoose.model('parkingslot',parkingslotSchema);