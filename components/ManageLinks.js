"use client";
import React, { useState, useEffect } from "react";
import EditableLinkItem from "../app/account/components/EditableLinkItem"; // adjust import as necessary
import useUserLinks from "@/utils/fetchLinks";

const ManageLinks = () => {
  const { links, error, loading } = useUserLinks();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4">My Links</h2>
      {links.length === 0 && <p>No links found.</p>}
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

export default ManageLinks;
