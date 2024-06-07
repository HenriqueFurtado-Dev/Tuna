'use client'

// Importe dynamic do Next.js
import dynamic from 'next/dynamic';

// Importe ApexCharts como um componente dinâmico com { ssr: false }
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Resto do seu código aqui
import React from 'react';
import styles from './Chart.module.css';
import { ApexOptions } from 'apexcharts';

// Define os tipos para as props e o state
interface ApexChartProps {}

interface ApexChartState {
  series: Array<{
    name: string;
    data: number[];
  }>;
  options: ApexOptions;
}

class ApexChart extends React.Component<ApexChartProps, ApexChartState> {
  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: [{
        name: 'Lixo nos Oceanos',
        data: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line' as 'line', // Definindo explicitamente como 'line'
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: ["1920", "1930", "1940", "1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020", "2030"],
        },
        legend: {
          labels: {
            colors: '#ffffff' // Alteração da cor das legendas para branco
          }
        }
      }
    };
  }

  render() {
    return (
      <div className={styles.bar}>
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
      </div>
    );
  }
}

export default ApexChart;
