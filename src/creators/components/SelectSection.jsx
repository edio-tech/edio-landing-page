
// Styling
import '../../styles/creators/components/selectsection.css';
const SelectSection = ({ currentPartsDetail, handleSectionClick }) =>
{


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
                    <div className = "section-container">
                        <button className = "section-button" onClick={() => handleSectionClick(section_id)}>{currentPartsDetail[section_id].section_name}</button>
                    </div>
                )
                )
            }
        </div>
    )
}

export default SelectSection;