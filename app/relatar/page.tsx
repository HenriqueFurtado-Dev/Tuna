'use client'

import React, { useState } from 'react';
import styles from './CadastroRelatorio.module.css';
import axios from 'axios';

const CadastroRelatorio: React.FC = () => {
  const [local, setLocal] = useState('');
  const [tipodeLixo, setTipoDeLixo] = useState('');
  const [quantidade, setQuantidade] = useState<number | string>('');
  const [data, setData] = useState('');
  const [mapSrc, setMapSrc] = useState('https://www.google.com/maps/embed/v1/view?key=AIzaSyASCXiUWjTfJhbM5F75DMK0lVbhuTbC1ko&center=-14.235004,-51.92528&zoom=4');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    console.log('Enviando requisição para cadastrar relatório...');
  
    try {
      const response = await axios.post('http://localhost:8080/relatorios', {
        local,
        tipodeLixo, // Corrigido para tipodeLixo
        quantidade: Number(quantidade), // Convertido para número
        data
      });
  
      console.log('Resposta recebida:', response);
  
      if (response.status === 200 || response.status === 201) {
        setLocal('');
        setTipoDeLixo(''); // Corrigido para setTipodeLixo
        setQuantidade('');
        setData('');
        setErrorMessage('');
        alert('Relatório cadastrado com sucesso!');
      } else {
        alert('Erro ao cadastrar relatório.');
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
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="local">Local</label>
            <input
              type="text"
              id="local"
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
              value={tipodeLixo}
              onChange={(e) => setTipoDeLixo(e.target.value)}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="quantidade">Quantidade</label>
            <input
              type="number"
              id="quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="data">Data</label>
            <input
              type="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
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
    </main>
  );
};

export default CadastroRelatorio;
