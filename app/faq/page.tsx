'use client'
// src/pages/faq.tsx
import React, { useState } from 'react';
import styles from './Faq.module.css';

const FaqPage: React.FC = () => {
  const faqItems = [
    {
      question: 'Qual é o impacto do lixo nos oceanos na vida marinha?',
      answer: 'O lixo nos oceanos pode causar danos significativos à vida marinha, como ingestão acidental de plásticos por animais marinhos, estrangulamento e danos aos habitats costeiros e recifes de coral.'
    },
    {
      question: 'Como posso ajudar a combater o problema do lixo nos oceanos?',
      answer: 'Existem várias maneiras pelas quais você pode ajudar, incluindo reduzir o uso de plásticos descartáveis, participar de limpezas costeiras, educar os outros sobre a importância da conservação dos oceanos e apoiar organizações que trabalham para proteger o meio ambiente marinho.'
    },
    {
      question: 'Por que é importante reduzir o uso de plásticos descartáveis?',
      answer: 'Os plásticos descartáveis contribuem significativamente para a poluição dos oceanos. Reduzir seu uso diminui a quantidade de resíduos que pode acabar no ambiente marinho, protegendo a vida marinha e o ecossistema.'
    },
    {
      question: 'Quais são algumas alternativas aos plásticos descartáveis?',
      answer: 'Algumas alternativas incluem sacolas reutilizáveis, garrafas de água de metal ou vidro, canudos de bambu ou metal e utensílios reutilizáveis. Optar por esses produtos pode reduzir significativamente a quantidade de plástico descartado.'
    },
    {
      question: 'Como as limpezas costeiras ajudam no combate à poluição dos oceanos?',
      answer: 'As limpezas costeiras removem resíduos antes que eles possam entrar nos oceanos. Isso ajuda a proteger a vida marinha, melhora a qualidade da água e preserva a beleza natural das praias e áreas costeiras.'
    },
    {
      question: 'O que é o projeto Tuná?',
      answer: 'A Tuná é um projeto que busca entender a origem da poluição dos oceanos, rastreando-a desde o contato humano até os rios e a chegada aos oceanos. Utiliza monitoramento por satélites e drones, engajamento social e um aplicativo gamificado para coletar dados e engajar a população.'
    },
    {
      question: 'Como o projeto Tuná identifica a origem dos resíduos?',
      answer: 'O projeto Tuná identifica a origem dos resíduos através de monitoramento por satélites e drones, que detectam pontos de acúmulo de resíduos. Inteligência artificial é usada para analisar esses dados e mapear as áreas de origem dos resíduos.'
    },
    {
      question: 'Como posso me envolver com o projeto Tuná?',
      answer: 'Você pode se envolver com o projeto Tuná utilizando seu aplicativo gamificado para reportar resíduos encontrados, acumulando pontos que podem ser trocados por descontos em empresas parceiras. Além disso, você pode apoiar a causa comprando produtos naturais feitos com matéria prima dos oceanos.'
    },
    {
      question: 'Qual é a finalidade do projeto Tuná?',
      answer: 'A finalidade do projeto Tuná é coletar e organizar dados sobre a origem dos descartes para que empresas e governos possam implementar ações de prevenção à poluição. O projeto também visa engajar a população e realizar campanhas de conscientização.'
    },
    {
      question: 'Como o projeto Tuná se sustenta?',
      answer: 'O projeto Tuná se sustenta através de parcerias com pequenos aquicultores para a produção de produtos naturais, como protetor solar à base de algas marinhas. Esses produtos são vendidos por empresas parceiras, conectando consumidores com a causa ambiental e fortalecendo a aquicultura.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.heading}>Perguntas Frequentes (F.A.Q)</h1>
        {faqItems.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div onClick={() => toggleAccordion(index)} className={styles.question}>
              <h3 className={styles.title}>{item.question}</h3>
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </main>
      <aside className={styles.sidebar}>
        <h2>Mais Informações</h2>
        <p>Esta página de perguntas frequentes visa fornecer respostas claras e concisas para as dúvidas mais comuns sobre o problema do lixo nos oceanos e como combatê-lo.</p>
      </aside>
    </div>
  );
}

export default FaqPage;
