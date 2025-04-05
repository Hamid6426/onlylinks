"use client";
import React, { useState, useEffect } from "react";
import { countries } from "../../../../lib/countries";
import { getUserId, getDecodedToken } from "@/utils/decoded";

export default function PrivateInfo() {
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    category: "",
    phone: "",
    country: countries[0],
    state: "",
    city: "",
    gender: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch existing private info on component mount
  useEffect(() => {
    const fetchPrivateInfo = async () => {
      try {
        const userId = getUserId();
        if (!userId) throw new Error("User not authenticated");

        const token = localStorage.getItem("token");
        if (!token) throw new Error("No authentication token found");

        const response = await fetch("/api/user/get-private-info", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch private info");
        }

        const { data } = await response.json();

        if (data) {
          const country = countries.find((c) => c.name === data[0].country) || "Not Submitted";
          const phoneWithoutCode = data[0].phone?.replace(country.dial_code, "") || "";

          setFormData({
            category: data[0].category || "",
            phone: phoneWithoutCode,
            country: data[0].country,
            state: data[0].state || "",
            city: data[0].city || "",
            gender: data[0].gender || "",
          });
        }
      } catch (error) {
        console.error("Error fetching private info:", error);
        setSubmitStatus({
          type: "error",
          message: "Failed to load private information",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrivateInfo();
    setUserId(getUserId());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectCountry = (country) => {
    setFormData(prev => ({ ...prev, country }));
    setDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/user/private-info", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          privateInfo: {
            category: formData.category,
            phone: `${formData.country.dial_code}${formData.phone}`,
            country: formData.country.name,
            state: formData.state,
            city: formData.city,
            gender: formData.gender,
          },
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          type: "success", 
          message: "Private info updated successfully!" 
        });
      } else {
        throw new Error(data.error || "Failed to update private info");
      }
    } catch (error) {
      setSubmitStatus({ 
        type: "error", 
        message: error.message 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="border border-gray-200 shadow-md p-6 rounded-md w-full mb-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 shadow-md p-6 rounded-md w-full mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Private Info</h2>
      <div className="border-b border-gray-200 mb-4" />

      <form onSubmit={handleSubmit}>
        {/* Status Message */}
        {submitStatus && (
          <div className={`mb-4 p-3 rounded-md ${
            submitStatus.type === "success" 
              ? "bg-green-100 text-green-800" 
              : "bg-red-100 text-red-800"
          }`}>
            {submitStatus.message}
          </div>
        )}

        {/* Category Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select Category</option>
            <option value="Model">Model</option>
            <option value="Public Figure">Public Figure</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Country Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Country</label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex justify-between items-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <span>{formData.country.name}</span>
              <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {countries.map((country, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectCountry(country)}
                    className="cursor-pointer hover:bg-gray-100 p-3"
                  >
                    {country.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* State Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">State/Province</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* City Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Phone Field with Country Code */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Phone</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 rounded-l-md">
              {formData.country.dial_code}
            </span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="flex-1 p-2 border rounded-r-md focus:ring-2 focus:ring-purple-500"
              placeholder="Phone number"
              required
            />
          </div>
        </div>

        {/* Gender Radio Buttons */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Gender</label>
          <div className="flex items-center space-x-4">
            {["Male", "Female", "Other"].map((genderOption) => (
              <label key={genderOption} className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value={genderOption}
                  checked={formData.gender === genderOption}
                  onChange={handleInputChange}
                  className="mr-2"
                  required
                />
                <span>{genderOption}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-md text-white font-medium ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-600 hover:bg-purple-500 transition-colors"
          }`}
        >
          {isSubmitting ? "Saving..." : "Save Private Info"}
        </button>
      </form>
    </div>
  );
}