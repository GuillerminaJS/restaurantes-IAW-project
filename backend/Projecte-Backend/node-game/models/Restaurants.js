import mongoose from "mongoose";
const Schema = mongoose.Schema;

const restaurantsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    img :{
        type: String,
    },
    description: {
        type: String
    },
    direction: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    plates: {
        type: String,
        required: true
    },
    type: {
        type: mongoose.Schema.ObjectId,
        ref: 'Types'
    },
    halfPrice :{
        type : Number,
        required: true
    }
},
    { versionKey: false }
);

const Restaurants = mongoose.model('Restaurants', restaurantsSchema);
export default Restaurants;