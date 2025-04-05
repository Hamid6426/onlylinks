  "use client";
  import React, { useState } from "react";
  import { jwtDecode } from "jwt-decode";

  const CreateLinkModal = ({ closeModal, onLinkAdded }) => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleAddLink = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");

      try {
        // Get the token from localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("User token not found. Please log in again.");
        }

        // Decode the token to extract the user id
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded);
        const user_id = decoded.user_id;
        if (!user_id) {
          throw new Error("User id not found in token.");
        }

        const response = await fetch("/api/links/create-link", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          // Include the user_id in the payload
          body: JSON.stringify({ title, url, user_id }),
        });

        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error || "Failed to create link");
        }
        // Assuming the API returns an array with the new link as the first element
        console.log("API result:", result);
          onLinkAdded(result.data[0]);
        closeModal();
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-5 rounded shadow-lg w-full max-w-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Add New Link</h2>
            <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
              &times;
            </button>
          </div>
          <form onSubmit={handleAddLink} className="mt-4 bg-white z-50">
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label className="block text-sm font-medium mt-3">URL</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-2 mt-4 rounded hover:bg-gray-700"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Link"}
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default CreateLinkModal;
