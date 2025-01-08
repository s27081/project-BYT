"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname, useParams } from "next/navigation";

import NavBar from "../../../../Components/NavBar";
import useCurrentUser from "../../../../Components/Actions/useCurrentUser";
import Background from "../../../../Components/Background";
import classes from "../../../../styles/ClassesPage.module.css";
import { fetchUserGroups } from "../../../../Components/Actions/UserGroups";
import { fetchUsersInGroup } from "../../../../Components/Actions/UsersInGroup";
import { deleteUserFromGroup } from "../../../../Components/Actions/deleteUserFromGroup";

export default function Dashboard() {
  const pathname = usePathname();
  const router = useRouter();
  const { slug: joinCode } = useParams();

  const [groups, setGroups] = useState([]);
  const [users, setUsers] = useState([]);

  const { loading, currentUser } = useCurrentUser();

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

  useEffect(() => {
    const getUsers = async () => {
      if (joinCode) {
        const data = await fetchUsersInGroup(joinCode);
        setUsers(data.UserInGroup);
      }
    };

    getUsers();
  }, [joinCode]);

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
                <Link
                  href={`/dashboard/Classes/${group.join_code}`}
                  key={group.join_code}
                  id={
                    pathname === `/dashboard/Classes/${group.join_code}`
                      ? classes.ChangedBackground
                      : ""
                  }
                  className={classes.GroupContainer}
                >
                  <p>{group.group_name}</p>
                  <p>Join Code: {group.join_code}</p>
                </Link>
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
          {users &&
            users.map((user) => (
              <div key={user.user_id} className={classes.UserItem}>
                <p>User ID: {user.user_id}</p>
                <p>Role: {user.role}</p>

                {currentUser.id === user.admin_id && user.role !== "admin" && (
                  <button
                    className={classes.delButton}
                    onClick={() => {
                      const group = groups.find(
                        (g) => g.join_code === joinCode
                      );
                      if (!group) {
                        alert("Group not found");
                        return;
                      }
                      if (
                        confirm("Are you sure you want to remove this user?")
                      ) {
                        deleteUserFromGroup(user.user_id, group.group_id).then(
                          (success) => {
                            if (success) {
                              alert("User removed successfully");
                              setUsers((prevUsers) =>
                                prevUsers.filter(
                                  (u) => u.user_id !== user.user_id
                                )
                              );
                            } else {
                              alert("Failed to remove user");
                            }
                          }
                        );
                      }
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
