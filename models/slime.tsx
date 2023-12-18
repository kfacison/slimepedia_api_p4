import { Schema, model, Types } from 'mongoose';

enum behaviorTypes{
    docile = 'docile',
    harmful = 'harmful',
    special = 'special',
    hostile = 'hostile'
}

enum dietTypes{
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

interface Slime{
    name: string;
    plort: string;
    behavior: behaviorTypes;
    diet: dietTypes;
    location: [locationFound];
    favFood: Types.ObjectId;
    favToy: string;
}

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