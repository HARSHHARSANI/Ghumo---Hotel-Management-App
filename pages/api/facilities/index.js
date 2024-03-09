import connectDB from "@/db";
import hotelModel from "@/models/hotelModel";

export default async function (req, res) {
  connectDB();
  if (req.method === "GET") {
    const facilities = await hotelModel.find({}).distinct("facilities.name");
    return res.status(200).json(facilities);
  }
}
