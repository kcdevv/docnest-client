import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    try {
      // Step 1: Get the presigned URL
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/upload`, {
        fileName: file.name,
        fileType: file.type,
      });

      const { url } = response.data;

      // Step 2: Upload the file to S3 using the presigned URL
      const uploadResponse = await axios.put(url, file, {
        headers: {
          "Content-Type": file.type,
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total!) * 100
          );
          setUploadProgress(progress);
        },
      });

      if (uploadResponse.status === 200) {
        setUploadedUrl(url.split("?")[0]); // The uploaded file URL without query parameters
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file.");
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Upload File</h1>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 border p-2 rounded"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Upload
      </button>
      {uploadProgress !== null && (
        <p className="mt-2 text-sm">
          Upload Progress: {uploadProgress}%
        </p>
      )}
      {uploadedUrl && (
        <p className="mt-4 text-sm">
          File uploaded successfully!{" "}
          <a
            href={uploadedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View File
          </a>
        </p>
      )}
    </div>
  );
};

export default Upload;
