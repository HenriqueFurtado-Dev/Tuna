'use client'

// src/components/header/Header.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/components/header/Header.module.css'; 

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.container}>
          <h1 className={styles.title}>My Website</h1>
          <nav className={styles.nav}>
            <Link className={styles.itemMenu} href="/">Início</Link>
            <Link className={styles.itemMenu} href="/plastico">O Plástico</Link>
            <Link className={styles.itemMenu} href="/parcerias">Parcerias</Link>
            <Link className={styles.itemMenu} href="/faq">FAQ</Link>
            <Link className={styles.itemMenu} href="/relatorios">Relatórios</Link>
            <Link className={styles.itemMenu} href="/relatar">Relatar um local</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
