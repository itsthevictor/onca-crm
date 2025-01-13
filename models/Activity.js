import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema({
  who: String,
  whoId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  what: String,
  when: Date,
});

export default mongoose.model("Activity", ActivitySchema);
