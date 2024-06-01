// src/pages/index.tsx
import { FaFish, FaShip, FaWater, FaRobot } from 'react-icons/fa';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import turtles from '@/public/images/turtles.png';
import mockup from '@/public/images/mockups.png';
import waves from '@/public/images/wave.svg';
import logoipsum from '@/public/images/logoipsum.png';
import trash from '@/public/images/trash.jpg';

import BubbleAnimation from '@/components/home/bubbles/BubbleAnimation';
import Circle from '@/components/home/charts/circle';
import Bar from '@/components/home/charts/bar';

export default function Home() {
  const oceanTrashData = { river: 40 };
  const oceanTrashByYear = { '1950': 100, '1960': 150, '1970': 200 }; // Exemplo de dados
  return (
    <main className={styles.mainHome}>
      <section className={styles.banner}>
        <BubbleAnimation />
        <div className={styles.container}>
          <div className={styles.bannerContent}>
            <h1>Seja bem vindo ao<br /> projeto Haora</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, dolore quae facilis temporibus expedita vel consequatur soluta tempora sed veniam suscipit ea quos asperiores atque quia fugiat maiores, error eaque!</p>
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
            <h2 className={styles.waveTitle}>Sobre o projeto</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, dolore quae facilis temporibus expedita vel consequatur soluta tempora sed veniam suscipit ea quos asperiores atque quia fugiat maiores, error eaque!</p>
          </div>
          <div className={styles.aboutImages}>
            <Image className={styles.mockup} src={mockup} alt="Mockup" />
          </div>
        </div>
      </section>


      <section className={styles.partners}>
        <h2 className={styles.waveTitle}>Empresas Parceiras</h2>
        <div className={styles.container}>
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className={styles.partnerLogo}>
              <Image src={logoipsum} alt={`Logo ${index}`} className={styles.logoImage} />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.project}>
          <div className={styles.container}>
            <div className={styles.projectContent}>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet consectetur adipisicing elit. Facere eos vel suscipit unde non sapiente corrupti explicabo nemo, et numquam, autem quaerat tempore molestiae similique porro neque ut at quisquam?</p>
              <p>dolor sit amet consectetur adipisicing elit. Facere eos vel suscipit unde non sapiente corrupti explicabo nemo, et numquam, autem quaerat tempore molestiae similique porro neque ut at quisquam?</p>
              <p>dolor sit amet consectetur adipisicing elit. Facere eos vel suscipit unde non sapiente corrupti explicabo nemo, et numquam, autem quaerat tempore molestiae similique porro neque ut at quisquam?</p>
            </div>
            <div className={styles.projectImage}>
              <Image src={trash} alt="Uma tartaruga" />
            </div>
          </div>
      </section>

      <section className={styles.oceanTech}>
        <h2 className={styles.waveTitle}>Sobre o projeto</h2>
        <div className={styles.container}>
          <div className={`${styles.iconColumn} ${styles.moveSection}`}>
            <FaFish className={styles.icon} />
            <h3>Exploração Marinha</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi aperiam! Numquam repellat laudantium deleniti asperiores doloribus officiis rerum modi aliquid, voluptas explicabo soluta ad aspernatur similique, illum nam architecto!</p>
          </div>
          <div className={`${styles.iconColumn} ${styles.moveSection}`}>
            <FaShip className={styles.icon} />
            <h3>Navegação Inteligente</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi aperiam! Numquam repellat laudantium deleniti asperiores doloribus officiis rerum modi aliquid, voluptas explicabo soluta ad aspernatur similique, illum nam architecto!</p>
          </div>
          <div className={`${styles.iconColumn} ${styles.moveSection}`}>
            <FaWater className={styles.icon} />
            <h3>Navegação Inteligente</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi aperiam! Numquam repellat laudantium deleniti asperiores doloribus officiis rerum modi aliquid, voluptas explicabo soluta ad aspernatur similique, illum nam architecto!</p>
          </div>
          <div className={`${styles.iconColumn} ${styles.moveSection}`}>
            <FaRobot className={styles.icon} />
            <h3>Navegação Inteligente</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi aperiam! Numquam repellat laudantium deleniti asperiores doloribus officiis rerum modi aliquid, voluptas explicabo soluta ad aspernatur similique, illum nam architecto!</p>
          </div>
        </div>
      </section>

      

      <section className={styles.project}>
          <div className={styles.container}>

            <div className={styles.projectImage}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Yomf5pBN8dY?si=_y7dRedVq3ienmKG" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
            </div> 

            <div className={styles.projectContent}>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet consectetur adipisicing elit. Facere eos vel suscipit unde non sapiente corrupti explicabo nemo, et numquam, autem quaerat tempore molestiae similique porro neque ut at quisquam?</p>
              <p>dolor sit amet consectetur adipisicing elit. Facere eos vel suscipit unde non sapiente corrupti explicabo nemo, et numquam, autem quaerat tempore molestiae similique porro neque ut at quisquam?</p>
              <p>dolor sit amet consectetur adipisicing elit. Facere eos vel suscipit unde non sapiente corrupti explicabo nemo, et numquam, autem quaerat tempore molestiae similique porro neque ut at quisquam?</p>
            </div>
            
          </div>
      </section>
      

      <section className={styles.charts}>
        <h2 className={styles.waveTitle}>Gráficos</h2>
        <div className={styles.container}>
          <div className={styles.chartsIndividual}>
            <h3>Quantidade de lixo nos rios</h3>
            <Circle/>
          </div>
          <div className={styles.chartsIndividual}> 
            <h3>Quantidade de lixo nos oceanos</h3>
            <Bar/>
          </div>
        </div>
      </section>
      
      <section className={styles.project}>
          <div className={styles.container}>
            <div className={styles.projectContent}>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet consectetur adipisicing elit. Facere eos vel suscipit unde non sapiente corrupti explicabo nemo, et numquam, autem quaerat tempore molestiae similique porro neque ut at quisquam?</p>
              <p>dolor sit amet consectetur adipisicing elit. Facere eos vel suscipit unde non sapiente corrupti explicabo nemo, et numquam, autem quaerat tempore molestiae similique porro neque ut at quisquam?</p>
              <p>dolor sit amet consectetur adipisicing elit. Facere eos vel suscipit unde non sapiente corrupti explicabo nemo, et numquam, autem quaerat tempore molestiae similique porro neque ut at quisquam?</p>
            </div>
            <div className={styles.projectImage}>
            <Image src={trash} alt="Uma tartaruga" />
            </div>
          </div>
      </section>
      

    </main>
  );
}
