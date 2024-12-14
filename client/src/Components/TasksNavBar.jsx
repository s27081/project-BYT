import taskList from "./TasksList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTachometerAlt } from "react-icons/fa";

import styles from "../styles/TasksNavBar.module.css";

export default function TasksNavBar({ slug }) {
  const pathname = usePathname();
  return (
    <div className={styles.TaskContainer}>
      <div className={styles.icons}>
        <FaTachometerAlt
          style={{ transform: "translate3d(40px, 52px, 0px)" }}
        />
        <Link href="/dashboard">
          <p>Dashboard</p>
        </Link>
      </div>
      {taskList.map((task) => (
        <div key={task.id} className={styles.taskCards}>
          {console.log(`/dashboard/Tasks/${slug}`)}

          <Link href={`/dashboard/Tasks/${task.id}`}>
            <p
              id={
                pathname === `/dashboard/Tasks/${slug}` &&
                String(task.id) === slug
                  ? styles.navHover
                  : ""
              }
            >
              {task.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
