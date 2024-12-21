"use server";

import axios from "axios";

const url = process.env.NEXT_PUBLIC_JOINGROUPURL;

export async function JoinGroupForm(FormData) {
  const currentUser = FormData.currentUser;
  const join_code = FormData.JoinCode;
  console.log(url);
  if (!url) {
    throw new Error("JOINGROUPURL is undefined.");
  }
  try {
    await axios.post(
      url,
      {
        currentUser,
        join_code,
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
