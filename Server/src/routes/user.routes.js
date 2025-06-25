import { Router } from "express";
import asyncHandler from "express-async-handler";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

import { signin } from "../controller/user.controllers.js";
import { login } from "../controller/user.controllers.js";
router.route("/signin").upload.single("avatar").post(asyncHandler(signin));
router.route("/login").post(asyncHandler(login));
export default router;
