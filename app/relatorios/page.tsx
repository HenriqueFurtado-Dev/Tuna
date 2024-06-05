// pages/relatorios.tsx
'use client'// pages/relatorios.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Relatorios.module.css';

interface Relatorio {
  id: number;
  local: string;
  tipodeLixo: string;
  quantidade: number;
  data: string;
}

export default function RelatoriosPage() {
  const [relatorios, setRelatorios] = useState<Relatorio[]>([]);

  useEffect(() => {
    fetchRelatorios();
  }, []);

  const fetchRelatorios = async () => {
    try {
      const response = await axios.get<Relatorio[]>('http://localhost:8080/relatorios');
      setRelatorios(response.data);
    } catch (error) {
      console.error('Erro ao buscar relatórios:', error);
    }
  };

  const handleDeleteRelatorio = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/relatorios/${id}`);
      fetchRelatorios();
    } catch (error) {
      console.error('Erro ao deletar relatório:', error);
    }
  };

  const handleEditRelatorio = async (id: number) => {
    // Implemente a lógica para edição do relatório aqui
    console.log('Editar relatório com ID:', id);
  };

  return (
    <main className={styles.main}>
      <h1>Relatórios</h1>
      <ul>
        {relatorios.map((relatorio) => (
          <li key={relatorio.id}>
            <div>{`Local: ${relatorio.local}`}</div>
            <div>{`Tipo de Lixo: ${relatorio.tipodeLixo}`}</div>
            <div>{`Quantidade: ${relatorio.quantidade}`}</div>
            <div>{`Data: ${relatorio.data}`}</div>
            <div className={styles.buttons}>
              <button onClick={() => handleEditRelatorio(relatorio.id)}>Editar</button>
              <button onClick={() => handleDeleteRelatorio(relatorio.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
