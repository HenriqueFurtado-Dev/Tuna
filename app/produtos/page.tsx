'use client'

import React from 'react';
import styles from './Produtos.module.css';
import Image from 'next/image';
import camisa from '@/public/images/camisa.webp';
import oculos from '@/public/images/oculos.webp';
import mergulho from '@/public/images/ecobag.webp';
import camisaTuna from '@/public/images/tuna-camisa.jpeg';
import bagTuna from '@/public/images/tuna-bag.jpeg';
import protetorTuna from '@/public/images/tuna-protetor.jpeg';
import coin from '@/public/images/coin.gif';

const Produtos: React.FC = () => {
  const produtos = [
    { 
      nome: 'Camisa do Projeto', 
      pontos: 180, 
      imagem: camisaTuna, 
      descricao: 'Uma camisa estilosa feita de uma de nossas principais empresas parceiras, para você pode aproveitar as ondas do mar.' 
    },
    { 
      nome: 'Bag Tuná', 
      pontos: 250, 
      imagem: bagTuna, 
      descricao: 'Uma ecobag resistente e sustentável para suas compras. Feito com material reciclado do oceano.' 
    },
    { 
      nome: 'Protetor Solar', 
      pontos: 80, 
      imagem: protetorTuna, 
      descricao: 'Um protetor feito de embalagens recicladas, para você se proteger do sol e ajudar o meio ambiente.' 
    },
    { 
      nome: 'Camisa', 
      pontos: 250, 
      imagem: camisa, 
      descricao: 'Uma camisa estilosa feita de uma de nossas principais empresas parceiras, para você pode aproveitar as ondas do mar.' 
    },
    { 
      nome: 'Óculos', 
      pontos: 500, 
      imagem: oculos, 
      descricao: 'Óculos de sol feitos com plástico reciclado do oceano, para que você possa curtir o verão com estilo.' 
    },
    { 
      nome: 'Mergulho', 
      pontos: 100, 
      imagem: mergulho, 
      descricao: 'Um ecobag resistente e sustentável para suas compras. Feito com material reciclado do oceano.' 
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Produtos para Troca</h1>
      <div className={styles.produtos}>
        {produtos.map((produto) => (
          <div key={produto.nome} className={styles.produto}>
            <Image src={produto.imagem} alt={produto.nome} className={styles.ProdutoImagem} />
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <div className={styles.pontos}>
              <Image src={coin} alt="moeda" className={styles.imagem} />
              <p className={styles.pts}>{produto.pontos} pontos</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
