import React from 'react';
import Link from 'next/link';
import styles from '@/components/footer/Footer.module.css'; 
import avatar from '@/public/images/avatar.png'; 
import Image from "next/image";

const Footer: React.FC = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.navigation}>
                    <h3>Navegação pelo site</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nihil aspernatur? Molestias neque totam provident cum doloremque accusantium animi repudiandae harum iste deserunt. Doloribus et commodi vitae maiores labore deleniti.</p>
                    <nav>
                        <ul>
                            <li>Inicio</li>
                            <li>Sobre</li>
                            <li>Solucao</li>
                            <li>Contato</li>
                        </ul>
                    </nav>
                </div>

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
                <div className={styles.credits}>
                    <p>Todos os direitos reservados - Global Solution | FIAP 2024</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
