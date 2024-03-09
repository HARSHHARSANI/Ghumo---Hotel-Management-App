import connectDB from "@/db";
import hotelModel from "@/models/hotelModel";

export default async function (req, res) {
  try {
    if (req.method === "GET") {
      connectDB();
      console.log("request params", req.query.id);
      if (req.query.id) {
        const hotel = await hotelModel.findById(req.query.id);

        return res.status(200).json(hotel);
      }
    }
  } catch (error) {
    return res.status(400).json(error);
  }
}
