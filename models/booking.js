const mongoose = require("mongoose")
const { User } = require("./user")


const bookingSchema = new mongoose.Schema({
    userInfo:{
        type: Array,
        required: true,
    },
    service: {
        type: String,
        required: true
    }
    ,
    city: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true
    },
    detailedAddress:{
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    carMake: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true
    },
    carSize: {
        type: String,
        required: true
    },
    additionalNotes:{
        type: String,
        required: false
    }
    
})

module.exports.Booking = mongoose.model("Booking", bookingSchema)