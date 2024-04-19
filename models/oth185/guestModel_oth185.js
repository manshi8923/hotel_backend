const mongoose=require("mongoose");

const guestSchema=mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false,
    },
    address:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        default:0,
        required:false
    },
    phone:{
        type:String,
        required:false
    },
    days:{
        type:Number,
        required:false
    },
    arrival:{
        type:String,
        required:false
    },
    depart:{
        type:String,
        required:false
    },
    status:{
        type:String,
        default:"Not arrived"
    },
    room:{
        type:String,
        default:false,
    },
    bill:{
        default:0,
        type:Number,
        required:false,
    },
    color:{
        type:String,
        required:false
    }
},{
    timestamps:true,
})


const Guests_oth=mongoose.model("Guests_oth",guestSchema);
module.exports=Guests_oth;