import React, { useEffect, useRef } from 'react';
import { Copy } from 'lucide-react';

// Component Imports
import RenderCloudinaryImage from '../../components/RenderCloudinaryImage.jsx';

const PhotoUploadPopup = ({ photoUploadingErrors, setPhotoUploadingErrors, cloudinaryURL, photoUploading, setCloudinaryURL, setPhotoUploading, handleCopyClick }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setCloudinaryURL(false);
        setPhotoUploading(false);
        setPhotoUploadingErrors(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setCloudinaryURL, setPhotoUploading]);

  return (
    <>
      {(cloudinaryURL || photoUploading || photoUploadingErrors) && (
        <div className="upload-overlay">
          <div className="upload-popup" ref={popupRef}>
            {photoUploadingErrors && (
              <p className="photo-upload-error-title">{photoUploadingErrors}</p>
            )}
            {photoUploading && (
              <p>Please wait while we upload your photo...</p>
            )}
            {cloudinaryURL && (
              <>
                <p className="photo-upload-success-title">Your photo has been uploaded successfully and copied to your clipboard!</p>
                <RenderCloudinaryImage imageUrl={cloudinaryURL} maxWidth="15vw" />
                <p className="cloudinary-url-container">
                  <div className="cloudinary-url">{cloudinaryURL}</div>
                  <div className="copy-button-container">
                    <button onClick={handleCopyClick} className="copy-button"><Copy /></button>
                    <div className="copy-word">Copy</div>
                  </div>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoUploadPopup;