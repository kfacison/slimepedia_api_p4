import { Schema, model } from 'mongoose';
import { Food, dietTypes, locationFound } from '../interface/types';

const foodSchema = new Schema<Food>({
    name: { 
        type: String, 
        required: true 
    },
    type: {
        type: String, 
        enum: dietTypes
    },
    location: [{
        type: String,
        enum: locationFound
    }],
    growTime: Number,
    harvetQuantity: Number
},{
    timestamps: true
})

module.exports = model("Food", foodSchema);