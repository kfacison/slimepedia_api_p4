import { Schema, model } from 'mongoose';

enum foodTypes{
    fruit = 'fruit',
    veggies = 'veggies',
    meat = 'meat',
    other = 'other'
}

enum locationFound{
    dryReef  = 'Dry Reef',
    indigoQuarry ='Indigo Quarry',
    mossBlanket ='Moss Blanket',
    ancientRuins = 'Ancient Ruins',
    glassDesert = 'Glass Desert',
    other = 'other'
}

interface Food{
    name: string;
    type: foodTypes;
    location: [locationFound];
    growTime: number;
    harvetQuantity: number;
}

const foodSchema = new Schema<Food>({
    name: { 
        type: String, 
        required: true 
    },
    type: {
        type: String, 
        enum: foodTypes
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