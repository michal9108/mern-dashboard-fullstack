import React from "react";
import { useRef } from "react";


const useIntegrationsImport = () => {

    const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportClick = () => {
    // Trigger click event on file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file selection
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Process the selected file here
      console.log("Selected file:", selectedFile);
    }
  };

  return {handleImportClick, handleFileChange, fileInputRef};
};

export default useIntegrationsImport;
