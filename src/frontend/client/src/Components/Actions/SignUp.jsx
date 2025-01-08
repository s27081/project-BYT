"use server";

import axios from "axios";
import getConfig from 'next/config';

const {serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const url = serverRuntimeConfig.signUpUrl || publicRuntimeConfig.signUpUrl;
console.log("server "+ serverRuntimeConfig.signUpUrl)
console.log("client" + publicRuntimeConfig.signUpUrl)
console.log(url);

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
      console.log(error)
      if (axios.isAxiosError(error)) {
        const serverErrors = error.response?.data?.errors || null;
        console.log(serverErrors);
        
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
