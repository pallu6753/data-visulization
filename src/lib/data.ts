export type Equipment = {
  id: string;
  name: string;
  type:
    | 'Pump'
    | 'Compressor'
    | 'Valve'
    | 'HeatExchanger'
    | 'Reactor'
    | 'Condenser'
    | 'Filter'
    | 'Vessel';
  flowrate: number;
  pressure: number;
  temperature: number;
};

export type SummaryStats = {
  totalCount: number;
  avgFlowrate: number;
  avgPressure: number;
  avgTemperature: number;
  typeDistribution: {
    type: string;
    count: number;
  }[];
  maxFlowrate: number;
  minFlowrate: number;
  medianTemperature: number;
  pressureStdDev: number;
};

export type UploadHistory = {
  id: string;
  fileName: string;
  uploadDate: string;
  summary: Omit<SummaryStats, 'typeDistribution' | 'maxFlowrate' | 'minFlowrate' | 'medianTemperature' | 'pressureStdDev'>;
};

export const sampleEquipmentData: Equipment[] = [
    { id: 'EQ-001', name: 'Pump-1', type: 'Pump', flowrate: 120, pressure: 5.2, temperature: 110 },
    { id: 'EQ-002', name: 'Compressor-1', type: 'Compressor', flowrate: 95, pressure: 8.4, temperature: 95 },
    { id: 'EQ-003', name: 'Valve-1', type: 'Valve', flowrate: 60, pressure: 4.1, temperature: 105 },
    { id: 'EQ-004', name: 'HeatExchanger-1', type: 'HeatExchanger', flowrate: 150, pressure: 6.2, temperature: 130 },
    { id: 'EQ-005', name: 'Pump-2', type: 'Pump', flowrate: 132, pressure: 5.6, temperature: 118 },
    { id: 'EQ-006', name: 'Valve-2', type: 'Valve', flowrate: 58, pressure: 4.0, temperature: 102 },
    { id: 'EQ-007', name: 'Reactor-1', type: 'Reactor', flowrate: 140, pressure: 7.5, temperature: 140 },
    { id: 'EQ-008', name: 'Pump-3', type: 'Pump', flowrate: 125, pressure: 5.3, temperature: 115 },
    { id: 'EQ-009', name: 'Condenser-1', type: 'Condenser', flowrate: 160, pressure: 6.8, temperature: 125 },
    { id: 'EQ-010', name: 'Compressor-2', type: 'Compressor', flowrate: 100, pressure: 8.0, temperature: 98 },
    { id: 'EQ-011', name: 'HeatExchanger-2', type: 'HeatExchanger', flowrate: 155, pressure: 6.3, temperature: 132 },
    { id: 'EQ-012', name: 'Valve-3', type: 'Valve', flowrate: 62, pressure: 4.2, temperature: 107 },
    { id: 'EQ-013', name: 'Pump-4', type: 'Pump', flowrate: 130, pressure: 5.9, temperature: 119 },
    { id: 'EQ-014', name: 'Reactor-2', type: 'Reactor', flowrate: 145, pressure: 7.2, temperature: 138 },
    { id: 'EQ-015', name: 'Condenser-2', type: 'Condenser', flowrate: 165, pressure: 6.9, temperature: 128 },
  ];

function calculateSummaryStats(data: Equipment[]): SummaryStats {
  const totalCount = data.length;
  if (totalCount === 0) {
    return {
      totalCount: 0,
      avgFlowrate: 0,
      avgPressure: 0,
      avgTemperature: 0,
      typeDistribution: [],
      maxFlowrate: 0,
      minFlowrate: 0,
      medianTemperature: 0,
      pressureStdDev: 0,
    };
  }

  const flowrates = data.map(item => item.flowrate);
  const pressures = data.map(item => item.pressure);
  const temperatures = data.map(item => item.temperature);

  const avgFlowrate = flowrates.reduce((sum, item) => sum + item, 0) / totalCount;
  const avgPressure = pressures.reduce((sum, item) => sum + item, 0) / totalCount;
  const avgTemperature = temperatures.reduce((sum, item) => sum + item, 0) / totalCount;

  const typeCounts = data.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const typeDistribution = Object.entries(typeCounts).map(([type, count]) => ({
    type,
    count,
  }));
  
  const maxFlowrate = Math.max(...flowrates);
  const minFlowrate = Math.min(...flowrates);

  const sortedTemperatures = [...temperatures].sort((a, b) => a - b);
  const mid = Math.floor(totalCount / 2);
  const medianTemperature = totalCount % 2 === 0 ? (sortedTemperatures[mid - 1] + sortedTemperatures[mid]) / 2 : sortedTemperatures[mid];
  
  const meanPressure = avgPressure;
  const pressureStdDev = Math.sqrt(pressures.map(x => Math.pow(x - meanPressure, 2)).reduce((a, b) => a + b) / totalCount);

  return {
    totalCount,
    avgFlowrate,
    avgPressure,
    avgTemperature,
    typeDistribution,
    maxFlowrate,
    minFlowrate,
    medianTemperature,
    pressureStdDev,
  };
}

export const summaryStats: SummaryStats = calculateSummaryStats(sampleEquipmentData);

export const uploadHistory: UploadHistory[] = [
  { id: 'up-1', fileName: 'dataset_batch_alpha.csv', uploadDate: '2024-07-28', summary: { totalCount: 8, avgFlowrate: 281.6, avgPressure: 7.0, avgTemperature: 180.3 } },
  { id: 'up-2', fileName: 'process_stream_q3.csv', uploadDate: '2024-07-25', summary: { totalCount: 12, avgFlowrate: 310.2, avgPressure: 8.1, avgTemperature: 210.9 } },
  { id: 'up-3', fileName: 'reactor_feed_data.csv', uploadDate: '2024-07-22', summary: { totalCount: 5, avgFlowrate: 150.0, avgPressure: 10.5, avgTemperature: 320.0 } },
  { id: 'up-4', fileName: 'daily_readings_final.csv', uploadDate: '2024-07-21', summary: { totalCount: 25, avgFlowrate: 250.5, avgPressure: 6.5, avgTemperature: 150.7 } },
  { id: 'up-5', fileName: 'archived_data_2023.csv', uploadDate: '2024-07-19', summary: { totalCount: 150, avgFlowrate: 275.8, avgPressure: 7.2, avgTemperature: 190.4 } },
];
