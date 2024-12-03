"use Server";

import axios from "axios";

const url = process.env.NEXT_PUBLIC_ADDGROUPURL;

export async function CreateGroupForm(FormData) {
  const currentUser = FormData.currentUser;
  const name = FormData.name;
  console.log(url);
  if (!url) {
    throw new Error("ADDGROUPURL is undefined.");
  }
  try {
    await axios.post(
      url,
      {
        currentUser,
        name,
      },
      {
        withCredentials: true,
      }
    );

    return { success: true };
  } catch (error) {
    console.error("Błąd logowania:");

    return { success: false };
  }
}
