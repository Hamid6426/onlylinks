"use client";

import { useState } from "react";

export default function SubscriptionBilling() {
  const [billingDetails, setBillingDetails] = useState({
    country: "US",
    city: "",
    line1: "",
    line2: "",
    postal_code: "",
    state: "",
    email: "mianhamid6426@gmail.com",
    phone: "",
  });

  const handleInputChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Subscription Section */}
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Subscription</h2>
        <div className="border-b border-gray-200 my-4"></div>
        <div className="bg-red-100 text-red-600 p-4 rounded-md">
          <p>You don't have a subscription.</p>
          <a href="https://onlylinks.com/account/checkout">
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </a>
        </div>
      </div>

      {/* Billing Details Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Billing Details</h2>
        <div className="border-b border-gray-200 my-4"></div>
        <form className="space-y-4">
          {/* Country */}
          <div>
            <label className="block text-gray-700 font-medium">Country</label>
            <select
              name="country"
              value={billingDetails.country}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="US">United States</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 font-medium">City</label>
            <input
              type="text"
              name="city"
              value={billingDetails.city}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Address Line 1 */}
          <div>
            <label className="block text-gray-700 font-medium">Line 1</label>
            <input
              type="text"
              name="line1"
              value={billingDetails.line1}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Address Line 2 */}
          <div>
            <label className="block text-gray-700 font-medium">
              Line 2 (Optional)
            </label>
            <input
              type="text"
              name="line2"
              value={billingDetails.line2}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-gray-700 font-medium">
              Postal Code
            </label>
            <input
              type="text"
              name="postal_code"
              value={billingDetails.postal_code}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-gray-700 font-medium">State</label>
            <input
              type="text"
              name="state"
              value={billingDetails.state}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={billingDetails.email}
              readOnly
              className="w-full p-2 border rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={billingDetails.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
