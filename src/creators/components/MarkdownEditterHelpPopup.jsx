import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as Form from "@radix-ui/react-form";
import { CircleHelp, Upload, Copy } from 'lucide-react';

// API Imports
import genericAPI from '../../api/generic.js';

// Component Imports
import PhotoUploadPopup from './PhotoUploadPopUp.jsx';

// Hook Imports
import useDevelopment from '../../hooks/useLog';

// Styling Imports
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

  const { development } = useDevelopment();

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
        if (uploadedPicture)
        {
            handlePhotoUpload();
        }
    }, [uploadedPicture]);

    const [photoUploading, setPhotoUploading] = useState(false);
    const [photoUploadingErrors, setPhotoUploadingErrors] = useState(null);
    const [cloudinaryURL, setCloudinaryURL] = useState(null);


    const handlePhotoUpload = async () => {
        setPhotoUploading(true);

        try
        {
            const formData = new FormData();
            formData.append('photo', uploadedPicture);
            const res = await genericAPI.uploadPhotoToCloudinary(goal_id, formData);

            if (res.status < 200 || res.status >= 300)
            {
                if ( development )
                {
                    console.log('Error uploading photo:', res.data);
                    setPhotoUploadingErrors(res.data.message);

                }
                setPhotoUploadingErrors("An error ocurred when trying to upload your photo. Please try again. If the issue persists, please contact support with this error status: " + res.status);
                return;
            }

            setPhotoUploading(false);
            setCloudinaryURL(res.data.cloudinary_url);
            navigator.clipboard.writeText(`$%${res.data.cloudinary_url}%$`);


        } catch (error) {
            if ( development )
            {
                console.error('Error uploading photo:', error);
                setPhotoUploadingErrors(error.message);
            }
            setPhotoUploadingErrors("An error ocurred when trying to upload your photo. Please try again. If the issue persists, please contact support.");
        } finally {
            setPhotoUploading(false);
        }
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(`$%${cloudinaryURL}%$`);
        setCloudinaryURL(null);
    }

    useEffect(() => {
        console.log('cloudinaryURL', cloudinaryURL);
        console.log('photoUploading', photoUploading);
      }, [cloudinaryURL, photoUploading]);

  return (
    <>
     <PhotoUploadPopup
        photoUploadingErrors = {photoUploadingErrors}
        setPhotoUploadingErrors = {setPhotoUploadingErrors}
        cloudinaryURL = {cloudinaryURL}
        photoUploading = {photoUploading}
        setCloudinaryURL = {setCloudinaryURL}
        setPhotoUploading = {setPhotoUploading}
        handleCopyClick = {handleCopyClick} />
    

    <div className = "placeholder-divs"></div>
    <Form.Root>
        <Form.Field name="upload-photo">
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
            <h3>Text Instructions</h3>
            <p className="title"># - For Title</p>
            <p className="heading">## - For Heading</p>
            <p className="subheading">### - For SubHeading</p>
            <p className="bold">**Word** - For <b>Bold</b></p>
            <h3 className="italic">Photo Uploading</h3>
            <p className = "bold">
                Uploading a photo will automatically copy the Photo URL to your clipboard.
            </p>
            <p className = "bold">
                Paste the URL into the Editor where you want the photo to appear (Do this by right clicking on the location in the editor and selecting paste) 
            </p>
            <p className = "bold">
                Your photo will appear in the phone preview.
            </p>
          </div>
        </div>
      )}

    </div>
    </>
  );
};

export default MarkdownEditorHelpPopup;