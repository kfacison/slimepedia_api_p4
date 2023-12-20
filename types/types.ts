import { Types } from 'mongoose';

export enum behaviorTypes{
    docile = 'docile',
    harmful = 'harmful',
    special = 'special',
    hostile = 'hostile'
}

export enum dietTypes{
    fruit = 'fruit',
    veggies = 'veggies',
    meat = 'meat',
    other = 'other'
}

export enum locationFound{
    dryReef  = 'Dry Reef',
    indigoQuarry ='Indigo Quarry',
    mossBlanket ='Moss Blanket',
    ancientRuins = 'Ancient Ruins',
    glassDesert = 'Glass Desert',
    other = 'other'
}

export interface Slime{
    name: string;
    plort: string | null;
    behavior: behaviorTypes | null | string;
    diet: dietTypes | null | string;
    location: locationFound[] | string[];
    favFood: Types.ObjectId | null | string;
    favToy: string | null;
}

export interface Food{
    name: string;
    type: dietTypes | null | string;
    location: locationFound[] | string[];
    growTime: number;
    harvetQuantity: number;
}


export type FormData = Slime | Food | string | null;