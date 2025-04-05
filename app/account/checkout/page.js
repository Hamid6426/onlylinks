// @/app/account/CheckOutPage.js
"use client"; // Ensures this page is client-side rendered

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "@/components/CheckOutForm";

// Load your Stripe public key
const stripePromise = loadStripe("your-public-key-here");

const CheckOutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm />
    </Elements>
  );
};

export default CheckOutPage;
