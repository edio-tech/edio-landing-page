import React, { useState, useEffect, useRef } from 'react';
import { CircleHelp } from 'lucide-react';

import '../../styles/creators/components/markdowneditorhelppopup.css';

const MarkdownEditorHelpPopup = () => {
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

  return (
    <div className="help-container">
      <button className="help-button" onClick={() => setIsOpen(!isOpen)}>
        <CircleHelp />
      </button>
      {isOpen && (
        <div className="popup mtbg" ref={popupRef}>
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
  );
};

export default MarkdownEditorHelpPopup;