"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { File as FileIcon, UploadCloud } from "lucide-react";

export function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    setIsLoading(true);
    // Simulate API upload
    setTimeout(() => {
      setIsLoading(false);
      setFile(null);
      toast({
        title: "Upload Successful",
        description: `${file.name} has been processed.`,
      });
    }, 1500);
  };

  return (
    <div className="border-2 border-dashed border-muted rounded-lg p-6 w-full text-center bg-card">
      <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
      <h3 className="mt-2 text-sm font-medium text-foreground">
        Upload your CSV file
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Drag and drop or click to select a file.
      </p>
      <div className="mt-4">
        <Label
          htmlFor="file-upload"
          className="relative cursor-pointer rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm font-medium"
        >
          <span>Select File</span>
          <Input
            id="file-upload"
            name="file-upload"
            type="file"
            accept=".csv"
            className="sr-only"
            onChange={handleFileChange}
          />
        </Label>
      </div>

      {file && (
        <div className="mt-4 text-sm text-muted-foreground text-left">
          <div className="flex items-center gap-2 p-2 border rounded-md bg-muted/50">
            <FileIcon className="h-5 w-5 flex-shrink-0" />
            <span className="truncate flex-1">{file.name}</span>
            <Button
              variant="default"
              size="sm"
              onClick={handleUpload}
              disabled={isLoading}
            >
              {isLoading ? "Uploading..." : "Upload"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
