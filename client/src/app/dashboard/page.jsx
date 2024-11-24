"use client";

import NavBar from "../../Components/NavBar";
import useCurrentUser from "../../Components/Actions/useCurrentUser";
import { useRouter } from "next/navigation";
import Background from "../../Components/Background";

export default function Dashboard() {
  const { loading, currentUser } = useCurrentUser();
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    router.push("/Auth/SignIn");
  }

  return (
    <>
      <Background />
      <NavBar />
    </>
  );
}
