const express=require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/db");

dotenv.config();
connectDB();

const app=express();
app.use(express.json()); // to accept json data


app.use("/api/ma/rooms",require("./routes/ma32/roomRoutes"));
app.use("/api/ma/guests",require("./routes/ma32/guestRoutes"));


app.use("/api/oth/rooms",require("./routes/oth185/roomRoutes"));
app.use("/api/oth/guests",require("./routes/oth185/guestRoutes"));


const PORT=process.env.PORT||8090
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})

