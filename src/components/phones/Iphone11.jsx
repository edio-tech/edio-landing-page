import React from 'react';

import '../../styles/components/iphone11.css';


const iPhone11 = ({ children }) => {
  return (
    <div className="iphone-container">
      <div className="iphone">
        <div className="screen">
            <div className="notch">
               <div className="camera"></div>
               <div className="speaker"></div>
            </div>
            <div className = "square-screen-container">
               {children}
            </div>
         </div>
      </div>
    </div>
  );
};

export default iPhone11;