import SecTitle from "../../../Components/SecTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js"; 
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);
// console.log("Stripe promis", stripePromise);
const Payment = () => {
  return (
    <div>
      <SecTitle
        subHeading={"Please clear the payment here"}
        heading={"Payment"}
      />
      <div className="m-10 bg-gray-100 rounded-md p-4">
        <Elements stripe={stripePromise}>
          {/* CHECKOUT FORM */}
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

/**
 * install stripe and stripe react
 * create card element
 * create stripe accound and get p key
 * use p key ans use stripe to get card info and error
 */
