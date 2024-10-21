import { useState, useEffect } from 'react';

// Styling
import '../../styles/creators/components/selectpart.css';



const ModuleButton = ({text, buttonHeight, fontSize, onClick, alt_styling}) =>
{
    return (
        <button 
            onClick={onClick} 
            className = {`btn-custom-part ${alt_styling ? 'alt-button' : ''}`} 
            style={{fontSize: fontSize, height: buttonHeight}}
        >
            {text}
        </button>
    )
}
    


const SelectPart = ({ moduleInfo, handlePartClick, currentPartId }) =>
{

    const [showParts, setShowParts] = useState({});

    // Handles the initial state of the parts
    useEffect(() =>
    {
        Object.keys(moduleInfo).forEach((module_id) =>
        {
            setShowParts((prevShowParts) => ({...prevShowParts, [module_id]: false}));
        });
    }, [moduleInfo]);

    // Handles the click event for the module buttons
    const handleModuleClick = (module_id) =>
    {
        const newShowParts = {};
        Object.keys(moduleInfo).forEach((moduleId) =>
        {
            if (moduleId === module_id)
            {
                newShowParts[moduleId] = !showParts[moduleId];
            }
            else
            {
                newShowParts[moduleId] = false;
            }
        });
        setShowParts(newShowParts);
    }

    return (
        <div className = "flex-main-part-select-container">
                {
                    Object.keys(moduleInfo).map((module_id) =>
                    (
                        <div className="button-container" key={module_id}>
                            <ModuleButton
                                key={module_id}
                                text={moduleInfo[module_id].module_name}
                                fontSize="0.8rem"
                                alt_styling={showParts[module_id]}
                                onClick={() => handleModuleClick(module_id)}
                                buttonHeight="3.6rem"
                            />
                            {
                                showParts[module_id] && (
                                    <div className="part-container">
                                        <div className="matthew-test">
                                            {
                                                moduleInfo[module_id].parts.map((part) =>
                                            (
                                                <button type="button" className={`part-button ${currentPartId === part.part_id ? 'alt-part-button' : ''}`} key={part.part_id} disabled = {currentPartId === part.part_id} onClick={() => handlePartClick(part.part_id)}>
                                                    {part.part_name}
                                                </button>
                                            ))
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
        </div>
    )
}

export default SelectPart;








// <StandardButton text = "Module" alt_styling={false} onClick={handleClick} />