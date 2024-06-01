'use client'

import React from 'react';
import ReactApexChart from 'react-apexcharts';
import styles from './Chart.module.css'

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [80, 50, 40],
      options: {
        chart: {
          width: 380,
          type: 'polarArea'
        },
        labels: ['Lixo dos oceanos', 'demais', 'aaa'],
        fill: {
          opacity: 1
        },
        stroke: {
          width: 1,
          colors: undefined
        },
        yaxis: {
          show: false
        },
        legend: {
          position: 'bottom'
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            },
            spokes: {
              strokeWidth: 0
            }
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
        <ReactApexChart options={this.state.options} series={this.state.series} type="polarArea" width={380} />
      </div>
    );
  }
}

export default ApexChart;
