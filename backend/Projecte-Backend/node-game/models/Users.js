import mongoose from "mongoose";
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: {
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
    }
}, 
{ versionKey: false }
);

const Users =  mongoose.model('Users', usersSchema);
export default Users;