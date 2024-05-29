import React from 'react';
import Link from 'next/link';
import styles from '@/components/footer/Footer.module.css'; 

const Footer: React.FC = () => {
    return(
        <footer className={styles.footer}>
            <p>Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer
