import { Router } from "express";
import asyncHandler from "express-async-handler";

const router  = Router()

import { signin } from "../controller/user.controllers.js";
router.route("/signin").post(asyncHandler(signin));
export default router;