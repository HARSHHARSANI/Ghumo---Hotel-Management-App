import connectDB from "@/db";
import hotelModel from "@/models/hotelModel";
import Razorpay from "razorpay";
import shortid from "shortid";

export default async function (req, res) {
  if (req.method === "POST") {
    connectDB();
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const hotel = await hotelModel.findById(req.body.id); // Use findById instead of find

    if (!hotel) {
      return res.status(404).json({ error: "Hotel not found" });
    }

    const amount = parseInt(hotel.price);

    if (isNaN(amount)) {
      return res.status(400).json({ error: "Invalid price for hotel" });
    }

    const options = {
      amount: amount * 100, // Convert to the smallest currency unit (in paisa for INR)
      currency: "INR",
      receipt: shortid.generate(),
      payment_capture: 1,
    };

    try {
      const result = await razorpay.orders.create(options);
      console.log(result);
      res.status(201).json({
        id: result.id,
        currency: result.currency,
        amount: result.amount,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
