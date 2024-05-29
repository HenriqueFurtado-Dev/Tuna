import React from 'react';
import Link from 'next/link';
import styles from '@/components/footer/Footer.module.css'; 
import avatar from '@/public/images/avatar.png'; 
import Image from "next/image";

const Footer: React.FC = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.members}>
                    
                    <div className={styles.membersIndividual}>
                        <Image src={avatar} alt="Bruno" width={100} height={100} />
                        <div className={styles.informations}>
                            <h3>Bruno</h3>
                            <p>Desenvolvedor</p>
                        </div>
                    </div>

                    <div className={styles.membersIndividual}>
                        <Image src={avatar} alt="Bruno" width={100} height={100} />
                        <div className={styles.informations}>
                            <h3>Bruno</h3>
                            <p>Desenvolvedor</p>
                        </div>
                    </div>

                    <div className={styles.membersIndividual}>
                        <Image src={avatar} alt="Bruno" width={100} height={100} />
                        <div className={styles.informations}>
                            <h3>Bruno</h3>
                            <p>Desenvolvedor</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
