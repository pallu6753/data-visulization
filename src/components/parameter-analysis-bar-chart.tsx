"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { summaryStats } from "@/lib/data"

export function ParameterAnalysisBarChart() {
  const data = [
    { name: "Flowrate", min: summaryStats.minFlowrate, max: summaryStats.maxFlowrate, avg: summaryStats.avgFlowrate },
    { name: "Pressure", avg: summaryStats.avgPressure },
    { name: "Temp.", avg: summaryStats.avgTemperature, median: summaryStats.medianTemperature },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
            contentStyle={{
                background: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
            }}
        />
        <Legend />
        <Bar dataKey="max" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
        <Bar dataKey="avg" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
        <Bar dataKey="min" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
        <Bar dataKey="median" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
