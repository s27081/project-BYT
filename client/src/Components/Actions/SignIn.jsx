"use Server";

import axios from "axios";

export async function SignInForm(FormData) {
  const email = FormData.email;
  const password = FormData.password;

  try {
    await axios.post(
      `${process.env.DOMAINSERV}/api/users/signin`,
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
