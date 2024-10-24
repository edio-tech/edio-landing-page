import { useState, useEffect } from 'react';
import { Pencil, CircleX, CircleCheck } from 'lucide-react';

// API imports
import modulesAPI from '../../api/modules';

// Styling
import '../../styles/creators/components/selectsection.css';



const SelectSection = ({ currentPartsDetail, setCurrentGoalIndex, setShowMarkdownEditter, currentSectionDetail, setCurrentSectionDetail, sectionCardColour }) =>
{

    const [editSectionNameId, setEditSectionNameId] = useState('');
    const [editSectionName, setEditSectionName] = useState('');

    const handleEditSectionNameClick = (section_id) =>
    {
        setEditSectionNameId(section_id);
        setEditSectionName(currentPartsDetail[section_id].section_name);
    }

    const handleSaveSectionNameClick = () =>
    {
        // first update DB
        modulesAPI.updateSectionName(editSectionNameId, {section_name: editSectionName}).then((res) =>
        {
            console.log(res);
        });

        // Next update the state
        const currentSectionObject = currentSectionDetail;
        currentSectionObject.section_name = editSectionName;
        setCurrentSectionDetail(currentSectionObject);

        setEditSectionNameId('');
        setEditSectionName('');
    }

    const handleSectionClick = (section_id) =>
        {
            setCurrentGoalIndex(0);
            setCurrentSectionDetail(currentPartsDetail[section_id]);
            setShowMarkdownEditter(true);
            setEditSectionNameId('');
            setEditSectionName('');
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
                    <div key = {section_id} className = "section-container">
                        {
                            editSectionNameId === section_id ?
                            (
                                <div className = "section-edit-button">
                                    <textarea className = "section-edit-text-box" type="text" value={editSectionName} onChange={(e) => setEditSectionName(e.target.value)} />
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
                        editSectionNameId === section_id && (
                            <div className = "section-save-cancel-buttons-container">
                                <button onClick={() => setEditSectionNameId('')} className="cancel-section-button"><CircleX /></button>
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