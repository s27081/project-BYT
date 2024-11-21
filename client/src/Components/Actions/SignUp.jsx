"use Server";

import axios from "axios";

const url = process.env.NEXT_PUBLIC_SIGNUPURL;

export async function SignUpForm(FormData) {
  const email = FormData.email;
  const password = FormData.password;
  const repeatedPassword = FormData.repeatedPassword;

  if (password === repeatedPassword) {
    if (!url) {
      throw new Error("SIGNUPURL is undefined.");
    }
    console.log(url);
    await axios.post(
      url,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return { success: true };
  }
  console.log(email);

  return { success: false };
}
