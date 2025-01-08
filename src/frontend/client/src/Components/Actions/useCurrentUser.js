"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const url = process.env.NEXT_PUBLIC_CURRENTUSERURL;
console.log(url);
const useCurrentUser = () => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        if (!url) {
          throw new Error("CURRENTUSERURL is undefined.");
        }
        const response = await axios.get(url, { withCredentials: true });

        if (response.data.currentUser) {
          setCurrentUser(response.data.currentUser);
        } else {
        }
      } catch (error) {
        console.error("Error fetching user status", error);
        router.push("/Auth/SignIn");
      } finally {
        setLoading(false);
      }
    };

    checkUserStatus();
  }, [router]);

  return { loading, currentUser };
};

export default useCurrentUser;
