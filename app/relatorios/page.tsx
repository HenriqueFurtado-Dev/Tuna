// pages/relatorios.tsx
'use client'

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
  const [editingRelatorio, setEditingRelatorio] = useState<Relatorio | null>(null);

  useEffect(() => {
    fetchRelatorios();
  }, []);

  const fetchRelatorios = async () => {
    try {
      const response = await axios.get<Relatorio[]>('http://localhost:8080/relatorios', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      setRelatorios(response.data);
    } catch (error) {
      console.error('Erro ao buscar relatórios:', error);
    }
  };

  const handleDeleteRelatorio = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/relatorios/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      fetchRelatorios();
    } catch (error) {
      console.error('Erro ao deletar relatório:', error);
    }
  };

  const handleEditRelatorio = (relatorio: Relatorio) => {
    setEditingRelatorio(relatorio);
  };

  const handleSave = async () => {
    if (editingRelatorio) {
      try {
        await axios.put(`http://localhost:8080/relatorios`, editingRelatorio, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        });
        fetchRelatorios();
        setEditingRelatorio(null);
      } catch (error) {
        console.error('Erro ao salvar relatório:', error);
      }
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Relatórios</h1>
        <div className={styles.table}>
          {relatorios.map((relatorio) => (
            <div className={styles.row} key={relatorio.id}>
              <div className={styles.cell}>{relatorio.local}</div>
              <div className={styles.cell}>{relatorio.tipodeLixo}</div>
              <div className={styles.cell}>{relatorio.quantidade}</div>
              <div className={styles.cell}>{relatorio.data}</div>
              <div className={`${styles.cell} ${styles.buttons}`}>
                <button className={styles.editButton} onClick={() => handleEditRelatorio(relatorio)}>Editar</button>
                <button className={styles.deleteButton} onClick={() => handleDeleteRelatorio(relatorio.id)}>X</button>
              </div>
            </div>
          ))}
        </div>

        {editingRelatorio && (
          <div className={styles.form}>
            <h2>Editar Relatório</h2>
            <input
              type="text"
              value={editingRelatorio.local}
              onChange={(e) => setEditingRelatorio({ ...editingRelatorio, local: e.target.value })}
            />
            <input
              type="text"
              value={editingRelatorio.tipodeLixo}
              onChange={(e) => setEditingRelatorio({ ...editingRelatorio, tipodeLixo: e.target.value })}
            />
            <input
              type="number"
              value={editingRelatorio.quantidade}
              onChange={(e) => setEditingRelatorio({ ...editingRelatorio, quantidade: +e.target.value })}
            />
            <input
              type="date"
              value={editingRelatorio.data}
              onChange={(e) => setEditingRelatorio({ ...editingRelatorio, data: e.target.value })}
            />
            <button onClick={handleSave}>Salvar</button>
            <button onClick={() => setEditingRelatorio(null)}>Cancelar</button>
          </div>
        )}
      </div>
    </main>
  );
}
