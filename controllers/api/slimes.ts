import { Request, Response } from "express";
import Slime from "../../models/slime";
import Food from "../../models/food";
import * as Types from "../../types/types";

export async function getAllSlime(req: Request, res: Response): Promise<void> {
    try {
        const allSlimesInfo = await Slime.find({},{_id:1, name:1});
        // console.log(allSlimesInfo);
        res.status(200).json(allSlimesInfo);
    } catch (error) {
        res.status(500).send("Failed to return all slimes");
    }
}


export async function deleteSlime(req: Request<{id: string}>, res: Response): Promise<void> {
    try {
        const slimeInfo = await Slime.findOneAndDelete({ _id: req.params.id });
        res.json(slimeInfo);
    } catch (error) {
        res.status(500).json(error);
    }
}

//make Types.Slime

export async function updateSlime(req: Request, res: Response): Promise<void> {
    try {
        // console.log(req.body)
        // const slime:Types.Slime | null = await Slime.findOneAndUpdate({ _id: req?.params._id }, req.body);
        const editSlime = await Slime.findOne({ _id: req?.params.id });
        // console.log(editSlime)
        
        editSlime!.name = req.body.name;
        editSlime!.plort = req.body.plort;
        editSlime!.behavior = req.body.behavior;
        editSlime!.diet = req.body.diet;
        editSlime!.location = req.body.location;
        editSlime!.favFood = req.body.favFood;
        editSlime!.favToy = req.body.favToy;
        
        const FF = await Food.findOne({name: req.body.favFood});
        if (FF){
            editSlime!.favFood = FF._id;
        }
        else{
            editSlime!.favFood = null;
        }

        await editSlime!.save();
        res.json(editSlime);
    } catch (error) {
        res.status(500).send("Error updating slime");
    }
}

export async function getSlime(req: Request<{id: string}> , res: Response): Promise<void> {
    try {

        const slime = await Slime.findOne({ _id: req.params.id });
        // const slime = await Slime.findOne({ _id: req.params.id }).populate('food');
        // console.log(slime)
        res.json(slime);

    } catch (error) {
        res.status(500).send("Error fetching slime");
    }
}

export async function createSlime(req: Request, res: Response): Promise<void> {
    try {
        const newSlime = new Slime({
        
            name: req.body.name,
            plort: req.body.plort,
            behavior: req.body.behavior,
            diet: req.body.diet,
            location: req.body.location,
            favToy: req.body.favToy
        
        });

        const FF = await Food.findOne({name: req.body.favFood});
        if (FF){
            newSlime.favFood = FF._id;
        }
        else{
            newSlime.favFood = null;
        }

        await newSlime.save();
        res.json(newSlime);
    } catch (error) {
        res.status(500).send(`Failed to create slime. ${error}`);
    }
}