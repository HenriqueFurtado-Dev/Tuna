'use client'

import React, { useState, useEffect } from 'react';
import styles from './CadastroRelatorio.module.css';
import axios from 'axios';
import Image from 'next/image';
import coin from '@/public/images/coin.gif';

const CadastroRelatorio: React.FC = () => {
  const [local, setLocal] = useState('');
  const [tipodeLixo, setTipoDeLixo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [data, setData] = useState('');
  const [mapSrc, setMapSrc] = useState('https://www.google.com/maps/embed/v1/view?key=AIzaSyASCXiUWjTfJhbM5F75DMK0lVbhuTbC1ko&center=-14.235004,-51.92528&zoom=4');
  const [errorMessage, setErrorMessage] = useState('');
  const [showReward, setShowReward] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    let quantidadeNum = 0;

    switch (quantidade) {
      case 'Pequena':
        quantidadeNum = 10;
        break;
      case 'Moderada':
        quantidadeNum = 50;
        break;
      case 'Grande':
        quantidadeNum = 100;
        break;
      case 'Muito Grande':
        quantidadeNum = 101; // Consideramos "mais de 100 itens" como 101
        break;
      default:
        quantidadeNum = 0;
    }

    console.log('Enviando requisição para cadastrar relatório...');

    try {
      const response = await axios.post('http://localhost:8080/relatorios', {
        local,
        tipodeLixo,
        quantidade: quantidadeNum,
        data
      });

      console.log('Resposta recebida:', response);

      if (response.status === 200 || response.status === 201) {
        setLocal('');
        setTipoDeLixo('');
        setQuantidade('');
        setData('');
        setErrorMessage('');

        const newPoints = parseInt(localStorage.getItem('userPoints') || '0', 10) + 10;
        localStorage.setItem('userPoints', newPoints.toString());
        window.dispatchEvent(new Event('storage'));

        setShowReward(true);
        setTimeout(() => setShowReward(false), 3000); // Ocultar recompensa após 3 segundos
        console.log('Relatório cadastrado com sucesso!');
      } else {
        console.log('Erro ao cadastrar relatório.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar relatório:', error);
      alert('Erro ao cadastrar relatório.');
    }
  };

  const updateMap = async (address: string) => {
    const apiKey = 'AIzaSyASCXiUWjTfJhbM5F75DMK0lVbhuTbC1ko';
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);
      const data = await response.json();

      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        setMapSrc(`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${location.lat},${location.lng}&zoom=15`);
        setErrorMessage('');
      } else {
        setErrorMessage('Não foi possível encontrar o local. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao buscar local:', error);
      setErrorMessage('Erro ao buscar local. Por favor, tente novamente.');
    }
  };

  const handleSearch = () => {
    if (local) {
      updateMap(local);
    } else {
      setErrorMessage('Por favor, insira um local.');
    }
  };

  return (
    <main className={styles.main}>
      <h1>Cadastro de Relatório de Lixo</h1>
      <p className={styles.infos}>Forneça informações e seja recompensado por isso através das nossas empresas parceiras</p>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="local">Local</label>
            <input
              type="text"
              id="local"
              placeholder='De preferência em que você encontrou o lixo. Ex: "Praia de Copacabana"'
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              required
            />
            <button type="button" onClick={handleSearch} className={styles.searchButton}>Pesquisar</button>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          </div>
          <div className={styles.field}>
            <label htmlFor="tipodeLixo">Tipo de Lixo</label>
            <input
              type="text"
              id="tipodeLixo"
              placeholder='Ex: "Plástico", "Papel", "Vidro"'
              value={tipodeLixo}
              onChange={(e) => setTipoDeLixo(e.target.value)}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="quantidade">Quantidade</label>
            <p>Selecione de acordo com seu entendimento qual era a quantidade de resíduos:</p>
            <select
              id="quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
            >
              <option value="" disabled>Selecione a quantidade</option>
              <option value="Pequena">Pequena (1-10 itens)</option>
              <option value="Moderada">Moderada (10-50 itens)</option>
              <option value="Grande">Grande (50-100 itens)</option>
              <option value="Muito Grande">Muito Grande (mais de 100 itens)</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="data">Data</label>
            <input
              type="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
              max={new Date().toISOString().split('T')[0]} // Define o valor máximo como a data atual
            />
          </div>
          <button type="submit" className={styles.submitButton}>Cadastrar</button>
        </form>
        <div className={styles.map}>
          <iframe
            src={mapSrc}
            className={styles.mapFrame}
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {showReward && (
        <div className={styles.reward}>
          <p>+10 pontos</p>
          <Image src={coin} alt="Uma moeda" />
        </div>
      )}
    </main>
  );
};

export default CadastroRelatorio;
