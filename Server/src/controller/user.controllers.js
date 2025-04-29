import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const generateToken = async (data, type) => {
  const time = type === "refreshToken" ? "7d" : "1hr";
  return await jwt.sign(data, process.env.JWT_SECRET, { expiresIn: time });
};

export const signin = async (req, res) => {
  const { email, fullName, password } = req.body;
  if (!email || !fullName || !password)
    return res
      .status(400)
      .json({ error: "Email OR FullName OR Password is Null" });
  const isUser = await User.findOne({ email });
  if (isUser)
    return res.status(400).json({ error: "Email is Already in User" });
  const hashpassword = await bcrypt.hash(password, 10);
  const data = await User.create({ fullName, email, password: hashpassword });
  if (!data) return res.status(400).json({ error: "Error in created User" });
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

  const userData = await User.findById(id).select("-password ");
  const Option = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .json({ userData, accessToken })
    .cookie("accessToken", accessToken, Option)
    .cookie("refreshToken", refreshToken, Option);
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw res.status(400).json({ error: "Email or Password in null" });

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "Error in finding User" });
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect)
    return res.status(400).json({ error: "Credentials are not Valid" });

  const id = user._id
  const fullName = user.fullName
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

  const userData = await User.findById(id).select("-password  ");
  const Option = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .json({ userData, accessToken })
    .cookie("accessToken", accessToken, Option)
    .cookie("refreshToken", refreshToken, Option);
};
