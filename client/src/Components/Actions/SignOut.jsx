"use Server";

import axios from "axios";

export async function SignOut() {
  await axios.post(
    `${process.env.DOMAINSERV}/api/users/signout`,
    {},
    {
      withCredentials: true,
    }
  );
}
