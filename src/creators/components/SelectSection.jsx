import { useState } from 'react';
import { Pencil, CircleX, CircleCheck } from 'lucide-react';

// API imports
import modulesAPI from '../../api/modules';

// Styling
import '../../styles/creators/components/selectsection.css';
const SelectSection = ({ currentPartsDetail, setCurrentGoalIndex, setShowMarkdownEditter, currentSectionDetail, setCurrentSectionDetail, sectionCardColour }) =>
{

    const [selectedSectionNameId, setSelectedSectionNameId] = useState('');
    const [selectedSectionName, setSelectedSectionName] = useState('');

    const handleEditSectionNameClick = (section_id) =>
    {
        setSelectedSectionNameId(section_id);
        setSelectedSectionName(currentPartsDetail[section_id].section_name);
    }

    const handleSaveSectionNameClick = () =>
    {
        // first update DB
        modulesAPI.updateSectionName(selectedSectionNameId, {section_name: selectedSectionName}).then((res) =>
        {
            console.log(res);
        });

        // Next update the state
        setSelectedSectionNameId('');
        setSelectedSectionName('');
        const currentSectionObject = currentSectionDetail;
        currentSectionObject.section_name = selectedSectionName;
        setCurrentSectionDetail(currentSectionObject);
    }

    const handleSectionClick = (section_id) =>
        {
            setCurrentGoalIndex(0);
            setCurrentSectionDetail(currentPartsDetail[section_id]);
            setShowMarkdownEditter(true);
            setSelectedSectionNameId('');
            setSelectedSectionName('');
        }


    if (!currentPartsDetail)
    {
        return (
            <div className = "select-section-container">
                <div className = "section-container">
                    Loading...
                </div>
            </div>
        )
    }

    if (currentPartsDetail?.length === 0)
    {
        return (
            <div className = "select-section-container">
                <div className = "section-container">
                    No sections found in this course.
                </div>
            </div>
        )
    }
    return (
        <div className = "select-section-container">
            {
                Object.keys(currentPartsDetail)?.map((section_id) =>
                (
                    <>
                    <div className = "section-container">
                        {
                            selectedSectionNameId === section_id ?
                            (
                                <div className = "section-edit-button">
                                    <textarea className = "section-edit-text-box" type="text" value={selectedSectionName} onChange={(e) => setSelectedSectionName(e.target.value)} />
                                </div>
                            ) : (
                            <>
                                <button style={{backgroundColor: currentSectionDetail && currentSectionDetail._id === section_id ? '' : sectionCardColour}} className = {`section-button ${currentSectionDetail && currentSectionDetail._id === section_id ? 'alt-section-button' : ''}`} onClick={() => handleSectionClick(section_id)}>
                                    <div className = "section-button-text">{currentPartsDetail[section_id].section_name}</div>
                                </button>
                                { 
                                    currentSectionDetail && currentSectionDetail._id === section_id &&
                                    (
                                <button onClick={() => handleEditSectionNameClick(section_id)} className = "edit-section-button">
                                    <Pencil />
                                </button>
                                    )
                                }
                            </>
                        )}
                    </div>
                    {
                        selectedSectionNameId === section_id && (
                            <div className = "section-save-cancel-buttons-container">
                                <button onClick={() => setSelectedSectionNameId('')} className="cancel-section-button"><CircleX /></button>
                                <button onClick={handleSaveSectionNameClick} className = "save-section-button"><CircleCheck /></button>
                            </div>
                        )
                    }
                    </>
                )
                )
            }
        </div>
    )
}

export default SelectSection;