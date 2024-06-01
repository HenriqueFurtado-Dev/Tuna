// src/pages/ocean-trash.tsx
import React from 'react';
import Image from 'next/image';
import Circle from '@/components/home/charts/circle';
import Bar from '@/components/home/charts/bar';
import trash from '@/public/images/trash.jpg';
import styles from './Plastico.module.css';

const OceanTrashPage: React.FC = () => {
  return (
    <main>

      <div className={styles.bannerContainer}>
        <Image className={styles.bannerImage} src={trash} alt="Uma tartaruga" />
        <div className={styles.overlay}></div> {/* Adicionando a sobreposição azul escura */}
      </div>

      <h1 className={styles.heading}>Lixo nos Oceanos</h1>
      <section className={styles.container}>
        <h2>Problema do Lixo nos Oceanos</h2>
        <p>
          O problema do lixo nos oceanos é uma preocupação ambiental global, com milhões de toneladas de resíduos plásticos, metais e outros detritos sendo descartados nos oceanos a cada ano. Isso tem um impacto devastador na vida marinha, no ecossistema oceânico e até mesmo na saúde humana.
        </p>
      
        <h2>Dados e Estatísticas</h2>
        <p>
          Aqui estão alguns dados sobre a quantidade de lixo nos oceanos:
        </p>
        <Bar />
        <Circle />
        <p>
          Fontes: [Inserir fontes aqui]
        </p>
      </section>
    </main>
  );
}

export default OceanTrashPage;
