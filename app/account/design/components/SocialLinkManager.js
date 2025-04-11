"use client";
import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const iconMap = {
  instagram: <FaInstagram size={20} />,
  facebook: <FaFacebookF size={20} />,
  twitter: <FaTwitter size={20} />,
  linkedin: <FaLinkedin size={20} />,
};

const SocialLinksManager = () => {
  const [socialIcons, setSocialIcons] = useState([
    { id: 1, icon: "instagram", url: "https://insta.com" },
    { id: 2, icon: "facebook", url: "https://facebook.com" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newPlatform, setNewPlatform] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const handleDelete = (id) => {
    setSocialIcons(socialIcons.filter((icon) => icon.id !== id));
  };

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setNewPlatform("");
    setNewUrl("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPlatform || !newUrl) return;

    const newId = Date.now(); // Simple unique id
    setSocialIcons([...socialIcons, { id: newId, icon: newPlatform, url: newUrl }]);
    handleClose();
  };

  return (
    <div className="relative">
      {/* Social Icons List */}
      <div className="social-icons-content ui-sortable">
        {socialIcons.map(({ id, icon, url }) => (
          <div key={id} className="mt-3 social-div" data-id={id} data-position="-1">
            <div className="form-group">
              <div className="input-group flex items-center gap-3">
                <div style={{ cursor: "grab" }} className="opacity-50">
                  ⋮⋮
                </div>
                <div>{iconMap[icon]}</div>
                <input
                  type="text"
                  className="form-control input-url flex-1"
                  value={url}
                  placeholder="URL"
                  readOnly
                  data-test-id={id}
                />
                <button
                  type="button"
                  onClick={() => handleDelete(id)}
                  className="py-1 px-2 text-red-600 hover:text-red-800"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Button */}
      <div className="mt-5 flex justify-center">
        <button
          onClick={handleAddClick}
          className="px-4 mb-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          + Add Social
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-md shadow-lg w-full max-w-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Add Social Link</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Platform</label>
                <select
                  value={newPlatform}
                  onChange={(e) => setNewPlatform(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                >
                  <option value="">Select a platform</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="twitter">Twitter</option>
                  <option value="linkedin">LinkedIn</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">URL</label>
                <input
                  type="url"
                  placeholder="https://your-profile.com"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialLinksManager;
