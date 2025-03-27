"use client";
import React, { useState } from "react";
import { countries } from "../../../../lib/countries";

export default function PrivateInfo() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [city, setCity] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission (e.g., send data to an API)
    console.log({ selectedCountry, category, city, stateValue, gender });
  };

  return (
    <div className="border border-gray-200 shadow-md p-6 rounded-md w-full mb-6">
      {/* Profile Title */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Private Info</h2>
      <div className="border-b border-gray-200 mb-4" />

      <form onSubmit={handleSubmit} method="post">
        {/* Country Dropdown */}
        <div className="mx-auto pt-4">
          <label className="block mb-1">Country</label>
          <div className="relative">
            <button
              type="button"
              onClick={toggleDropdown}
              className="w-full flex justify-between items-center border border-gray-300 rounded-md p-2 focus:outline-none"
            >
              <span>
                {selectedCountry.name} ({selectedCountry.dial_code})
              </span>
              <svg
                className="h-5 w-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md max-h-60 overflow-auto z-10">
                {countries.map((country, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectCountry(country)}
                    className="cursor-pointer hover:bg-gray-100 p-3"
                  >
                    {country.name} ({country.dial_code})
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Category Field */}
        <div className="mt-3">
          <label className="block mb-1" htmlFor="category">
            Category
          </label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select Category</option>
            <option value="model">Model</option>
            <option value="public_figure">Public figure</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* City Field */}
        <div className="mt-3">
          <label className="block mb-1" htmlFor="city">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* State Field */}
        <div className="mt-3">
          <label className="block mb-1" htmlFor="state">
            State
          </label>
          <input
            type="text"
            name="state"
            id="state"
            value={stateValue}
            onChange={(e) => setStateValue(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Gender Radio Buttons */}
        <div className="mt-3">
          <label className="block mb-1">Gender</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
                id="gender0"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
                id="gender1"
              />
              <span>Female</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="other"
                checked={gender === "other"}
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
                id="gender2"
              />
              <span>Other</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-3 w-full bg-gray-600 text-white rounded-md p-3 hover:bg-purple-500 focus:outline-none"
        >
          Save
        </button>
      </form>
    </div>
  );
}
