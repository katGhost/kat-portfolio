"use client";

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      {/* Me */}
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <span className={styles.logo}>AN.</span>
        </div>
      </div>
      {/* Navbar Links */}
      <div className={styles.navLinksContainer}>
        <div className={styles.navLinks}>
          {/* <Link className={styles.navItem} href="/">Home</Link> */}
          <Link className={styles.navItem} href="/projects">Projects</Link>
          <Link className={styles.navItem} href="/about">About</Link>
          <Link className={styles.navItem} href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}