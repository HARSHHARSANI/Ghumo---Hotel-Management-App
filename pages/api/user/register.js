import usermodel from "@/models/usermodel";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

import connectDB from "@/db";

connectDB();
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(500).json({
        error,
        msg: "All field Required",
      });
    }
    ///check if user exist
    const user = await usermodel.findOne({ email });
    if (user) {
      return res.status(200).json({
        success: true,
        msg: "User Already Exist",
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const userNew = new usermodel({
      name,
      password: hashpassword,
      email,
    });

    await userNew.save();
    const token = Jwt.sign({ token: userNew._id }, "SpirderMan", {
      expiresIn: "30d",
    });
    return res.status(200).json({
      message: "User Created Successfully",
      token,
      userNew,
    });
  }
}
