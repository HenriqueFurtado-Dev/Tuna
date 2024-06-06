import React from 'react';
import Link from 'next/link';
import styles from '@/components/footer/Footer.module.css'; 
import carlos from '@/public/images/carlos.jpg'; 
import fabiola from '@/public/images/fabiola.jpg'; 
import rafael from '@/public/images/rafael.jpeg'; 
import Image from "next/image";

const Footer: React.FC = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.navigation}>
                    <h3>Navegação pelo site</h3>
                    <p>Nós equipe responsável pelo projeto Tuná nos empenhamos em cada parte desse projeto, venha mudar o futuro do planeta junto conosco</p>
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
                        <Image src={carlos} alt="Bruno" width={100} height={100} />
                        <div className={styles.informations}>
                            <h3>Carlos Furtado</h3>
                            <p>RM: 553597</p>
                            <p>Turma: 1TDSZ</p>
                        </div>
                    </div>

                    <div className={styles.membersIndividual}>
                        <Image src={fabiola} alt="Bruno" width={100} height={100} />
                        <div className={styles.informations}>
                            <h3>Fabíola Falcão</h3>
                            <p>RM: 552715</p>
                            <p>Turma: 1TDSPB</p>
                        </div>
                    </div>

                    <div className={styles.membersIndividual}>
                        <Image src={rafael} alt="Bruno" width={100} height={100} />
                        <div className={styles.informations}>
                            <h3>Rafael de Novaes</h3>
                            <p>RM: 553934</p>
                            <p>Turma: 1TDSPB</p>
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
