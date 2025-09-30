import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";



console.log("Files component loaded");
const AllFiles = () => {

  console.log("AllFiles component rendered");
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.toString()); 
  const folder = searchParams.get("folder"); // example: "compsem5tcspdf"
  console.log("Folder parameter:", folder);

 
  const [files, setFiles] = useState([]);

  useEffect(() => {
  const fetchFiles = async () => {
    if (!folder) return;
    try {
      const response = await fetch(`http://localhost:3000/file/getallfiles/${folder}`);
      const data = await response.json();
      setFiles(data);
    } catch (err) {
      console.error("Error fetching files:", err);
    }
  };

  fetchFiles();
}, [folder]);  

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Files</h2>
      {files.length === 0 && <p>No files found</p>}
      <ul>
        {files.map((file) => (
          <li key={file.id} style={{ marginBottom: "10px" }}>
            <span style={{ marginRight: "10px" }}>{file.name}</span>
            <a
              href={file.url}
              download={file.name} // this triggers download
            >
              <button>Download</button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllFiles;
