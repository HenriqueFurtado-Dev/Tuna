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
        question: 'Como posso ajudar a combater o problema do lixo nos oceanos?',
        answer: 'Existem várias maneiras pelas quais você pode ajudar, incluindo reduzir o uso de plásticos descartáveis, participar de limpezas costeiras, educar os outros sobre a importância da conservação dos oceanos e apoiar organizações que trabalham para proteger o meio ambiente marinho.'
    },
    {
        question: 'Como posso ajudar a combater o problema do lixo nos oceanos?',
        answer: 'Existem várias maneiras pelas quais você pode ajudar, incluindo reduzir o uso de plásticos descartáveis, participar de limpezas costeiras, educar os outros sobre a importância da conservação dos oceanos e apoiar organizações que trabalham para proteger o meio ambiente marinho.'
    },  
    // Adicione mais perguntas e respostas conforme necessário
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
