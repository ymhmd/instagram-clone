import axios from "axios";
import FormData from "form-data";

import { BASE_URL } from "../env";

const client = axios.create({
  baseURL: BASE_URL,
});

export const uploadImageToThirdParty = async (
  userId: string,
  fileToUpload: any,
  caption: string
) => {
  const data = new FormData();
  data.append("photo", fileToUpload);
  data.append("userId", userId);
  if (caption) {
    data.append("caption", caption);
  }

  console.log("data", data);

  try {
    const x = await client.post("/posts", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("XXXXXXX", x);
  } catch (error) {
    console.log("FSGFSHG", error);
  }
};
