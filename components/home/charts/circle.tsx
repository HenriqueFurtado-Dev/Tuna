// nextjs13 - works
"use client";
import { useEffect, useState } from "react";

export default function ApexChart(props: any) {
  const [Chart, setChart] = useState<any>();
  const hasType = typeof props?.type !== "undefined";

  useEffect(() => {
    const fetchChart = async () => {
      const mod = await import("react-apexcharts");
      setChart(mod.default);
    };

    fetchChart();
  }, []);

  return hasType && Chart && (
    <div>
      <Chart
        type="pie"
        width={380}
        series={[14.1, 11.9, 9.4, 9.1, 7.9, 7.6, 6.1, 33.9]}
        options={{
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
        }}
      />
    </div>
  );
}
