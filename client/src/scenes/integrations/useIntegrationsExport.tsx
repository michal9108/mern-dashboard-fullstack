import { useRef } from "react";

const useIntegrationsExport = () => {
  const downloadAnchorRef = useRef<HTMLAnchorElement>(null);

  const handleExportClick = () => {
    // Generate data to export (dummy example)
    const dataToExport = "This is the data to export";

    // Create a blob with the data
    const blob = new Blob([dataToExport], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Set the anchor element's href and click it to trigger download
    if (downloadAnchorRef.current) {
      downloadAnchorRef.current.href = url;
      downloadAnchorRef.current.download = "exported-dummy-data.txt";
      downloadAnchorRef.current.click();
    }

    // Revoke the object URL to free up memory
    URL.revokeObjectURL(url);
  };

  return { handleExportClick, downloadAnchorRef };
};

export default useIntegrationsExport;
