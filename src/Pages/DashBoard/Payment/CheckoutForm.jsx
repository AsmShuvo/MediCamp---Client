import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import useCarts from "./../../../hooks/useCart";
import { AuthContext } from "../../../Providers/AuthProvider";

const CheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [carts] = useCarts();
  const myCart =
    carts?.filter((cart) => cart.participant_email === user?.email) || [];
  console.log(myCart.length);

  const totalPrice = myCart?.reduce((total, item) => {
    if (item && item.campFee) {
      return total + parseFloat(item.campFee);
    }
    return total;
  }, 0);
  console.log(totalPrice);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
    }
    // confirm payment:
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymus",
            name: user?.displayName || "anonymus",
          },
        },
      });
    if (confirmError) {
      console.log("Confirm error");
    } else {
      console.log("Payment intent", paymentIntent);
      if (paymentIntent.status == "succeeded") {
        console.log("TRX UD", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        // save payment to db
        const payment = {
          email: user?.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert needed, momentJs
          cartIds: myCart.map((item) => item._id),
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="btn btn-sm btn-primary my-4"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600 p-1">{error}</p>
      {transactionId && (
        <p className="text-green-600">TRX ID: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
