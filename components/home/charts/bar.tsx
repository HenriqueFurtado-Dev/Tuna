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
