import connectDB from "@/db";
import hotelModel from "@/models/hotelModel";

export default async function (req, res) {
  try {
    if (req.method === "GET") {
      connectDB();
      const hotels = await hotelModel.find({
        price: { $lte: req.query.price },
      });

      return res.status(200).json(hotels);
    }
  } catch (error) {
    console.log(error);
  }
}
