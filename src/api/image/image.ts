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
  const fileName = fileToUpload.uri.split("/").pop();
  let match = /\.(\w+)$/.exec(fileName);
  let type = match ? `image/${match[1]}` : `image`;

  data.append("photo", {
    uri: fileToUpload.uri,
    name: fileName,
    type: type,
  });
  data.append("userId", userId);
  if (caption) {
    data.append("caption", caption);
  }

  await client.post("/posts", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
