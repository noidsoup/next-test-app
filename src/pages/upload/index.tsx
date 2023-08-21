import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";
import styles from "./Upload.module.css";

const Upload: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState<boolean>(true);
  const [selectedFiles, setSelectedFiles] = useState<(File | null)[]>([
    null,
    null,
    null,
  ]);

  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleFileChange = (index: number) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const updatedSelectedFiles = [...selectedFiles];
      updatedSelectedFiles[index] = file;
      setSelectedFiles(updatedSelectedFiles);

      // Create a URL for the selected image and set it in the previewImages array
      const imageUrl = URL.createObjectURL(file);
      const updatedPreviewImages = [...previewImages];
      updatedPreviewImages[index] = imageUrl;
      setPreviewImages(updatedPreviewImages);
    }
  };

  const handleUpload = () => {
    const formData = new FormData();

    selectedFiles.forEach((file, index) => {
      if (file) {
        formData.append("images", file);
      }
    });

    if (formData.getAll("images").length === 0) {
      alert("Please select some files to upload.");
      return;
    }

    console.log("formData", formData.getAll("images"));
    /*     fetch("/upload-endpoint", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Files uploaded successfully.");
          setIsProcessing(true);
        } else {
          alert("Failed to upload files.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while uploading files.");
      }); */
  };

  return (
    <>
      {!isProcessing ? (
        <div
          className={`${styles.background} ${styles.main} ${styles.background}`}
        >
          {selectedFiles.map((_, index) => (
            <div key={index}>
              {previewImages[index] && (
                <Image
                  src={previewImages[index]}
                  alt="Image Preview"
                  width={100}
                  height={100}
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange(index)}
              />
              <br />
            </div>
          ))}
          <Button primary onClick={handleUpload}>
            Upload
          </Button>
        </div>
      ) : (
        <div className={`${styles.backgroundProcessing} ${styles.main}`}></div>
      )}
    </>
  );
};

export default Upload;
