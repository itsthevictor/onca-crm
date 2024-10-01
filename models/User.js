import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: String,
  role: {
    type: String,
    enum: ["admin", "user", "seller"],
    default: "user",
  },
  verificationToken: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verified: Date,
  passwordToken: {
    type: String,
  },
  passwordTokenExpirationDate: {
    type: Date,
  },
});

// Return user object without password in any request
UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("User", UserSchema);
