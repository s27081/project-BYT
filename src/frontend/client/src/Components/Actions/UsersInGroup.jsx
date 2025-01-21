"use server";

import axios from "axios";
import getConfig from 'next/config';

const {serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const url = serverRuntimeConfig.showUsersInGroup || publicRuntimeConfig.showUsersInGroup

export async function fetchUsersInGroup(joinCode) {
  if (!url) {
    throw new Error("SHOWUSERGROUP is undefined.");
  }

  const response = await axios.get(`${url}?join_code=${joinCode}`, {
    withCredentials: true,
  });

  if (!response) {
    throw new Error("Failed to fetch users in group");
  }
  console.log(response.data);
  return response.data;
}
