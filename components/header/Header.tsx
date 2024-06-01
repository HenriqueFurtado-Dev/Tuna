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
            <Link className={styles.itemMenu} href="/">Início</Link>
            <Link className={styles.itemMenu} href="/parcerias">Parcerias</Link>
            <Link className={styles.itemMenu} href="/dashboard">Dashboard e Infos</Link>
            <Link className={styles.itemMenu} href="/produtos">Produtos</Link>
            <Link className={styles.itemMenu} href="/voluntarios">Me voluntariar</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
