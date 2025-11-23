"use client";

import { useState } from "react";
import { uploadHistory } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function HistoryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHistory = uploadHistory.filter((item) =>
    item.fileName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex items-center justify-between pt-4 sm:pt-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold tracking-tight">Upload History</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by file name..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>
            A list of your recent file uploads and their summary.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File Name</TableHead>
                <TableHead>Upload Date</TableHead>
                <TableHead className="text-right">Total Count</TableHead>
                <TableHead className="text-right">Avg. Flowrate (m³/h)</TableHead>
                <TableHead className="text-right">Avg. Pressure (bar)</TableHead>
                <TableHead className="text-right">Avg. Temp (°C)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.fileName}</TableCell>
                  <TableCell>{item.uploadDate}</TableCell>
                  <TableCell className="text-right">{item.summary.totalCount}</TableCell>
                  <TableCell className="text-right">{item.summary.avgFlowrate.toFixed(1)}</TableCell>
                  <TableCell className="text-right">{item.summary.avgPressure.toFixed(1)}</TableCell>
                  <TableCell className="text-right">{item.summary.avgTemperature.toFixed(1)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
