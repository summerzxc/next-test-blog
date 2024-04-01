import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let userModel;
if (mongoose.models.User) {
  userModel = mongoose.models.User;
} else {
  userModel = mongoose.model("User", User);
}

export default userModel;
