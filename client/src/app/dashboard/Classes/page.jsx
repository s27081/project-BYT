"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";

import NavBar from "../../../Components/NavBar";
import useCurrentUser from "../../../Components/Actions/useCurrentUser";
import Background from "../../../Components/Background";
import classes from "../../../styles/ClassesPage.module.css";

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
      <div className={classes.container}>
        <div className={classes.YourGroups}>
          <p>Your groups</p>
          <Link href="/dashboard/Classes/addClasses">
            <div id={classes.plusIcon}>
              <FaPlus className={classes.icon} />
            </div>
          </Link>
        </div>
        <div className={classes.MembersDescription}>
          <div className={classes.descriptionContainer}>
            <p>Member</p>
            <p id={classes.bordered}>Tasks Completed</p>
            <p>Action</p>
          </div>
        </div>
      </div>
    </>
  );
}
