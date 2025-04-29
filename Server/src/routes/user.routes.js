import { Router } from "express";
import asyncHandler from "express-async-handler";

const router  = Router()

import {login, sigin} from '../controller/user.controllers.js'
router.route("/login").post(asyncHandler(login))
router.route("/signin").get(  asyncHandler(sigin))
export default router;