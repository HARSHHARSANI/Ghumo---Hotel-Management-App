import connectDB from "@/db";
import hotelModel from "@/models/hotelModel";

export default async function (req, res) {
  connectDB();

  if (req.method === "GET") {
    const hotels = await hotelModel.find({ location: req.query.location });
    // return res.status(200).json(hotels);
    if (hotels.length > 0) {
      return res.status(200).json(hotels);
    }

    const AllHotels = await hotelModel.find({});
    return res.status(200).json(AllHotels);
  }
}
