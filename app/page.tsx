// src/pages/index.tsx
import { FaFish, FaShip, FaWater, FaRobot } from 'react-icons/fa';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import turtles from '@/public/images/turtles.png';
import waves from '@/public/images/wave.svg';
import tuna from '@/public/images/tuna-logo.jpeg' 
import trash from '@/public/images/trash.jpg';
import oceanTrash from '@/public/images/ocean-trash.jpg';

import parceiro1 from '@/public/images/o2ocean.png';
import parceiro2 from '@/public/images/select.png';
import parceiro3 from '@/public/images/pacto.png';
import parceiro4 from '@/public/images/softek.png';

import BubbleAnimation from '@/components/home/bubbles/BubbleAnimation';

export default function Home() {
  const oceanTrashData = { river: 40 };
  const oceanTrashByYear = { '1950': 100, '1960': 150, '1970': 200 }; // Exemplo de dados
  return (
    <main className={styles.mainHome}>
      <section className={styles.banner}>
        <BubbleAnimation />
        <div className={styles.container}>
          <div className={styles.bannerContent}>
            <h1>Seja bem vindo ao<br /> projeto Tuná</h1>
            <p>A Tuná é um projeto que busca entender a origem do problema da poluição dos nossos oceanos. Queremos rastrear a origem da poluição a partir do contato com os seres humanos, a passagem por rios e córregos até a chegada aos oceanos.</p>
          </div>
          <div className={styles.bannerImages}>
            <Image src={turtles} alt="Uma tartaruga" />
          </div>
        </div>
        <Image className={styles.waves} src={waves} alt="Ondas" />
      </section>

      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <h2 className={styles.waveTitle}>E qual a finalidade?</h2>
            <p>A finalidade da Tuná é coletar dados, organizá-los de forma onde seja possível entender a origem dos descartes e disponibilizá-los para empresas e governos que irão atuar em ações de prevenção à poluição. Além de engajar a população e realizar campanhas de conscientização.</p>
          </div>
          <div className={styles.aboutImages}>
            <Image className={styles.mockup} src={tuna} alt="Mockup" />
          </div>
        </div>
      </section>


      <section className={styles.partners}>
        <h2 className={styles.waveTitle}>Empresas Parceiras</h2>
        <div className={styles.container}>
            <div className={styles.partnerLogo}>
              <Image src={parceiro1} className={styles.logoImage} alt="Mockup"/>
              <Image src={parceiro2} className={styles.logoImage} alt="Mockup"/>
              <Image src={parceiro4} className={styles.logoImage} alt="Mockup"/>
            </div>
        </div>
      </section>

      <section className={styles.project}>
          <div className={styles.container}>
            <div className={styles.projectContent}>
              <h3>Ajuda de todos</h3>
              <p>Empresas e ONGs desempenham papéis cruciais na luta contra o lixo nos oceanos. Corporações adotam práticas sustentáveis, reduzem plásticos e financiam projetos de limpeza. Enquanto isso, ONGs como Ocean Conservancy e Surfrider Foundation promovem conscientização e advocacia para políticas mais eficazes.</p>
              <p>No entanto, a responsabilidade não é apenas delas. Indivíduos também devem agir, reduzindo plásticos descartáveis, reciclando corretamente e participando de iniciativas de limpeza de praias. Pequenas ações diárias têm um grande impacto quando multiplicadas em escala global.</p>
            </div>
            <div className={styles.projectImage}>
              <Image src={oceanTrash} alt="Uma tartaruga" />
            </div>
          </div>
      </section>

      <section className={styles.oceanTech}>
        <h2 className={styles.waveTitle}>Sobre o projeto</h2>
        <div className={styles.container}>
          <div className={`${styles.iconColumn} ${styles.moveSection}`}>
            <FaFish className={styles.icon} />
            <h3>Monitoramento dos oceanos</h3>
            <p>Através de satélites e drones que buscam pontos de acúmulo de resíduos sólidos ou químicos sendo identificados por inteligência artificial, focamos nossa atenção onde realmente importa, buscando locais estratégicos com a análise de dados.</p>
          </div>
          <div className={`${styles.iconColumn} ${styles.moveSection}`}>
            <FaShip className={styles.icon} />
            <h3>Ponto de largada</h3>
            <p>Ponto de largada: identificar o local de origem do resíduo e o motivo do seu descarte, identificando rótulos e características únicas. Assim conseguimos mapear áreas onde esses resíduos têm o maior consumo e como se multiplicam na rota de descarte.</p>
          </div>
          <div className={`${styles.iconColumn} ${styles.moveSection}`}>
            <FaWater className={styles.icon} />
            <h3>Engajamento social</h3>
            <p>Engajamento social: aplicativo gamificado que permite aos usuários enviarem imagens e preencherem informações sobre resíduos, Através dessa gamificação os usuários acumulam pontos que podem ser trocados por descontos em empresas parceiras.</p>
          </div>
        </div>
      </section>

      

      <section className={styles.project}>
          <div className={styles.container}>

            <div className={styles.projectImage}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Yomf5pBN8dY?si=_y7dRedVq3ienmKG" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
            </div> 

            <div className={styles.projectContent}>
              <h3>O problema do lixo</h3>
              <p>O problema do lixo nos oceanos é uma preocupação global que afeta não apenas a saúde dos ecossistemas marinhos, mas também a vida humana. Toneladas de resíduos plásticos, químicos e materiais descartados indevidamente são despejados nos oceanos todos os anos, prejudicando a vida marinha, poluindo praias e representando uma ameaça para a segurança alimentar e a saúde pública. Esforços de conscientização, reciclagem e regulamentação são essenciais para mitigar esse problema crescente e preservar a beleza e a biodiversidade dos nossos oceanos.</p>
            </div>
            
          </div>
      </section>
      
      
      <section className={styles.project}>
          <div className={styles.container}>
            <div className={styles.projectContent}>
              <h3>Como manter o projeto Tuná:</h3>
              <p>Em parceria com pequenos aquicultores, utilizamos matéria prima dos oceanos para produção de produtos naturais que são comercializados pelas empresas parceiras do projeto.</p>
              <p>O principal produto comercializado é o protetor solar produzido à base de algas marinhas.</p>
              <p>A finalidade da criação do protetor solar é conectar amantes de sol e praia com causas de conscientização para o consumo de produtos que valorizam e cuidam do meio ambiente, além de fortalecer a aquicultura e a produção assistida de algas marinhas.</p>
            </div>
            <div className={styles.projectImage}>
            <Image src={trash} alt="Uma tartaruga" />
            </div>
          </div>
      </section>
      

    </main>
  );
}
