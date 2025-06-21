import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => res.send("hello World"));

export default router;
