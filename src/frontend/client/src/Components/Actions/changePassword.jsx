"use server";

import axios from "axios";
import getConfig from 'next/config';

const {serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const url = serverRuntimeConfig.changePassword  || publicRuntimeConfig.changePassword

export async function ChangePassword(FormData) {
  const oldPassword = FormData.oldPassword;
  const password = FormData.password;
  const repeatedPassword = FormData.repeatedPassword;
  const currentUser = FormData.currentUser;
  if (password === repeatedPassword) {
    if (!url) {
      throw new Error("CHANGEPASSWORD url is undefined.");
    }
    await axios.post(
      url,
      {
        oldPassword,
        password,
        currentUser,
      },
      {
        withCredentials: true,
      }
    );
    return { success: true };
  } else {
    return { success: false, error: "Passwords do not match" };
  }
}
