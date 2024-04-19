const mongoose=require("mongoose");
const roomSchema=mongoose.Schema({
    roomNo:{
        type:Number,
        required:false
    },
    book:{
        type:String,
        required:false
    },
    cleaningStatus:{
        type:String,
        required:false,
    },
    price:{
        type:Number,
        required:false
    },
    bookedOn:{
        type:String,
        required:false
    },
    bookedBy:{
        type:String,
        required:false
    },
    color:{
        type:String,
        required:false
    }
},{
    timestamps:true
})


const Rooms_ma=mongoose.model("Rooms_ma",roomSchema);
module.exports=Rooms_ma;