"use server";

import axios from "axios";

const url = process.env.NEXT_PUBLIC_SIGNINURL;

export async function SignInForm(FormData) {
  const email = FormData.email;
  const password = FormData.password;
  console.log(url);
  if (!url) {
    throw new Error("SIGNINURL is undefined.");
  }
  try {
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
  } catch (error) {
    console.error("Błąd logowania:");

    return { success: false };
  }
}
