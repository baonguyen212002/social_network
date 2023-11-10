import mongoose from "mongoose";
import crypto from "crypto";

const schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        primaryKey: true,
        unique: true
    },
    username: {
        type: String,
        require: true,
        default: 'Anomyous',
        maxlength: 150
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        maxlength: 150
    },
    //Created_at , Updated_at
}, { timestamps: true} 
);

schema.pre('save', async function(next) {
    const hashedPassword = await hashPassword(this.password);
    this.password = hashedPassword;
    next();
  });
  
  async function hashPassword(password) {
    const hash = crypto.createHash("md5");
    hash.update(password);
    return hash.digest("hex");
  }

export const UserModel = mongoose.model('Users', schema);