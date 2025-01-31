import { Router } from "express";
import { Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("You've made it this far eh! This is the Chat-APP server");
});

export default router;