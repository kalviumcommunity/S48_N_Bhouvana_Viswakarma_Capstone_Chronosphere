import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('File uploaded successfully!');
      console.log(response.data);
    } catch (err) {
      setError('Error uploading file.');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ padding: '20px', background: '#2c3e50', borderRadius: '8px' }}>
      <h3 style={{ color: '#ecf0f1' }}>Upload a File</h3>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleFileUpload}
        disabled={uploading}
        style={{
          marginLeft: '10px',
          padding: '10px',
          backgroundColor: '#16a085',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default FileUpload;
