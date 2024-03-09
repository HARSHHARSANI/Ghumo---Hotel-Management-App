import connectDB from "@/db";
import hotelModel from "@/models/hotelModel";

export default async function (req, res) {
  try {
    if (req.method === "GET") {
      connectDB();
      const key = req.query.val;
      console.log(key);
      const hotels = await hotelModel.find({ "facilities.name": { $in: key } });
      return res.status(200).json(hotels);
    }
  } catch (error) {
    console.log(error);
  }
}
