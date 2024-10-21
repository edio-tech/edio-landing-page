import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CircleX } from 'lucide-react';

// Component imports
import RenderMarkdown from '../../components/MarkdownRenderer';
import Iphone11 from '../../components/phones/Iphone11';

// API Imports
import questionsAPI from '../../api/questions';

// Styling
import '../../styles/creators/components/markdowneditter.css';


const MarkdownEditter = ({ currentSectionDetail, currentGoalIndex, setCurrentGoalIndex }) =>
{
    

    const [currentGoalDetail, setCurrentGoalDetail] = useState(null);
    const [totalGoals, setTotalGoals] = useState(0);

    // Content displayed in the Markdown Editter
    const [goalDisplayContent, setGoalDisplayContent] = useState('');
    const [goalDisplayContentChanged, setGoalDisplayContentChanged] = useState(false);

    const [goalSummary, setGoalSummary] = useState('');
    const [goalSummaryChanged, setGoalSummaryChanged] = useState(false);

    // Update the Cards when a new section is selected
    useEffect(() =>
    {
        if (currentSectionDetail)
        {
            setCurrentGoalDetail(currentSectionDetail.goals[currentGoalIndex]);
            setTotalGoals(currentSectionDetail.goals.length);
        }
    }, [currentSectionDetail]);

    // Update the goal display content when a new goal is selected
    useEffect(() => {
        if (currentGoalDetail)
        {
            setGoalDisplayContent(currentGoalDetail.display_content);
            setGoalSummary(currentGoalDetail.summary);
        }
    }, [currentGoalDetail]);

    // handle when the goal display content is changed in the Markdown Editter
    useEffect(() =>
    {
        // Check if its different from the current goal display content
        if (currentGoalDetail && (goalDisplayContent !== currentGoalDetail.display_content))
        {
            setGoalDisplayContentChanged(true);
        }
    }, [goalDisplayContent]);

    const handleRevertGoalDisplayContent = () =>
    {
        setGoalDisplayContent(currentGoalDetail.display_content);
        setGoalDisplayContentChanged(false);
    }

    const handleSaveGoalDisplayContent = () =>
    {
        // update the goal display content in the database
        questionsAPI.updateGoalDisplayContent(currentGoalDetail._id, {display_content: goalDisplayContent});

        // Update the state
        setCurrentGoalDetail({...currentGoalDetail, display_content: goalDisplayContent});
        setGoalDisplayContentChanged(false);
    }

    // Handle when the goal summary is changed
    useEffect(() =>
    {
        if (currentGoalDetail && (goalSummary !== currentGoalDetail.summary))
        {
            setGoalSummaryChanged(true);
        }
    }, [goalSummary]);

    const handleSaveGoalSummary = () =>
    {
        // Update the goal summary in the database
        questionsAPI.updateGoalSummary(currentGoalDetail._id, {summary: goalSummary});

        // Update the state
        setCurrentGoalDetail({...currentGoalDetail, summary: goalSummary});
        setGoalSummaryChanged(false);
    }

    const handleRevertGoalSummary = () =>
    {
        setGoalSummary(currentGoalDetail.summary);
        setGoalSummaryChanged(false);
    }


    const handlePreviousGoal = () =>
    {
        setCurrentGoalDetail(currentSectionDetail.goals[currentGoalIndex - 1]);
        setCurrentGoalIndex(currentGoalIndex - 1);
        return;
    }

    const handleNextGoal = () =>
    {
        setCurrentGoalDetail(currentSectionDetail.goals[currentGoalIndex + 1]);
        setCurrentGoalIndex(currentGoalIndex + 1);
        return;
    }

    return (
        <div className="flex-main-markdown-editter-container">
            <div className = "text-area">
                <div className="editor">
                    Editor
                </div>
                <div className = "title-edit-container">
                { goalSummaryChanged ? ( <button className = "cancel-summary-edit-button" onClick={handleRevertGoalSummary}>Revert</button>  ) : (
                    <div className = "summary-centering-placeholder"></div>
                    )}
                    <input className = "summary-edit-text-box" type="text" value={goalSummary} onChange={(e) => setGoalSummary(e.target.value)} />
                    { goalSummaryChanged ? ( <button className = "confirm-summary-edit-button" onClick={handleSaveGoalSummary}>Save</button>  ) : (
                    <div className = "summary-centering-placeholder"></div>
                    )}
                </div>
                <div className="text-box-container">
                    <textarea className="text-box" value={goalDisplayContent} onChange={(e) => setGoalDisplayContent(e.target.value)}></textarea>
                </div>
            </div>

            <div className = "left-button-container">
                <button className = "arrow-button" onClick={handlePreviousGoal} disabled={currentGoalIndex === 0}><ArrowLeft size={30} /></button>
            </div>

            <div className = "goal-progress-bar-container">
                    <button onClick={handleRevertGoalDisplayContent} className = "cancel-goal-edit-button" disabled={!goalDisplayContentChanged}>Revert</button>
                {/* <div className = "goal-progress-bar" style={{width: `${(currentGoalIndex) / (totalGoals - 1) * 100}%`}}></div> */}
                <div className = "goal-progress-bar-text"> Card {currentGoalIndex + 1} of {totalGoals} </div>
                    <button onClick={handleSaveGoalDisplayContent} className = "save-goal-edit-button" disabled={!goalDisplayContentChanged}>Save</button>
            </div>

            <div className = "preview-area">
                <Iphone11 infoForScreen={{goalSummary, goalDisplayContent}} />
            </div>

            <div className = "right-button-container">
                <button className = "arrow-button" onClick={handleNextGoal} disabled={currentGoalIndex === totalGoals - 1}><ArrowRight size={30} /></button>
            </div>
        </div>
    )
}

export default MarkdownEditter;
