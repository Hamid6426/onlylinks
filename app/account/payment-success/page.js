"use client";

import { useEffect, useState } from "react";

const PaymentSuccess = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    // Retrieve the payment status from the URL or your server
    const status = new URLSearchParams(window.location.search).get("status");
    setPaymentStatus(status);
  }, []);

  return (
    <div>
      <h1>Payment {paymentStatus}</h1>
      {/* Display additional payment details here */}
    </div>
  );
};

export default PaymentSuccess;
