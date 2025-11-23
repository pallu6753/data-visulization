"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileUpload } from "@/components/file-upload";
import { Settings, Thermometer, Wind, Gauge, HelpCircle, Upload } from "lucide-react";
import { EquipmentTypePieChart } from "@/components/equipment-type-pie-chart";
import { ParameterAnalysisBarChart } from "@/components/parameter-analysis-bar-chart";
import { PressureTempFlowrateBubbleChart } from "@/components/pressure-temp-flowrate-bubble-chart";
import { FlowrateLineChart } from "@/components/flowrate-line-chart";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { sampleEquipmentData, type Equipment } from "@/lib/data";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function DashboardPage() {

  const generatePdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Equipment Data Report", 14, 22);
    doc.setFontSize(12);
    doc.text(`Report generated on: ${new Date().toLocaleDateString()}`, 14, 30);

    autoTable(doc, {
      startY: 35,
      head: [['ID', 'Name', 'Type', 'Flowrate (m³/h)', 'Pressure (bar)', 'Temp (°C)']],
      body: sampleEquipmentData.map(item => [
        item.id,
        item.name,
        item.type,
        item.flowrate,
        item.pressure,
        item.temperature,
      ]),
      headStyles: { fillColor: [35, 45, 63] }, // primary color
    });

    doc.save('equipment-report.pdf');
  };

  return (
    <main className="flex-1 p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Showing analytics for dataset_1763871172348.csv</p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={generatePdf}>Generate PDF Report</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Equipment
            </CardTitle>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50</div>
            <p className="text-xs text-muted-foreground">units in system</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Flowrate</CardTitle>
            <Wind className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124.23</div>
            <p className="text-xs text-muted-foreground">m³/h</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Pressure</CardTitle>
            <Gauge className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.39</div>
            <p className="text-xs text-muted-foreground">bar</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Temperature
            </CardTitle>
            <Thermometer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">148.25</div>
            <p className="text-xs text-muted-foreground">°C</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mt-4 lg:mt-6">
        <div className="lg:col-span-2">
           <Tabs defaultValue="overview" className="mt-0">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="data-table">Data Table</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Pressure, Temp & Flowrate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PressureTempFlowrateBubbleChart />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Equipment Flowrate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FlowrateLineChart />
                  </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                    <CardTitle>Equipment Type Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <EquipmentTypePieChart />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                    <CardTitle>Parameter Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <ParameterAnalysisBarChart />
                    </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="data-table">
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Equipment Data</CardTitle>
                  <CardDescription>
                    Detailed information about each piece of equipment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead className="text-right">Flowrate (m³/h)</TableHead>
                        <TableHead className="text-right">Pressure (bar)</TableHead>
                        <TableHead className="text-right">Temp (°C)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sampleEquipmentData.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell className="text-right">{item.flowrate}</TableCell>
                          <TableCell className="text-right">{item.pressure}</TableCell>
                          <TableCell className="text-right">{item.temperature}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <Card className="lg:col-span-1 flex flex-col">
            <CardHeader>
            <CardTitle>File Upload</CardTitle>
            <CardDescription>
                Upload your CSV file for processing
            </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
            <FileUpload />
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
