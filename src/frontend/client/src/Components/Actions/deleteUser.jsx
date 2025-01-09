"use server";

import axios from "axios";
import getConfig from 'next/config';

const {serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const url = serverRuntimeConfig.deleteUser || publicRuntimeConfig.deleteUser;

export async function deleteUser(currentUser) {
  try {
    const response = await axios.delete(url, {
      data: currentUser,
      withCredentials: true,
    });
    return response.data.success;
  } catch (error) {
    console.error("Failed to delete user:", error);
    return false;
  }
}
