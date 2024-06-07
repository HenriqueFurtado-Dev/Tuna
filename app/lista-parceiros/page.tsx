'use client'
// ParceriaListPage.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ParceriaListPage.module.css';

interface Parceria {
  id: number;
  nomeResponsavel: string;
  nomeEmpresa: string;
  segmento: string;
  quantidadeFuncionarios: number;
  concordaTermos: boolean;
  endereco: {
    cep: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numeroEndereco: string;
    referencia: string;
  };
}

const ParceriaListPage: React.FC = () => {
  const [parcerias, setParcerias] = useState<Parceria[]>([]);

  useEffect(() => {
    const fetchParcerias = async () => {
      try {
        const response = await axios.get('http://localhost:8080/parceiros');
        setParcerias(response.data);
      } catch (error) {
        console.error('Erro ao buscar parcerias:', error);
      }
    };

    fetchParcerias();
  }, []);

  return (
    <main className={styles.Main}>
      <section className={styles.Section}>
        <h2>Lista de Parcerias</h2>
        <table className={styles.Table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome do Responsável</th>
              <th>Nome da Empresa</th>
              <th>Segmento</th>
              <th>Quantidade de Funcionários</th>
              <th>Concorda com os Termos</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {parcerias.map(parceria => (
              <tr key={parceria.id}>
                <td>{parceria.id}</td>
                <td>{parceria.nomeResponsavel}</td>
                <td>{parceria.nomeEmpresa}</td>
                <td>{parceria.segmento}</td>
                <td>{parceria.quantidadeFuncionarios}</td>
                <td>{parceria.concordaTermos ? 'Sim' : 'Não'}</td>
                <td>
                  {`${parceria.endereco.rua}, ${parceria.endereco.numeroEndereco}, ${parceria.endereco.bairro}, ${parceria.endereco.cidade} - ${parceria.endereco.estado}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default ParceriaListPage;
