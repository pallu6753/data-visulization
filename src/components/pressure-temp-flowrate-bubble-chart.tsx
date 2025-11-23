"use client"

import { Scatter, ScatterChart, ResponsiveContainer, XAxis, YAxis, ZAxis, Tooltip, Legend } from "recharts"
import { sampleEquipmentData } from "@/lib/data"

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export function PressureTempFlowrateBubbleChart() {
  
  const types = Array.from(new Set(sampleEquipmentData.map(item => item.type)));
  const data = types.map((type) => {
    return {
      type: type,
      data: sampleEquipmentData.filter(item => item.type === type)
    }
  });


  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis 
            type="number" 
            dataKey="pressure" 
            name="Pressure" 
            unit="bar" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
        />
        <YAxis 
            type="number" 
            dataKey="temperature" 
            name="Temperature" 
            unit="°C" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
        />
        <ZAxis type="number" dataKey="flowrate" range={[20, 150]} name="Flowrate" unit="m³/h" />
        <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            contentStyle={{
                background: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
            }}
        />
        <Legend />
        {data.map((series, index) => (
          <Scatter key={series.type} name={series.type} data={series.data} fill={COLORS[index % COLORS.length]} />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  )
}
