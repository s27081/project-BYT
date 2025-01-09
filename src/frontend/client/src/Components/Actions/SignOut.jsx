"use server";

import axios from "axios";
import getConfig from 'next/config';

const {serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const url = serverRuntimeConfig.singOutUrl || publicRuntimeConfig.singOutUrl;

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
