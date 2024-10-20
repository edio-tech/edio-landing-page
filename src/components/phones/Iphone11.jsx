import React from 'react';

import '../../styles/components/iphone11.css';

// Component Imports
import GoalDisplayContentScreen from './screens/GoalDisplayContentScreen';

const iPhone11 = ({infoForScreen}) => {
  return (
    <div className="iphone-container">
      <div className="iphone">
        <div className="screen">
            <div className="notch">
               <div className="camera"></div>
               <div className="speaker"></div>
            </div>
            <div className = "square-screen-container">
               <GoalDisplayContentScreen goalSummary={infoForScreen.goalSummary} goalDisplayContent={infoForScreen.goalDisplayContent} />
            </div>
         </div>
      </div>
    </div>
  );
};

export default iPhone11;