// @/components/CheckOutForm.js
"use client"; // Tell Next.js to run this on the client side

import { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("monthly"); // Default to "monthly"
  const [totalPrice, setTotalPrice] = useState("$0");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch client secret from server when the component mounts
  useEffect(() => {
    fetch("/api/billing/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: selectedPlan === "monthly" ? 1000 : 10000 }), // Monthly plan = $10, Yearly plan = $100
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [selectedPlan]);

  const handlePlanChange = (interval) => {
    setSelectedPlan(interval);
    setTotalPrice(interval === "monthly" ? "$0 / month (Free For 30 Days)" : "$100 / year");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    // Confirm the payment
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/account/payment-success`,
      },
    });

    setIsSubmitting(false);

    if (error) {
      console.error("Payment error:", error);
    } else if (paymentIntent.status === "succeeded") {
      console.log("Payment succeeded:", paymentIntent);
      // Handle success (e.g., navigate to success page)
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <form id="stripe-form" method="post" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-3">
            <div className="text-xl font-semibold">Subscribe</div>
            <div className="flex space-x-4">
              <div
                className={`cursor-pointer ${selectedPlan === "monthly" ? "text-purple-500 font-bold" : ""}`}
                onClick={() => handlePlanChange("monthly")}
              >
                Monthly
              </div>
              <div
                className={`cursor-pointer ${selectedPlan === "yearly" ? "text-purple-500 font-bold" : ""}`}
                onClick={() => handlePlanChange("yearly")}
              >
                Yearly
              </div>
            </div>
          </div>

          {/* Subscription Plan */}
          <div className="mt-1">
            <input
              className="hidden"
              type="radio"
              id="plan-1"
              name="plan"
              value="monthly"
              checked={selectedPlan === "monthly"}
              onChange={() => handlePlanChange("monthly")}
            />
            <label
              className="block mb-2 text-sm"
              htmlFor="plan-1"
            >
              Subscription <s>$10.00</s> <span className="text-red-500">Free For 30 Days</span>
            </label>

            <input
              className="hidden"
              type="radio"
              id="plan-2"
              name="plan"
              value="yearly"
              checked={selectedPlan === "yearly"}
              onChange={() => handlePlanChange("yearly")}
            />
            <label
              className="block mb-2 text-sm"
              htmlFor="plan-2"
            >
              Subscription $100.00 / year
            </label>
          </div>

          {/* Billing Details */}
          <div className="mt-4">
            <div className="text-lg font-semibold mb-2">Billing details</div>
            <div className="space-y-4">
              {/* Form Fields for billing details */}
              {/* Country, City, Postal code, etc */}
            </div>
          </div>

          {/* Card Details */}
          <div className="mt-4">
            <label className="block text-sm font-medium">Card details</label>
            <div className="mt-1">
              <PaymentElement />
            </div>
          </div>

          {/* Total */}
          <div className="mt-4 flex justify-between items-center">
            <span>Total</span>
            <span className="font-semibold text-lg">{totalPrice}</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full mt-6 p-3 rounded-md bg-purple-600 text-white font-semibold ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? <div className="animate-spin">⏳</div> : "Proceed payment"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default CheckOutForm;
