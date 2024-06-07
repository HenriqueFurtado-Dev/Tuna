import React from 'react';
import styles from './BubbleAnimation.module.css';

const BubbleAnimation: React.FC = () => {
  return (
    <div className={styles.ocean}>
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className={`${styles.bubble} ${styles[`bubble--${i + 1}`]}`}></div>
      ))}
    </div>
  );
};

export default BubbleAnimation;
