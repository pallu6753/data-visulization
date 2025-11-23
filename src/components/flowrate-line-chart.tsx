"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"
import { sampleEquipmentData } from "@/lib/data"

export function FlowrateLineChart() {
  const data = sampleEquipmentData;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
            dataKey="name"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            angle={-45}
            textAnchor="end"
            height={60}
        />
        <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            label={{ value: 'Flowrate (m³/h)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip
            contentStyle={{
                background: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
            }}
        />
        <Legend />
        <Line type="monotone" dataKey="flowrate" stroke="hsl(var(--chart-1))" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
