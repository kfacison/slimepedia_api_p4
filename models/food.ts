import { Schema, model } from 'mongoose';
import { Food, dietTypes, locationFound } from '../types/types';

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

export default model("Food", foodSchema);