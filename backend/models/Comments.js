import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    comment : {
        type: String,
        required: true
    }, 
    assesment : {
        type: String
    },
    user :{
        type: mongoose.Schema.ObjectId,
        ref: 'Users'
    }
}, 
{ versionKey: false }
);

const Comments =  mongoose.model('Comments', commentsSchema);
export default Comments;