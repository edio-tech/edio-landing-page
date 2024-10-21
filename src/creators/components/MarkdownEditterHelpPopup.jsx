import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as Form from "@radix-ui/react-form";
import { CircleHelp, Upload } from 'lucide-react';

import genericAPI from '../../api/generic.js';



import '../../styles/creators/components/markdowneditorhelppopup.css';

const MarkdownEditorHelpPopup = ({goal_id}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Drag and drop functionality 

  const [uploadedPicture, setUploadedPicture] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setUploadedPicture(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxFiles: 1,
  });

    useEffect(() => {
        handlePhotoUpload();
    }, [uploadedPicture]);

    const [photoUploading, setPhotoUploading] = useState(false);

    const [cloudinaryURL, setCloudinaryURL] = useState(null);


    const handlePhotoUpload = async () => {
        setPhotoUploading(true);

        try
        {
            const body = {
                photo: uploadedPicture
            }
            const res = await genericAPI.uploadPhotoToCloudinary(goal_id, body);

            setCloudinaryURL(res.data.cloudinary_url);

        } catch (error) {
            console.error('Error uploading photo:', error);

        } finally {
            setPhotoUploading(false);
        }
    };

  return (
    <>
    {cloudinaryURL && (
        <div className="upload-overlay">
            <div className="upload-popup">
                <p>Your photo has been uploaded successfully!</p>
                <p>Cloudinary URL: {cloudinaryURL}</p>
                <button onClick={() => setCloudinaryURL(null)}>Close</button>
            </div>
        </div>
    )}
    
    <div className = "placeholder-divs"></div>
    <Form.Root>
        <Form.Field name="profile_pic">
            <div {...getRootProps()} className = "photo-upload-container mgg">
                <input {...getInputProps()} />
                { isDragActive ? ( <div className = "photo-upload-text-1">Release to upload</div> ) :
                (
                    <>
                        <div className = "photo-upload-text-1">Drag and drop photo to upload</div>
                        <Upload className = "photo-upload-icon"/>
                        <div className = "photo-upload-text-2">or</div>
                        <button type="button" className = "photo-upload-button">Browse</button>
                    </>
                ) 
                }
            </div>
        </Form.Field>
    </Form.Root>

    <div className = "placeholder-divs"></div>

    <div className="help-container">
      <button className="help-button" onClick={() => setIsOpen(!isOpen)}>
        <CircleHelp />
      </button>
      {isOpen && (
        <div className="popup" ref={popupRef}>
          <div className = "popup-content">
            <h3>Instructions:</h3>
            <p className="title"># - For Title</p>
            <p className="heading">## - For Heading</p>
            <p className="subheading">### - For SubHeading</p>
            <p className="bold">**Word** - To render word in <b>Bold</b></p>
          </div>
        </div>
      )}

    </div>
    </>
  );
};

export default MarkdownEditorHelpPopup;