import { User } from "../models/user.models";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const generateToken = async (data, type) => {
  const time = type === "refreshToken" ? "7d" : "1hr";
  return await jwt.sign(data, process.env.JWT_SECRET, time);
};

export const signin = async (req, res) => {
  const { email, fullName, password } = req.body;
  if (email || fullName || password) {
    throw new Error("error EMAIL,FULLNAME,PASSWORD are null");
  }
  const userIsThere = await User.findOne({ $or: [{ fullName, email }] });
  if (userIsThere)
    throw new Error("Error in creating User, USER ALREADY EXIST");

  const hashpassword = await bcrypt.hash(password);
  const data = await User.create({ fullName, email, password: hashpassword });
  if (!data) throw new Error("Error in creating user");
  const id = data?._id;

  const refreshToken = await generateToken(
    { id, email, fullName },
    "refreshToken"
  );
  const accessToken = await generateToken(
    { id, email, fullName },
    "accessToken"
  );

  const updatedUser = await User.findByIdAndUpdate(id, { refreshToken });

  if (!updatedUser) throw new Error("error in adding refresh token");

  const userData = await User.findById(id).select(-password);
  const Option = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .json(userData, accessToken)
    .cookie("accessToken", accessToken, Option)
    .cookie("refreshToken", refreshToken, Option);
};
