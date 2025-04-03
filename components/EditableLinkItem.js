"use client";
import React, { useState } from "react";

const EditableLinkItem = ({ link, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(link.title);
  const [url, setUrl] = useState(link.url);
  const [active, setActive] = useState(link.active);

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleSave = () => {
    setIsEditing(false);
    onUpdate({ ...link, title, url, active });
  };

  return (
    <div className="mt-4" data-id={link.id}>
      <div className="relative w-full bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
        <div className="flex items-start">
          {/* Drag Handle */}
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md mr-4 select-none" draggable="false">
          <svg className="svg-default opacity-50" focusable="false" viewBox="0 0 24 24" width="24" height="24">
              <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"></path>
            </svg>
          </div>

          {/* Editable Form */}
          <div className="flex-1">
            <form
              className="flex flex-col space-y-3"
              data-type="link"
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
            >
              {/* Title Field */}
              <div>
                {isEditing ? (
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    name="input_title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    maxLength="50"
                  />
                ) : (
                  <button type="button" className="w-full text-left" onClick={toggleEdit}>
                    <p className="text-lg font-medium text-gray-800 truncate">{title}</p>
                  </button>
                )}
              </div>
              {/* URL Field */}
              <div>
                {isEditing ? (
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    name="input_url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="URL"
                    maxLength="1000"
                  />
                ) : (
                  <button type="button" className="w-full text-left" onClick={toggleEdit}>
                    <p className="text-sm text-gray-600 truncate">{url}</p>
                  </button>
                )}
              </div>

              {/* Actions: Save/Cancel & Toggle Active */}
              {isEditing && (
                <div className="flex items-center justify-end space-x-3">
                  <button
                    type="button"
                    onClick={toggleEdit}
                    className="px-4 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                  >
                    Save
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <button type="button" className="flex items-center text-gray-600 hover:text-purple-600">
                  <i className="bx bx-share text-xl"></i>
                  <span className="ml-1 text-sm">Share</span>
                </button>
                <label className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Active</span>
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                    className="form-checkbox h-5 w-5 text-purple-600"
                  />
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Optional: Hidden Options can be placed here if needed */}
        <div className="mt-3 flex gap-2">
          <button type="button" className="flex-1 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors" onClick={() => onDelete(link.id)}>
            <i className="bx bx-trash-alt text-lg text-red-500"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditableLinkItem;
