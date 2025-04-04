"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { countries } from "../../../../lib/countries";
import { getUserId } from "@/utils/decoded";

export default function BillingInfo() {
  const [billingDetails, setBillingDetails] = useState({
    country: `${countries[186].name}`,
    country_code: `${countries[186].code}`,
    city: "",
    line1: "",
    line2: "",
    postal_code: "",
    state: "",
    email: "",
    phone: `${countries[186].dial_code}`, // US at +1
  });

  // fetch existing billing info on component mount
  useEffect(() => {
    const fetchBillingInfo = async () => {
      try {
        const userId = getUserId();
        if (!userId) throw new Error("User not authenticated");

        const token = localStorage.getItem("token");
        if (!token) throw new Error("No authentication token found");

        const response = await fetch("/api/billing/get-billing-info", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch billing info");
        }

        const { data } = await response.json();

        if (data && data.length > 0) {
          const existingData = data[0];
          const country = countries.find((c) => c.code === existingData.country_code) || defaultCountry;

          setBillingDetails({
            country: existingData.country || country.name,
            country_code: existingData.country_code || country.code,
            city: existingData.city || "",
            line1: existingData.line1 || "",
            line2: existingData.line2 || "",
            postal_code: existingData.postal_code || "",
            state: existingData.state || "",
            email: existingData.email || getDecodedToken()?.email || "",
            phone: existingData.phone || country.dial_code,
          });
        }
      } catch (error) {
        console.error("Error fetching billing info:", error);
        setSubmitStatus({
          type: "error",
          message: "Failed to load billing information",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchBillingInfo();
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleCountryChange = (e) => {
    const selectedCode = e.target.value;
    const selectedCountry = countries.find((c) => c.code === selectedCode) || countries[0];
    setBillingDetails({
      ...billingDetails,
      country_code: selectedCountry.code,
      country: selectedCountry.name,
    });
  };

  const handleInputChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const userId = getUserId();
      if (!userId) throw new Error("User not authenticated");

      const response = await fetch("/api/billing/save-billing-info", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          ...billingDetails,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Update failed");
      }

      alert("Billing info updated successfully!");
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 shadow-md p-6 mb-6 rounded-md w-full">
      {/* Subscription Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Subscription</h2>
        <div className="border-b border-gray-200 my-4"></div>
        <div className="p-4 flex items-center justify-between bg-red-100 border border-red-400 text-red-700 rounded">
          <p>You don&apos;t have a subscription</p>
          <Link className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-purple-500" href="/account/billing">
            Subscribe
          </Link>
        </div>
      </div>

      {/* Billing Details Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Billing Details</h2>
        <div className="border-b border-gray-200 my-4"></div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Country */}
            <div>
              <label className="block text-gray-700 font-medium">Country</label>
              <select
                name="country_code"
                value={billingDetails.country_code}
                onChange={handleCountryChange}
                className="w-full p-2 border rounded-md"
                required
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={billingDetails.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
              />
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

            {/* Postal Code */}
            <div>
              <label className="block text-gray-700 font-medium">Postal Code</label>
              <input
                type="text"
                name="postal_code"
                value={billingDetails.postal_code}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
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
          </div>

          {/* Address Lines */}
          <div>
            <label className="block text-gray-700 font-medium">Address</label>
            <div className="space-y-2">
              <input
                type="text"
                name="line1"
                value={billingDetails.line1}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                placeholder="Line 1"
              />
              <input
                type="text"
                name="line2"
                value={billingDetails.line2}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                placeholder="Line 2 (Optional)"
              />
            </div>
          </div>

          {/* Update Button */}
          <button type="submit" onClick={handleSubmit} className="w-full bg-gray-600 text-white p-2 rounded-md">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
