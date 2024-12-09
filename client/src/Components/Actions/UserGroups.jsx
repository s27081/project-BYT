"use Server";

import axios from "axios";

const url = process.env.NEXT_PUBLIC_SHOWUSERGROUP;

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
  console.log(response.data);
  if (!response) {
    throw new Error("Failed to fetch groups");
  }
  return response.data;
}
