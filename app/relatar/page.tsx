'use client'

// src/pages/cadastro-relatorio.tsx
import React, { useState } from 'react';
import styles from './CadastroRelatorio.module.css';

const CadastroRelatorio: React.FC = () => {
  const [local, setLocal] = useState('');
  const [tipoDeLixo, setTipoDeLixo] = useState('');
  const [quantidade, setQuantidade] = useState<number | string>('');
  const [data, setData] = useState('');
  const [mapSrc, setMapSrc] = useState('https://www.google.com/maps/embed/v1/view?key=AIzaSyASCXiUWjTfJhbM5F75DMK0lVbhuTbC1ko&center=-14.235004,-51.92528&zoom=4'); // Centro do Brasil
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/reports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ local, tipoDeLixo, quantidade, data }),
    });

    if (response.ok) {
      setLocal('');
      setTipoDeLixo('');
      setQuantidade('');
      setData('');
      setErrorMessage('');
      alert('Relatório cadastrado com sucesso!');
    } else {
      alert('Erro ao cadastrar relatório.');
    }
  };

  const updateMap = async (address: string) => {
    const apiKey = 'AIzaSyASCXiUWjTfJhbM5F75DMK0lVbhuTbC1ko'; // Substitua com sua chave de API do Google Maps
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
            <label htmlFor="tipoDeLixo">Tipo de Lixo</label>
            <input
              type="text"
              id="tipoDeLixo"
              value={tipoDeLixo}
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
