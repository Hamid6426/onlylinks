export const handleDragStart = (e, index, setDraggingIndex) => {
  e.dataTransfer.setDragImage(new Image(), 0, 0);
  setDraggingIndex(index);
};

export const handleDragOver = (e, overIndex, draggingIndex, setLinks, setDraggingIndex) => {
  e.preventDefault();
  if (overIndex === draggingIndex) return;

  setLinks((prev) => {
    const next = [...prev];
    const [moved] = next.splice(draggingIndex, 1);
    next.splice(overIndex, 0, moved);
    return next;
  });
  setDraggingIndex(overIndex);
};

export const handleDragEnd = async (links, setDraggingIndex) => {
  setDraggingIndex(null);

  const payload = links.map((link, idx) => ({
    id: link.id,
    position: idx,
  }));

  try {
    await fetch("/api/links/position-change-with-drag", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ links: payload }),
    });
  } catch (err) {
    console.error("Error saving positions:", err);
  }
};
