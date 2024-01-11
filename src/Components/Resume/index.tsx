import React from 'react';
import { Link } from 'react-router-dom';

export const DownloadButton: React.FC<{ filename: string }> = ({ filename }) => {
  return (
    <div>
      <Link to={`/download/${filename}`} target="_blank" download>
        Download
      </Link>
      <Link to={`/open/${filename}`} target="_blank">
        Open
      </Link>
    </div>
  );
};

