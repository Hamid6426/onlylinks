export async function updateSettings(action, linkId, value) {
  const res = await fetch(`/api/links/${action}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ linkId, value }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to update ${action}: ${errText}`);
  }

  return res.json();
}
