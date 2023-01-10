import mongoose from "mongoose";
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {
        type: String,
        required: true
    }, 
    surnames: {
        type: String
    },
    role:{
        type: String,
        required: true
    },
    language:{
        type: String
    },
    password:{
        type: String,
        required: true
    },
    token:{
        type: String
    }
}, 
{ versionKey: false }
);

const Users =  mongoose.model('Users', usersSchema);
export default Users;