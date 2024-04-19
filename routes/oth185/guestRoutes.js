const express=require("express");
const { updateGuest, getGuests, addGuest } = require("../../controllers/oth185/guestsController");

const router=express.Router();

router.route('/').get(getGuests);
router.route('/addguest').post(addGuest);
router.route('/:id').put(updateGuest);
module.exports=router;