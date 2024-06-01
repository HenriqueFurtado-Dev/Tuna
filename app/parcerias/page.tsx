// components/ParceriaForm.tsx
'use client'

import React, { useState } from 'react';
import styles from './ParceriaForm.module.css';
import axios from 'axios';

interface ParceriaFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  nomeResponsavel: string;
  nomeEmpresa: string;
  segmento: string;
  quantidadeFuncionarios: number;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numeroEndereco: string;
  concordaTermos: boolean;
}

const ParceriaForm: React.FC<ParceriaFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    nomeResponsavel: '',
    nomeEmpresa: '',
    segmento: 'tecnologia',
    quantidadeFuncionarios: 0,
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numeroEndereco: '',
    concordaTermos: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: val
    }));
  };

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      cep: value
    }));
  };

  const buscarCEP = async () => {
    if (formData.cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${formData.cep}/json/`);
        const data = response.data;
        setFormData(prevState => ({
          ...prevState,
          estado: data.uf || '',
          cidade: data.localidade || '',
          bairro: data.bairro || '',
          rua: data.logradouro || ''
        }));
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    } else {
      console.error('CEP inválido.');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <main className={styles.Mainform}>
      <section className={styles.Sectionform}>
        <h2>Formulário de parcerias</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, magni. Hic aperiam excepturi sit, ducimus deleniti amet aliquam beatae blanditiis omnis tempora autem repudiandae accusantium rerum? Natus nostrum labore maxime.</p>
        <div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              Nome Responsável:
              <input placeholder='Nome da pessoa' type="text" name="nomeResponsavel" value={formData.nomeResponsavel} onChange={handleChange} />
            </label>
            <label>
              Nome Empresa:
              <input placeholder='Nome da empresa'  type="text" name="nomeEmpresa" value={formData.nomeEmpresa} onChange={handleChange} />
            </label>
            <label>
              Segmento:
              <select name="segmento" value={formData.segmento}  onChange={handleChange} className={styles.segmento}>
                <option value="tecnologia">Tecnologia</option>
                <option value="surf">Surf</option>
                <option value="saude">Saúde</option>
              </select>
            </label>
            <label>
              Quantidade de Funcionários:
              <input placeholder='Quantidade aproximada' type="number" name="quantidadeFuncionarios" value={formData.quantidadeFuncionarios} onChange={handleChange} />
            </label>
            <label className={styles.cepBusca}>
              <p>CEP:</p>
              <input placeholder='Digite o CEP para preencher os campos' type="text" name="cep" value={formData.cep} onChange={handleCEPChange} />
              <button className={styles.btnBuscar} type="button" onClick={buscarCEP}>Buscar</button>
            </label>
            <label>
              Estado:
              <input type="text" name="estado" value={formData.estado} onChange={handleChange} disabled />
            </label>
            <label>
              Cidade:
              <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} disabled />
            </label>
            <label>
              Bairro:
              <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} disabled />
            </label>
            <label>
              Rua:
              <input type="text" name="rua" value={formData.rua} onChange={handleChange} disabled />
            </label>
            <label>
              Número do Endereço:
              <input placeholder='Digite o numero' type="text" name="numeroEndereco" value={formData.numeroEndereco} onChange={handleChange} />
            </label> 
            <label>
              Referência:
              <input placeholder='Locais próximos' type="text" name="numeroEndereco" value={formData.numeroEndereco} onChange={handleChange} />
            </label> 
            <label className={styles.termos}>
              <input type="checkbox" name="concordaTermos" checked={formData.concordaTermos} onChange={handleChange} />
              <p>Eu estou ciente e concordo com os termos de uso e política de privacidade do site, as informações coletadas serão utilizadas para fins de parceria.</p>
            </label>
            <button className={styles.submit} type="submit">Enviar informações de parceria</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ParceriaForm;
