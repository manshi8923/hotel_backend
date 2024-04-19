const Rooms=require("../../models/ma32/roomModel_ma32");
const asyncHandler =require("express-async-handler");

//get rooms status
const getRooms = asyncHandler(async (req, res) => {
    try{
    const rooms = await Rooms.find();
    res.send(rooms);
    }
    catch(err){
        res.send("Error in server side")
    }
});

//update
const updateRoom=asyncHandler(async(req,res)=>{
    const {roomNo,book,cleaningStatus,price,bookedOn,bookedBy}=req.body;
    try{
        const room=await Rooms.findById(req.params.id);
        if(room){
            if(roomNo!==""){
                room.roomNo=roomNo;
            }
            if(book!==""){
                room.book=book;
            }
            if(cleaningStatus!==""){
                room.cleaningStatus=cleaningStatus;
            }
            if(price!==""){
                room.price=price;
            }
            if(bookedOn!==""){
                room.bookedOn=bookedOn;
            }
            if(bookedBy!==""){
                room.bookedBy=bookedBy;
            }
            
            if(room.book==="Booked"){
                room.color="#FF9494";
            }
            if(room.book==="Vacant"){
                room.color="#87f0aa";
            }
            const updatedRoom=await room.save();
            res.send(updatedRoom);
        }
        else{
            console.log("error");
            res.status(404);
            throw new Error("Room not found");
        }
    }
    catch(err){
        res.send("Error in server side");
    }
  
});
module.exports={getRooms,updateRoom};