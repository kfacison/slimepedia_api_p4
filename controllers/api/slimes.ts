import { Request, Response } from "express";
import Slime from "../../models/slime";
import Food from "../../models/food";
import * as Types from "../../types/types";

export async function getAll(req: Request, res: Response): Promise<void> {
    try {
        const profiles = await Slime.find({});
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).send("Failed to return all profiles");
    }
}


export async function deleteSlime(req: Request<{id: string}>, res: Response): Promise<void> {
    try {
        const slimeInfo = await Slime.findOne({ _id: req.params.id });
        const allSlimes = await Slime.updateMany({});
        await Slime.findOneAndDelete({ _id: req.params.id });
        res.json(allSlimes);
    } catch (error) {
        res.status(500).json(error);
    }
}

//make Types.Slime

// export async function update(req: Request, res: Response): Promise<void> {
//     try {
//         const slime:Types.Slime | null = await Slime.findOne({ _id: req?._id });
        
//         slime?.name = req.body.name || slime.name || null;
//         slime?.plort = req.body.plort || slime.plort;
//         slime?.behavior = req.body.behavior || slime.behavior;
//         slime?.diet = req.body.diet || slime.diet;
//         slime?.location = req.body.location || slime.location;
//         slime?.favFood = req.body.favFood || slime.favFood;
//         slime?.favToy = req.body.favToy || slime.favToy;
        
//         await slime.save();
//         res.json(slime);
//     } catch (error) {
//         res.status(500).send("Error updating slime");
//     }
// }

export async function getSlime(req: Request<{id: string}> , res: Response): Promise<void> {
    try {

        const slime = await Slime.findOne({ _id: req.params.id }).populate('food');

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