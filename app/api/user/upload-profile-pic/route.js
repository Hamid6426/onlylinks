import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { supabase } from "@/lib/supabaseClient";

export const config = {
  api: {
    bodyParser: false, // still needed so Next.js doesn’t pre‑parse JSON
  },
};

export async function PATCH(request) {
  console.log("🟢 [upload-profile-pic] handler hit");

  // 1. pull the form data
  const formData = await request.formData();
  const imageFile = formData.get("image");
  const userIdRaw = formData.get("userId");

  // 2. validate
  if (!(imageFile instanceof File)) {
    return NextResponse.json({ error: "Image file not provided" }, { status: 400 });
  }
  if (typeof userIdRaw !== "string" || isNaN(Number(userIdRaw))) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }
  const userId = Number(userIdRaw);

  // 3. read the file into a buffer
  const arrayBuffer = await imageFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // 4. write to disk
  const uploadDir = path.join(process.cwd(), "public", "profile-pictures");
  await fs.promises.mkdir(uploadDir, { recursive: true });

  // sanitize filename
  const filename = path.basename(imageFile.name);
  const filePath = path.join(uploadDir, filename);

  await fs.promises.writeFile(filePath, buffer);
  console.log("🟢 wrote file to", filePath);

  // 5. update Supabase
  const imageUrl = `/profile-pictures/${filename}`;
  const { error: dbError } = await supabase
    .from("users")
    .update({ profile_picture: imageUrl })
    .eq("id", userId);

  if (dbError) {
    console.error("🛑 supabase error:", dbError);
    return NextResponse.json({ error: "Failed to update DB" }, { status: 500 });
  }

  console.log("🟢 DB updated, returning success");
  return NextResponse.json({ message: "OK", path: imageUrl });
}
