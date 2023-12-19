import { Schema, model } from 'mongoose';
import { Slime, behaviorTypes, dietTypes, locationFound } from '../interface/types';

const slimeSchema = new Schema<Slime>({
    name: { 
        type: String, 
        required: true 
    },
    plort: String,
    behavior: {
        type: String,
        enum: behaviorTypes
    },
    diet: {
        type: String, 
        enum: dietTypes
    },
    location: [{
        type: String,
        enum: locationFound
    }],
    favFood: {
        type: Schema.Types.ObjectId,
        ref: 'Food'
    },
    favToy: String,
},{
    timestamps: true
})

module.exports = model("Slime", slimeSchema);