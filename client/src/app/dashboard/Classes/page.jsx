"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

import NavBar from "../../../Components/NavBar";
import useCurrentUser from "../../../Components/Actions/useCurrentUser";
import Background from "../../../Components/Background";
import classes from "../../../styles/ClassesPage.module.css";
import { fetchUserGroups } from "../../../Components/Actions/UserGroups";

export default function Dashboard() {
  const { loading, currentUser } = useCurrentUser();
  const router = useRouter();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const getGroups = async () => {
      if (currentUser) {
        const data = await fetchUserGroups(currentUser);
        if (data.success !== false) {
          setGroups(data.UserGroups);
        }
      }
    };
    getGroups();
  }, [currentUser]);

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
          <div className={classes.GroupList}>
            {groups &&
              groups.map((group) => (
                <div key={group.join_code} className={classes.GroupContainer}>
                  <p>{group.group_name}</p>
                  <p>Join Code: {group.join_code}</p>
                </div>
              ))}
          </div>
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
