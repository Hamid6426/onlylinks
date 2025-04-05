"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.category) tempErrors.category = "Category is required";
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("/api/contact/post-contact-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSuccess(true);
          setFormData({ category: "", name: "", email: "", message: "" });
          setTimeout(() => setSuccess(false), 3000);
        } else {
          const result = await response.json();
          setErrors({ submit: result.error });
        }
      } catch (error) {
        setErrors({ submit: "An unexpected error occurred." });
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center">Contact Us</h2>
      <p className="text-gray-600 text-center mt-2">
        Please fill out the form below, and our team will get back to you as fast as possible!
      </p>

      <form onSubmit={handleSubmit} className="mt-6">
        {/* Category */}
        <div className="mb-4">
          <label className="block font-medium">Category</label>
          <select
            className={`w-full mt-1 p-2 border ${errors.category ? "border-red-500" : "border-gray-300"} rounded`}
            name="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="">Select category</option>
            <option value="General inquiry">General inquiry</option>
            <option value="Report">Report</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block font-medium">Your Name</label>
          <input
            type="text"
            className={`w-full mt-1 p-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded`}
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-medium">Your Email Address</label>
          <input
            type="email"
            className={`w-full mt-1 p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded`}
            placeholder="Your Email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block font-medium">Message</label>
          <textarea
            className={`w-full mt-1 p-2 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded`}
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-gray-600 text-white p-2 rounded hover:bg-purple-500">
          Send
        </button>
      </form>

      {/* Success Message */}
      {success && (
        <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-500 rounded">
          <p>Success! Your request has been received.</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
