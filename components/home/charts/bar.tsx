// nextjs13 - works
"use client";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function ApexChart(props: any) {
  const [Chart, setChart] = useState<any>();
  const hasType = typeof props?.type !== "undefined";

  useEffect(() => {
    const fetchChart = async () => {
      const mod = await import("react-apexcharts");
      const ChartComponent = mod.default;
      setChart(() => ChartComponent);
    };

    fetchChart();
  }, []);

  return hasType && Chart && (
    <div className={props.className}>
      <Chart
        options={props.options}
        series={props.series}
        type={props.type}
        width={props.width}
        height={props.height}
      />
    </div>
  );
}
