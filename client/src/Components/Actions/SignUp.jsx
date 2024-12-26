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
    try {
      const response = await axios.post(
        url,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      return { success: true, data: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverErrors = error.response?.data?.errors || null;
        return {
          success: false,
          errors: serverErrors || "An unexpected error has occurred.",
        };
      }

      return { success: false, errors: "Unkown error has occurred." };
    }
  }

  return { success: false, errors: "Password are not same." };
}
