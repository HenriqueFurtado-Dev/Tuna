'use client'

import React from 'react';
import ReactApexChart from 'react-apexcharts';
import styles from './Chart.module.css';
import { ApexOptions } from 'apexcharts';

// Define os tipos para as props e o state
interface ApexChartProps {}

interface ApexChartState {
  series: number[]; // Série de dados é um array de números
  options: ApexOptions;
}

class ApexChart extends React.Component<ApexChartProps, ApexChartState> {
  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: [14.1, 11.9, 9.4, 9.1, 7.9, 7.6, 6.1, 33.9], // Porcentagens dos principais tipos de lixo
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: [
          'Sacolas plásticas descartáveis', 
          'Garrafas plásticas', 
          'Embalagens de comida e talheres', 
          'Pacotes', 
          'Corda sintética', 
          'Equipamento de pesca', 
          'Tampas ou lacres de plástico', 
          'Outros'
        ],
        fill: {
          opacity: 1
        },
        stroke: {
          width: 1,
          colors: undefined
        },
        legend: {
          position: 'bottom',
          labels: {
            colors: '#ffffff' // Alteração da cor das legendas para branco
          }
        },
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: 'light',
            shadeIntensity: 0.6
          }
        }
      }
    };
  }

  render() {
    return (
      <div className={styles.circle}>
        <ReactApexChart 
          options={this.state.options} 
          series={this.state.series} 
          type="pie" 
          width={380} 
        />
      </div>
    );
  }
}

export default ApexChart;
