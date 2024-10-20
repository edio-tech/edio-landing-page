import { useState } from 'react';
import { Pencil, CircleX, CircleCheck } from 'lucide-react';

// API imports
import modulesAPI from '../../api/modules';

// Styling
import '../../styles/creators/components/selectsection.css';
const SelectSection = ({ currentPartsDetail, setCurrentGoalIndex, setShowMarkdownEditter, currentSectionDetail, setCurrentSectionDetail }) =>
{

    const [editSectionNameId, setEditSectionNameId] = useState('');
    const [editedSectionName, setEditedSectionName] = useState('');

    const handleEditSectionNameClick = (section_id) =>
    {
        setEditSectionNameId(section_id);
        setEditedSectionName(currentPartsDetail[section_id].section_name);
    }

    const handleSaveSectionNameClick = () =>
    {
        // first update DB
        modulesAPI.updateSectionName(editSectionNameId, {section_name: editedSectionName}).then((res) =>
        {
            console.log(res);
        });

        // Next update the state
        setEditSectionNameId('');
        setEditedSectionName('');
        const currentSectionObject = currentSectionDetail;
        currentSectionObject.section_name = editedSectionName;
        setCurrentSectionDetail(currentSectionObject);
    }

    const handleSectionClick = (section_id) =>
        {
            setCurrentGoalIndex(0);
            setCurrentSectionDetail(currentPartsDetail[section_id]);
            setShowMarkdownEditter(true);
            setEditSectionNameId('');
            setEditedSectionName('');
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

    if (currentPartsDetail.length === 0)
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
                Object.keys(currentPartsDetail).map((section_id) =>
                (
                    <>
                    <div className = "section-container">
                        {
                            editSectionNameId === section_id ?
                            (
                                <div className = "section-edit-button">
                                    <input type="text" value={editedSectionName} onChange={(e) => setEditedSectionName(e.target.value)} />
                                </div>
                            ) : (
                            <>
                                <button className = "section-button" onClick={() => handleSectionClick(section_id)}>
                                    {currentPartsDetail[section_id].section_name}
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
                            <div className = "section-edit-buttons-container">
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