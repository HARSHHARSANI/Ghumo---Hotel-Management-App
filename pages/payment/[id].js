import axios from "axios";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

const Payments = () => {
  const router = useRouter();

  const makePayment = async () => {
    const val = {
      id: router.query?.id,
    };
    const { data } = await axios.post("/api/razorpay", val);
    console.log(data);

    const options = {
      key: process.env.RAZORPAY_KEY,
      name: "Harsh",
      currency: data.currency,
      amount: parseInt(data.amount),
      order_id: data.id,
      description: "Thank You",
      handler: function (response) {},
      prefilled: {
        name: "Aditya",
        email: "harshharsani007@gmail.com",
        contact: 7489685838,
      },
    };

    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
  };

  useEffect(() => {
    makePayment();
  }, []);

  return (
    <>
      <Script src="http://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
};

export default Payments;
