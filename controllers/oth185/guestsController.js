const asyncHandler =require("express-async-handler");
const Guests=require("../../models/oth185/guestModel_oth185");


const getGuests=asyncHandler(async(req,res)=>{
    const guests=await Guests.find();
    res.send(guests);
});

const addGuest=asyncHandler(async(req,res)=>{
    const newGuest=await new Guests(req.body);
    newGuest.color="#87f0aa";
    await newGuest.save();
    res.status(201).json(newGuest);
});
 
const updateGuest=asyncHandler(async(req,res)=>{
  const {name,email,price,address,phone,days,arrival,depart,status,bill,room}=req.body;
  try{
      const guest=await Guests.findById(req.params.id);
      const room=guest.room;
      if(guest){
        

        if(name!==""){
            guest.name=name;
        }
        if(email!==""){
            guest.email=email;
        }
        if(address!==""){
            guest.address=address;
        }
        if(phone!==""){
            guest.phone=phone;
        }
        if(price!==""){
            guest.price=price;
        }
        if(days!==""){
            guest.days=days;
        }
        if(arrival!==""){
            guest.arrival=arrival;
        }
        if(depart!==""){
            guest.depart=depart;
        }
        if(bill!==""){
            guest.bill=bill;
        }
        if(status!==""){
            guest.status=status;
        }
        if(guest.status==="CheckedIn"){
            guest.color="#FF9494";
        }
        if(guest.status==="CheckedOut"){
            guest.color="#87f0aa";
        }
        guest.room=room;
        const updatedGuest=await guest.save();
        res.send(updateGuest);
      }
      else{
        res.status(404);
        throw new Error("Room not found");
    }
  }
  catch(err){
    console.log(err)
      res.send("Error in server side");
  }
})


module.exports = {getGuests,addGuest,updateGuest};
