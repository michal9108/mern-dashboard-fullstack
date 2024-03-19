import { useRef } from 'react';

const useImageUpload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    // Trigger click event on file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file selection
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Process the selected file here (e.g., upload to server)
      console.log('Selected file:', selectedFile);
    }
  };

  return { handleUploadClick, handleFileChange, fileInputRef };
};

export default useImageUpload;
