import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CircleX } from 'lucide-react';

// Component imports
import MarkdownEdiiterTextBox from './MarkdownEdiiterTextBox';
import Iphone11 from '../../components/phones/Iphone11';
import GoalDisplayContentScreen from '../../components/phones/screens/GoalDisplayContentScreen';

// API Imports
import questionsAPI from '../../api/questions';

// Styling
import '../../styles/creators/components/markdowneditter.css';


const MarkdownEditter = ({ currentSectionDetail, currentGoalIndex, setCurrentGoalIndex, goalCardColour, isSmallScreen }) =>
{   

    const [currentGoalDetail, setCurrentGoalDetail] = useState(null);
    const [totalGoals, setTotalGoals] = useState(0);

    // Content displayed in the Markdown Editter
    const [goalDisplayContent, setGoalDisplayContent] = useState('');
    const [goalSummary, setGoalSummary] = useState('');
    const [goalContentChanged, setGoalContentChanged] = useState(false);

    // Update the Goal Data when a new section is selected
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
            setGoalContentChanged(true);
        }
    }, [goalDisplayContent]);

    // Handle when the goal summary is changed
    useEffect(() =>
    {
        if (currentGoalDetail && (goalSummary !== currentGoalDetail.summary))
        {
            setGoalContentChanged(true);
        }
    }, [goalSummary]);

    const handleRevertGoalContent = () =>
    {
        setGoalDisplayContent(currentGoalDetail.display_content);
        setGoalSummary(currentGoalDetail.summary);
        setGoalContentChanged(false);
    }

    const handleSaveGoalContent = () =>
    {
        if (currentGoalDetail && (goalDisplayContent !== currentGoalDetail.display_content))
        {
            // update the goal display content in the database
            questionsAPI.updateGoalDisplayContent(currentGoalDetail._id, {display_content: goalDisplayContent});
        }

        if (currentGoalDetail && (goalSummary !== currentGoalDetail.summary))
        {
            // Update the goal summary in the database
            questionsAPI.updateGoalSummary(currentGoalDetail._id, {summary: goalSummary});
        }

        // Update the state
        setCurrentGoalDetail({...currentGoalDetail, summary: goalSummary, display_content: goalDisplayContent});
        setGoalContentChanged(false);
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
                <div className = "markdown-editor-card">
                    <div className = "title-edit-container">
                        <input className = "summary-edit-text-box" type="text" value={goalSummary} onChange={(e) => setGoalSummary(e.target.value)} />
                    </div>
                    <div className="text-box-container">
                    <textarea className="text-box" value={goalDisplayContent} onChange={(e) => setGoalDisplayContent(e.target.value)}></textarea>
                        {/* <MarkdownEdiiterTextBox goalDisplayContent={goalDisplayContent} setGoalDisplayContent={setGoalDisplayContent} /> */}
                    </div>
                </div>
            </div>

            {/* <div className = "test mtbg">
            </div> */}

            <div className = "goal-progress-bar-container">
                    <button onClick={handleRevertGoalContent} className = "cancel-goal-edit-button" disabled={!goalContentChanged}>Revert</button>
                {/* <div className = "goal-progress-bar" style={{width: `${(currentGoalIndex) / (totalGoals - 1) * 100}%`}}></div> */}
                <div className = "goal-progress-bar-text"> Card {currentGoalIndex + 1} of {totalGoals} </div>
                    <button onClick={handleSaveGoalContent} className = "save-goal-edit-button" disabled={!goalContentChanged}>Save</button>
            </div>

            <div className = "left-button-container">
                <button className = "arrow-button" onClick={handlePreviousGoal} disabled={currentGoalIndex === 0}><ArrowLeft size={30} /></button>
            </div>
            { !isSmallScreen && (
                <div className = "preview-area">
                    <Iphone11>
                        <GoalDisplayContentScreen
                            goalSummary={goalSummary}
                            goalDisplayContent={goalDisplayContent}
                            goalCardColour={goalCardColour}
                        />
                    </Iphone11>
                </div>
            )}

            <div className = "right-button-container">
                <button className = "arrow-button" onClick={handleNextGoal} disabled={currentGoalIndex === totalGoals - 1}><ArrowRight size={30} /></button>
            </div>
        </div>
    )
}

export default MarkdownEditter;
