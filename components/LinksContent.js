"use client";
import React, { useState } from "react";

// Parent Component
const LinksContent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [links, setLinks] = useState([
    {
      id: 14863,
      title: "facebook",
      url: "https://facebook.com/hamid6426",
      active: true,
    },
  ]);

  const toggleModal = () => setModalOpen(!modalOpen);

  const updateLink = (updatedLink) => {
    setLinks((prev) =>
      prev.map((link) => (link.id === updatedLink.id ? updatedLink : link))
    );
  };

  const deleteLink = (id) => {
    setLinks((prev) => prev.filter((link) => link.id !== id));
  };

  return (
    <div className="mt-4">
      <button
        className="w-full flex items-center justify-center py-2 bg-gray-600 text-white rounded hover:bg-purple-500"
        onClick={toggleModal}
      >
        + New Link
      </button>

      {/* New Link Modal */}
      {modalOpen && <NewLinkModal closeModal={toggleModal} />}

      {/* List of Links */}
      <div className="mt-3 space-y-3">
        {links.map((link) => (
          <EditableLinkItem
            key={link.id}
            link={link}
            onUpdate={updateLink}
            onDelete={deleteLink}
          />
        ))}
      </div>
    </div>
  );
};

// New Link Modal
const NewLinkModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Add New Link</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Title"
          />
          <label className="block text-sm font-medium mt-3">URL</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="URL"
          />
          <button className="w-full bg-gray-600 text-white py-2 mt-4 rounded hover:bg-gray-700">
            Add Link
          </button>
        </div>
      </div>
    </div>
  );
};

// Editable Link Item Component
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
    <div className="mt-3 ui-le ui-sortable" data-id={link.id}>
      <div className="ui-li-container relative w-full bg-gray-50 p-3 rounded shadow-sm">
        <div className="flex">
          {/* Drag Handle */}
          <div
            className="flex items-center justify-center w-10 h-auto drag select-none"
            draggable="false"
          >
            <svg
              className="svg-default opacity-50"
              focusable="false"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"></path>
            </svg>
          </div>
          {/* Editable Form */}
          <div className="flex-1 ui-li-padding h-full relative">
            <form
              className="form-form flex flex-row w-full"
              data-type="link"
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
            >
              {/* Title Field */}
              <div className="w-full flex-1">
                <div className="grid mb-3 w-full grid-block">
                  {isEditing ? (
                    <div className="block-edit-content">
                      <div className="relative grid-block-content">
                        <input
                          type="text"
                          className="w-full h-5 text-sm border p-1 outline-none block-edit-input font-semibold"
                          name="input_title"
                          data-name="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Title"
                          maxLength="50"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="row-start-1 col-start-1 inline-flex justify-center block-edit-btn-content">
                      <button
                        type="button"
                        className="block-edit-btn-btn focus:outline-none"
                        onClick={toggleEdit}
                      >
                        <p className="text-black text-sm text-ellipsis max-w-full whitespace-nowrap overflow-hidden font-semibold" data-test-name="title">
                          {title}
                        </p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {/* URL Field */}
              <div className="w-full flex-1">
                <div className="grid mb-3 w-full grid-block">
                  {isEditing ? (
                    <div className="block-edit-content">
                      <div className="relative grid-block-content">
                        <input
                          type="text"
                          className="w-full h-5 text-sm border p-1 outline-none block-edit-input"
                          name="input_url"
                          data-name="url"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          placeholder="URL"
                          maxLength="1000"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="row-start-1 col-start-1 inline-flex justify-center block-edit-btn-content">
                      <button
                        type="button"
                        className="block-edit-btn-btn focus:outline-none"
                        onClick={toggleEdit}
                      >
                        <p className="text-black text-sm text-ellipsis max-w-full whitespace-nowrap overflow-hidden" data-test-name="url">
                          {url}
                        </p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {/* Actions: Share & Toggle Active */}
              <div className="flex w-auto items-center gap-2" data-test-id={link.id}>
                <button type="button" className="py-1 px-2 btn-action" data-type="share">
                  <div className="flex items-center">
                    <i className="bx bx-share icon-default"></i>
                  </div>
                </button>
                <label className="toggle-switchy">
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                    className="action-active"
                    data-test-id={link.id}
                  />
                  <span className="toggle">
                    <span className={`switch ${active ? "translate-x-4 bg-green-500" : ""}`}></span>
                  </span>
                </label>
              </div>
            </form>

            {/* Hidden Redirect Info */}
            <div className="redirect-info expires-date" style={{ display: "none" }}>
              <div className="flex items-center gap-1">
                <span className="flex">
                  <i className="bx bx-redo icon-default"></i>
                </span>
                <span>
                  All visitors redirected to this link starting:{" "}
                  <span className="redirect-info-date">null</span>
                </span>
              </div>
            </div>

            {/* Hidden Schedule Info */}
            <div className="schedule-info expires-date mt-1" style={{ display: "none" }}>
              <div className="flex items-center gap-1">
                <span className="flex">
                  <i className="bx bx-time icon-default"></i>
                </span>
                <span>
                  Link schedule date:{" "}
                  <span className="schedule-info-date">null</span>
                </span>
              </div>
            </div>

            {/* Block Options */}
            <div className="flex gap-2 text-concrete pt-2 items-start justify-between block-options">
              <div className="flex gap-2 flex-wrap relative" data-test-id={link.id}>
                <button type="button" className="py-1 px-1 btn-action" data-type="layout">
                  <div className="flex items-center">
                    <i className="bx bx-layout icon-default"></i>
                  </div>
                </button>
                <button type="button" className="py-1 px-1 btn-action" data-type="img">
                  <div className="flex items-center">
                    <i className="bx bx-image-alt icon-default"></i>
                  </div>
                </button>
                <button type="button" className="py-1 px-1 btn-action" data-type="animation">
                  <div className="flex items-center">
                    <i className="bx bx-chevrons-up icon-default"></i>
                  </div>
                </button>
                <button type="button" className="py-1 px-1 btn-action" data-type="schedule">
                  <div className="flex items-center">
                    <i className="bx bx-time icon-default"></i>
                  </div>
                </button>
                <button type="button" className="py-1 px-1 btn-action" data-type="redirect">
                  <div className="flex items-center">
                    <i className="bx bx-right-arrow-alt icon-default"></i>
                  </div>
                </button>
                <button type="button" className="py-1 px-1 btn-action" data-type="lock">
                  <div className="flex items-center">
                    <i className="bx bx-lock-alt icon-default"></i>
                  </div>
                </button>
                <button type="button" className="py-1 px-1 btn-action" data-type="analytics">
                  <div className="flex items-center">
                    <i className="bx bx-bar-chart icon-default"></i>
                    <span>
                      0 <span className="ui-clicks-text ml-1"> clicks</span>
                    </span>
                  </div>
                </button>
              </div>
              <div data-test-id={link.id}>
                <button
                  type="button"
                  className="py-1 px-2 btn-action"
                  data-type="delete"
                  onClick={() => onDelete(link.id)}
                >
                  <div className="flex items-center">
                    <i className="bx bx-trash-alt icon-default"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* Hidden Options Div */}
          <div
            className="options-div"
            style={{ height: 0, overflow: "hidden", display: "none" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LinksContent;
