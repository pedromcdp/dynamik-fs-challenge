import mongoose from "mongoose";

const { Schema } = mongoose;

let Developer: mongoose.Model<any> | undefined;

const DeveloperSchema = new Schema({
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  birth_date: {
    type: Date,
    required: true,
  },
  stack: {
    type: [String],
    required: false,
    default: null,
  },
});

try {
  Developer = mongoose.model("Developer");
} catch {
  Developer = mongoose.model("Developer", DeveloperSchema);
}

export { Developer };
