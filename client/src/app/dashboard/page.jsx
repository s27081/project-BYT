"use client";

import NavBar from "../../Components/NavBar";
import useCurrentUser from "../../Components/Actions/useCurrentUser";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { loading, currentUser } = useCurrentUser();
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    router.push("/Auth/SignIn");
  }

  return <NavBar />;
}
