const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

mongoose.connect("mongodb+srv://redaaboudi:Redaaboudi.2002@cluster0.vqvug30.mongodb.net/washMeDB")
.then(() => {
    console.log("Connected To Database")
})
.catch((err) => {
    console.log("There is an error")
    console.log(err)
})

const db = mongoose.connection

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
})

userSchema.plugin(passportLocalMongoose)
const User = mongoose.model("User", userSchema)


const seedDB = async() => {
    try{
        const user = new User({email: "redaaboudi@gmail.com", username: "redaaboudi"})
        const registerUser = await User.register(user, "hello123")
        if(registerUser){
            console.log("User Registered")
        }
    }catch(e){
        console.log(e)
    }
}

seedDB().then(() => {
    db.close()
})