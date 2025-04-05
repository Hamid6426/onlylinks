// // /utils/dragUtils.js

// export const handleDragStart = (e, index, setDraggingIndex) => {
//   console.log(`Drag started for index: ${index}`);
//   setDraggingIndex(index);
//   e.dataTransfer.effectAllowed = "move";
//   e.dataTransfer.setData("text/plain", index.toString());
// };

// export const handleDragOver = (e) => {
//   e.preventDefault();
//   e.dataTransfer.dropEffect = "move";
//   console.log("Drag over event");
// };

// export const handleDrop = (e, toIndex, links, setLinks, setDraggingIndex) => {
//   e.preventDefault();
//   const fromIndex = Number(e.dataTransfer.getData("text/plain"));
//   console.log(`Dropped from index: ${fromIndex} to index: ${toIndex}`);
//   if (fromIndex === toIndex) return;

//   const updated = [...links];
//   const [moved] = updated.splice(fromIndex, 1);
//   updated.splice(toIndex, 0, moved);
//   setLinks(updated); // Using setLinks to update the list
//   setDraggingIndex(null);
// };

// export const handleDragEnd = (setDraggingIndex) => {
//   console.log("Drag ended");
//   setDraggingIndex(null);
// };


export const handleDragStart = (e, index, setDraggingIndex) => {
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", index.toString());
  setDraggingIndex(index);  // Mark the index being dragged
};

export const handleDragOver = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
};

export const handleDrop = (e, dropIndex, links, setLinks, setDraggingIndex, updateLinkPositions) => {
  e.preventDefault();
  const dragIndex = parseInt(e.dataTransfer.getData("text/plain"));

  if (dragIndex === dropIndex) return;

  const updatedLinks = [...links];
  const [moved] = updatedLinks.splice(dragIndex, 1);
  updatedLinks.splice(dropIndex, 0, moved);

  setLinks(updatedLinks);  // Update links state with new order
  setDraggingIndex(null);  // Reset dragging state

  // Update positions in the database
  updateLinkPositions(updatedLinks);
};

export const handleDragEnd = (setDraggingIndex) => {
  setDraggingIndex(null);
};
