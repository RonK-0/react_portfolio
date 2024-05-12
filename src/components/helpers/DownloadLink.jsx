import React from "react";
import { FaDownload } from "react-icons/fa";

export const DownloadLink = ({ url, fileName }) => {
  const handleDownload = () => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName || "downloaded-file";
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };

  return (
    <>
      <button type="button" onClick={handleDownload}>
        <FaDownload />
      </button>
    </>
  );
};
// modified
// based on: https://learnreactui.dev/contents/how-to-download-a-file-in-react
