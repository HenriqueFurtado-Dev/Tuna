// src/pages/ocean-trash.tsx
import React from 'react';
import Image from 'next/image';
import trash from '@/public/images/trash.jpg';
import styles from './Plastico.module.css';

const OceanTrashPage: React.FC = () => {
  return (
    <main>

      <div className={styles.bannerContainer}>
        <div className={styles.overlay}></div> {/* Adicionando a sobreposição azul escura */}
        <h1 className={styles.heading}>Lixo nos Oceanos</h1>
      </div>

      <section className={styles.container}>
        <h2>Problema do Lixo nos Oceanos</h2>
        <p>
          O problema do lixo nos oceanos é uma preocupação ambiental global, com milhões de toneladas de resíduos plásticos, metais e outros detritos sendo descartados nos oceanos a cada ano. Isso tem um impacto devastador na vida marinha, no ecossistema oceânico e até mesmo na saúde humana.
        </p>
        
        <h2>Impacto do Plástico nos Oceanos</h2>
        <h3>Consequências para a Vida Marinha</h3>
        <p>
          O plástico nos oceanos é responsável pela morte de milhares de animais marinhos todos os anos. Tartarugas, aves marinhas, peixes e mamíferos confundem plásticos com alimentos, levando à ingestão de materiais tóxicos que causam ferimentos, intoxicação e morte. Redes de pesca descartadas e outros detritos plásticos também causam emaranhamento, resultando em lesões e mortalidade.
        </p>
        
        <h3>Impacto no Ecossistema Oceânico</h3>
        <p>
          O acúmulo de plásticos nos oceanos afeta a qualidade da água e altera os habitats naturais. Microplásticos, que são fragmentos de plástico menores que 5 mm, infiltram-se nos ecossistemas e entram na cadeia alimentar, contaminando espécies desde o plâncton até os grandes predadores. Isso pode levar a desequilíbrios ecológicos e ameaçar a biodiversidade marinha.
        </p>
        
        <h3>Efeitos na Saúde Humana</h3>
        <p>
          O plástico nos oceanos não afeta apenas a vida marinha, mas também representa uma ameaça à saúde humana. Substâncias químicas tóxicas liberadas por plásticos podem se acumular nos organismos marinhos e, eventualmente, entrar na cadeia alimentar humana. Além disso, praias e águas contaminadas com resíduos plásticos impactam negativamente o turismo e a economia local.
        </p>

        <h2>O Que Podemos Fazer?</h2>
        <h3>Redução do Uso de Plástico</h3>
        <p>
          A principal forma de combater o lixo plástico nos oceanos é reduzir a produção e o consumo de plásticos descartáveis. Optar por alternativas reutilizáveis, como sacolas de tecido, garrafas de água reutilizáveis e utensílios de metal ou bambu, pode diminuir significativamente a quantidade de plástico descartado.
        </p>
        
        <h3>Reciclagem e Reutilização</h3>
        <p>
          Promover e participar de programas de reciclagem ajuda a garantir que os plásticos sejam devidamente processados e reutilizados, em vez de serem descartados no ambiente. Educar a comunidade sobre a importância da reciclagem e como separar corretamente os materiais recicláveis é essencial.
        </p>
        
        <h3>Limpeza e Conservação</h3>
        <p>
          Participar de mutirões de limpeza de praias e campanhas de conservação pode ajudar a remover o lixo existente e prevenir que novos resíduos entrem nos oceanos. Apoiar organizações que trabalham na preservação dos oceanos e na proteção da vida marinha também é uma forma eficaz de contribuir.
        </p>

        <h2>Dados e Estatísticas</h2>
        <p>
          Aqui estão alguns dados sobre a quantidade de lixo nos oceanos:
        </p>
      </section>
    </main>
  );
}

export default OceanTrashPage;
