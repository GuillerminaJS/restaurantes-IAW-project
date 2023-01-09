import mongoose from "mongoose";
const Schema = mongoose.Schema;

const typesSchema = new Schema({
    name : {
        type: String,
        required: true
    }, 
    description : {
        type: String,
        required: true
    }
}, 
{ versionKey: false }
);

const Types =  mongoose.model('Types', typesSchema);
export default Types;