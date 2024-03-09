import connectDB from "@/db";
import usermodel from "@/models/usermodel";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

export default async function (req, res) {
  if (req.method === "POST") {
    connectDB();
    const { email, password } = req.body;

    if ((!email, !password)) {
      return res.status(400).json({
        msg: " All fields Requried",
      });
    }

    ///now chekc if user exist
    const user = await usermodel.findOne({ email });
    if (user) {
      const matchpassword = await bcrypt.compare(password, user.password);

      if (matchpassword) {
        const token = Jwt.sign({ token: user._id }, process.env.JWT_SECRET, {
          expiresIn: "30d",
        });
        return res.status(200).json({
          message: "User Logged In Successfully",
          token,
        });
      } else {
        return res.status(400).json({
          message: "Incorrect password",
        });
      }
    } else {
      return res.status(200).json({
        message: "Please Register First",
      });
    }
  }
}
