"use server";

import axios from "axios";

const url = process.env.NEXT_PUBLIC_DELETEUSER;

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
