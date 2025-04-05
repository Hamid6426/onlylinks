"use client";
import React, { useState, useEffect } from "react";
import { getDecodedToken, getUserId } from "@/utils/decoded";
import { MdDragIndicator } from "react-icons/md";
import useUserLinks from "@/utils/fetchLinks";
import PreviewPhone from "@/app/account/components/PreviewPhone";
import CreateLinkModal from "@/app/account/components/CreateLinkModal";
import ShareLinkButton from "@/app/account/components/ShareLinkButton";
import DashboardWelcome from "./components/DashboardWelcome";

export default function Account() {
  const { links, setLinks, error, loading } = useUserLinks(); // Now we have access to setLinks
  const [decoded, setDecoded] = useState({});
  const [_userId, setUserId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [draggingIndex, setDraggingIndex] = useState(null);

  // Initialize on client side
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

  const handleDragStart = (e, index) => {
    console.log(`Drag started for index: ${index}`);
    setDraggingIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    console.log("Drag over event");
  };

  const handleDrop = (e, toIndex) => {
    e.preventDefault();
    const fromIndex = Number(e.dataTransfer.getData("text/plain"));
    console.log(`Dropped from index: ${fromIndex} to index: ${toIndex}`);
    if (fromIndex === toIndex) return;

    const updated = [...links];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setLinks(updated); // <-- Using setLinks to update the list
    setDraggingIndex(null);
  };

  const handleDragEnd = () => {
    console.log("Drag ended");
    setDraggingIndex(null);
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
          <div
            key={link.id} // Stable key
            className="w-full h-40 border-2 border-gray-200 rounded-lg mt-4 flex items-center"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
          >
            <div className="h-full flex items-center justify-center border-r-2 border-gray-100">
              <MdDragIndicator className="w-8 h-8 text-gray-700 mx-2" style={{ cursor: "move" }} />
            </div>
            <div className="w-full h-full flex flex-col justify-start items-start">
              <div className="p-4 h-28 text-gray-800">
                <div className="text-2xl font-bold mb-3">{link.title}</div>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 text-xl">
                  {link.url}
                </a>
              </div>
              <div className="h-12 w-full flex justify-between items-center px-2 gap-2 border-gray-100 border-t-2">
                <ShareLinkButton />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-[240px]">
        <div className="fixed">
          <PreviewPhone />
        </div>
      </div>
    </main>
  );
}
