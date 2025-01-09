"use server";

import axios from "axios";

const url = process.env.NEXT_PUBLIC_DELETEUSERFROMGROUP;

export async function deleteUserFromGroup(userId, groupId) {
  try {
    const response = await axios.delete(url, {
      data: { userId, groupId },
    });
    console.log(response.data.message);
    return response.data.success;
  } catch (error) {
    console.error("Failed to delete user from group:", error);
    return false;
  }
}
