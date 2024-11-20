"use Server";

import axios from "axios";

export async function SignUpForm(FormData) {
  const email = FormData.email;
  const password = FormData.password;
  const repeatedPassword = FormData.repeatedPassword;

  if (password === repeatedPassword) {
    await axios.post(
      `${process.env.DOMAINSERV}/api/users/signup`,
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
