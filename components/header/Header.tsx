import React from 'react';
import Link from 'next/link';
import styles from '@/components/header/Header.module.css'; 

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <h1 className={styles.title}>My Website</h1>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
