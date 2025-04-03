"use client";
import React, { useState, useEffect } from "react";
import EditableLinkItem from "./EditableLinkItem"; // adjust import as necessary
import NewLinkModal from "./NewLinkModal";

const LinksContent = () => {
  const [links, setLinks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  // Fetch the user's links on component mount
  useEffect(() => {
    const fetchLinks = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("User not authenticated");
        }
        const response = await fetch("/api/links/get-user-links", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch links");
        }
        setLinks(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  const addLink = (newLink) => {
    setLinks((prev) => [newLink, ...prev]);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4">My Links</h2>
      <button
        onClick={toggleModal}
        className="w-full py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
      >
        + New Link
      </button>

      {modalOpen && (
        <NewLinkModal closeModal={toggleModal} onLinkAdded={addLink} />
      )}

      {loading && <p>Loading links...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && links.length === 0 && <p>No links found.</p>}
      <div className="space-y-3">
        {links.map((link) => (
          <EditableLinkItem
            key={link.id}
            link={link}
            // For now, disable editing/updating by providing no-op functions.
            onUpdate={() => {}}
            onDelete={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default LinksContent;
