import { Router } from "express";
import asyncHandler from "express-async-handler";

const router = Router();

import { signin } from "../controller/user.controllers.js";
import { login } from "../controller/user.controllers.js";
router.route("/signin").post(asyncHandler(signin));
router.route("/login").post(asyncHandler(login));
export default router;
