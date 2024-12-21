"use server";

import axios from "axios";

const url = process.env.NEXT_PUBLIC_SIGNOUTURL;

console.log(url);
export async function SignOut() {
  if (!url) {
    throw new Error("SIGNOUTURL is undefined.");
  }
  await axios.post(
    url,
    {},
    {
      withCredentials: true,
    }
  );
}
