const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const Exception = require("../core/Exception/Exception");
const http_status_code = require("../helpers/http_status_code");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false,
        //match:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/
    },
    email: {
        type: String,
        trim: true,
        required: true,
        match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    role: {
        type: "String",
        // required: true,
        enum: ['user', 'modirator', 'contributor', "superVisor", 'admin'],
        default: 'user'
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordExpiresAt: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
});

// Build the relation
UserSchema.virtual("task", { // relation => one to many 
    ref: "Task",
    localField: "_id", // one || sould be primary || table 1 => 
    foreignField: "owner" // many || sould be forign || table 2 => task Model 

})

UserSchema.virtual("article", { // relation => one to many 
    ref: "Article",
    localField: "_id", // one || sould be primary || table 1 => 
    foreignField: "owner" // many || sould be forign || table 2 => task Model 

})

const saltRounds = 10;
UserSchema.methods.toJson = function() {
    console.log(this)
    let user = this;


}
UserSchema.methods.checkCorrectPassword = async function(candidatePass, userPass) {
    console.log("candidatePass", candidatePass)
    console.log("userPass", userPass)
    const result = bcrypt.compare(candidatePass, userPass);

    console.log(result)
    return bcrypt.compare(candidatePass, userPass);

}

UserSchema.static.getUserCredintials = async function(email, password) {

    let userExist = await this.findOne({ email });
    if (!userExist) throw new Exception('User is already exist', http_status_code.BadRequest, 'AKkq24')

    const checkPass = await bcrypt.compare(password, userExist.password)
    if (!checkPass) throw new Exception("email or password may be incorrect", http_status_code.BadRequest, "KUJIJ2c26");

    console.log(userExist)

    return userExist

};

UserSchema.methods.getUserToken = async function() {
        const user = this;
        const token = jwt.sign({ _id: user._id.toString() }, "lolaloka")
        return token
    }
    // cannot get it 100%
UserSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
    // console.log("JWTTimestamp", JWTTimestamp)
    if (this.passwordChangedAt) {
        const changedTimeStamp = parseInt(this.password.passwordChangedAt.getTime() / 1000, 10)
        return JWTTimestamp < changedTimeStamp
    }

    return false
}


// generate random token to the user 
UserSchema.methods.createPasswordResetToken = function() {
    // token that will be sent to user  
    const resetToken = crypto.randomBytes(32).toString("hex");
    // encrepted token 
    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.passwordExpiresAt = Date.now() + 10 * 60 * 1000;
    // console.log({resetToken}, this.passwordResetToken)
    return resetToken;




}




// Add QueryMiddelware
// UserSchema.pre(/^find/, function(next) {

//     // this here refers to the current query 
//     // find ely msh equal false
//     this.find({ active: { $ne: false } })

//     next()

// })

UserSchema.pre('save', async function() {
    let user = this;
    let hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;

});

module.exports = mongoose.model("User", UserSchema, "User");