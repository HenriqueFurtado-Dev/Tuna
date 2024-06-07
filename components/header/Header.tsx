'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/header/Header.module.css'; 
import trophyIcon from '@/public/images/trophy.png'; // Importe o ícone do troféu

const Header: React.FC = () => {
  const [points, setPoints] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const storedPoints = localStorage.getItem('userPoints');
    if (storedPoints) {
      setPoints(parseInt(storedPoints, 10));
    }

    const handleStorageChange = () => {
      const updatedPoints = localStorage.getItem('userPoints');
      if (updatedPoints) {
        setPoints(parseInt(updatedPoints, 10));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <h1 className={styles.title}>Tuná</h1>
          <nav className={`${styles.nav} ${isSidebarOpen ? styles.open : ''}`}>
            <Link className={styles.itemMenu} href="/">Início</Link>
            <Link className={styles.itemMenu} href="/plastico">O lixo</Link>
            <Link className={styles.itemMenu} href="/parcerias">Parcerias</Link>
            <Link className={styles.itemMenu} href="/lista-parceiros">Lista</Link>
            <Link className={styles.itemMenu} href="/faq">FAQ</Link>
            <Link className={styles.itemMenu} href="/produtos">Produtos</Link>
            <Link className={styles.itemMenu} href="/relatorios">Relatórios</Link>
            <Link className={styles.itemMenu} href="/relatar">Relatar local</Link>
          </nav>
          <div className={styles.pointsContainer}>
            <p className={styles.points}>{points} pts</p>
            <Image src={trophyIcon} alt="Ícone de troféu" className={styles.trophyIcon} />
          </div>
          <button className={styles.menuButton} onClick={toggleSidebar}>
            <div className={styles.menuIcon}></div>
            <div className={styles.menuIcon}></div>
            <div className={styles.menuIcon}></div>
          </button>
        </div>
      </div>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <nav className={styles.sidebarNav}>
          <Link href="/">Início</Link>
          <Link href="/plastico"> O Plástico</Link>
          <Link href="/parcerias">Parcerias</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/produtos">Produtos</Link>
          <Link href="/relatorios">Relatórios</Link>
          <Link href="/relatar">Relatar um local</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
