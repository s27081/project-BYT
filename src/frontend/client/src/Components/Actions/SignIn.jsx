"use server";

import axios from "axios";
import getConfig from 'next/config';

const {serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const url = serverRuntimeConfig.signInUrl || publicRuntimeConfig.signInUrl;
console.log("server "+ serverRuntimeConfig.signInUrl)
console.log("client" + publicRuntimeConfig.signInUrl)
export async function SignInForm(FormData) {
  const email = FormData.email;
  const password = FormData.password;
  console.log(url)

  if (!url) {
    throw new Error("SIGNINURL is undefined.");
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
        credentials: 'include'
      }
    );
    console.log(response.headers);
    
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
