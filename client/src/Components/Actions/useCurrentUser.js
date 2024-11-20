"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const useCurrentUser = () => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const response = await axios.get(
          `${process.env.DOMAINSERV}/api/users/currentuser`,
          { withCredentials: true }
        );

        if (response.data.currentUser) {
          setCurrentUser(response.data.currentUser);
        } else {
          router.push("/Auth/SignIn");
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
