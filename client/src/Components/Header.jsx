'use client' 
import { usePathname  } from 'next/navigation'; 
import Link from 'next/link';
import styles from "./Header.module.css";

export default function Header(){

  const pathname = usePathname();

return(
<nav className={styles.header}>
  <p id={styles.logoText}>Pylingo</p>
  <div className={styles.navItem}>
    <Link href="/">
          <p>HOME</p>
          <div className={pathname === '/' ? styles.navUnderline : ''} style={{transform: "translate3d(22px,-15px,0px)"}}/>
    </Link>
    <Link href="/about">
          <p>ABOUT US</p>
          <div className={pathname === '/about' ? styles.navUnderline : ''} style={{transform: "translate3d(25px,-15px,0px)"}}/>
    </Link>
    <Link href="/schools">
      <p>FOR SCHOOLS</p>
      <div className={pathname === '/schools' ? styles.navUnderline : ''} style={{transform: "translate3d(27px,-15px,0px)", width: "180px"}}/>
    </Link>
  </div>
  <div className={styles.authButtons}>
    <div className={styles.registerButton}>
      <p>REGISTER</p>
    </div>
    <div className={styles.loginButton}>
      <p>LOG IN</p>
    </div>
  </div>
</nav>
)
}
