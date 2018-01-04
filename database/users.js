var mongoose=require("mongoose");
var userSchema=new mongoose.Schema({
	nameOfNgo : {type:String,required:true},
	name:String,
	user_id_number:String,
	gender:String,
	cast : String,
	doa : {type:Date,default:Date.now,required: true},
	dob:{type:Date,default:Date.now,required: true},
	gender : String,
	maritalStatus  : String,
	address  : String,
	referedByName  : String,
	careOf  : String,
	numberOfChildrens  : String,
	nameOfChildrens  : String,
	victimsConditon  : String,
	belongings  : String,
	kitProvided  : String,
	rehabitationDetails  : String,
	dateOfDischarge  : {type:Date,default:Date.now,required: true},
	handoverToPersonName  : String,
	handoverToPersonPhoto  : String,
	remarks  : String,
	sov:String,
	poliseFIR:String
});

mongoose.model("users",userSchema);
