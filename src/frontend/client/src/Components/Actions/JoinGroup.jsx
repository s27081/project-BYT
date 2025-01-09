"use server";

import axios from "axios";
import getConfig from 'next/config';

const {serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const url = serverRuntimeConfig.joinGroupUrl || publicRuntimeConfig.joinGroupUrl;

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
