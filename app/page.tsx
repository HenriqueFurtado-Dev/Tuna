// src/pages/index.tsx
import { FaFish, FaShip, FaWater, FaRobot } from 'react-icons/fa';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import turtles from '@/public/images/turtles.png';
import mockup from '@/public/images/mockups.png';
import waves from '@/public/images/wave.svg';

import BubbleAnimation from '@/components/home/bubbles/BubbleAnimation';

export default function Home() {
  return (
    <main>
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
            <h2>Sobre o projeto</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, dolore quae facilis temporibus expedita vel consequatur soluta tempora sed veniam suscipit ea quos asperiores atque quia fugiat maiores, error eaque!</p>
          </div>
          <div className={styles.aboutImages}>
            <Image className={styles.mockup} src={mockup} alt="Mockup" />
          </div>
        </div>
      </section>

      <section className={styles.oceanTech}>
        <h2>Sobre o projeto</h2>
        <div className={styles.container}>
          <div className={styles.iconColumn}>
            <FaFish className={styles.icon} />
            <h3>Exploração Marinha</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi aperiam! Numquam repellat laudantium deleniti asperiores doloribus officiis rerum modi aliquid, voluptas explicabo soluta ad aspernatur similique, illum nam architecto!</p>
          </div>
          <div className={styles.iconColumn}>
            <FaShip className={styles.icon} />
            <h3>Navegação Inteligente</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi aperiam! Numquam repellat laudantium deleniti asperiores doloribus officiis rerum modi aliquid, voluptas explicabo soluta ad aspernatur similique, illum nam architecto!</p>
          </div>
          <div className={styles.iconColumn}>
            <FaWater className={styles.icon} />
            <h3>Navegação Inteligente</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi aperiam! Numquam repellat laudantium deleniti asperiores doloribus officiis rerum modi aliquid, voluptas explicabo soluta ad aspernatur similique, illum nam architecto!</p>
          </div>
          <div className={styles.iconColumn}>
            <FaRobot className={styles.icon} />
            <h3>Navegação Inteligente</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi aperiam! Numquam repellat laudantium deleniti asperiores doloribus officiis rerum modi aliquid, voluptas explicabo soluta ad aspernatur similique, illum nam architecto!</p>
          </div>
        </div>
      </section>

    </main>
  );
}
