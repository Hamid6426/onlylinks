"use client";
import React, { useState, useEffect } from "react";
import { getDecodedToken, getUserId } from "@/utils/decoded";
import useUserLinks from "@/utils/fetchLinks";
import PreviewPhone from "@/app/account/components/PreviewPhone";
import CreateLinkModal from "@/app/account/components/CreateLinkModal";
import DashboardWelcome from "./components/DashboardWelcome";
import LinkItem from "./components/LinkItem"; // New Import
import { handleDragStart, handleDragOver, handleDragEnd } from "@/utils/dragHandlers"; // New Import

export default function Account() {
  const { links, setLinks } = useUserLinks();
  const [decoded, setDecoded] = useState({});
  const [_userId, setUserId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [draggingIndex, setDraggingIndex] = useState(null);

  useEffect(() => {
    setDecoded(getDecodedToken());
    setUserId(getUserId());
  }, []);

  const addLink = (newLink) => {
    setLinks((prev) => [newLink, ...prev]);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <main className="flex gap-6 p-6">
      <div className="w-full">
        <DashboardWelcome />
        <button onClick={toggleModal} className="mt-4 w-full py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
          + New Link
        </button>

        {modalOpen && <CreateLinkModal closeModal={toggleModal} onLinkAdded={addLink} />}

        {links.map((link, index) => (
          <LinkItem
            key={link.id}
            link={link}
            index={index}
            draggingIndex={draggingIndex}
            handleDragStart={(e) => handleDragStart(e, index, setDraggingIndex)}
            handleDragOver={(e) => handleDragOver(e, index, draggingIndex, setLinks, setDraggingIndex)}
            handleDragEnd={() => handleDragEnd(links, setDraggingIndex)}
          />
        ))}
      </div>
      <div className="relative w-[270px]">
        <div className="fixed">
          <PreviewPhone />
        </div>
      </div>
    </main>
  );
}
