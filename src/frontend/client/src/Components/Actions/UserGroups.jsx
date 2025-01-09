"use server";

import axios from "axios";
import getConfig from 'next/config';

const {serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const url = serverRuntimeConfig.showUserGroupUrl || publicRuntimeConfig.showUserGroupUrl;

export async function fetchUserGroups(currentUser) {
  if (!url) {
    throw new Error("SHOWUSERGROUP is undefined.");
  }
  const response = await axios.post(
    url,
    {
      currentUser,
    },
    {
      withCredentials: true,
    }
  );
  if (!response) {
    throw new Error("Failed to fetch groups");
  }
  return response.data;
}
