import express,{ Router } from "express";
import * as slimeCtrl from "../../controllers/api/slimes";
import { Request, Response } from "express";

const router: Router = express.Router();

//ROUTES FOR SLIMES
// GET /api/slimes/:id -- Gets slime info
router.get("/:id", slimeCtrl.getSlime);

// GET /api/slimes -- Gets all slimes
router.get("/", slimeCtrl.getAll);

// POST /api/slimes/ -- Create new slime
router.post("/", slimeCtrl.createSlime);

// PUT /api/slimes/:id -- Update slime
// router.put("/:id",slimeCtrl.update);

// DELETE /api/slimes/:id -- Delete slime
router.delete("/:id", slimeCtrl.deleteSlime);

export default router;