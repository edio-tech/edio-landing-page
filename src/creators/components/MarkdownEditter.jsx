import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Component imports
import RenderMarkdown from '../../components/MarkdownRenderer';

// Styling
import '../../styles/creators/components/markdowneditter.css';


const MarkdownEditter = ({ currentSectionDetail, currentGoalIndex, setCurrentGoalIndex }) =>
{
    
    const [markdown, setMarkdown] = useState('');

    const [currentGoalDetail, setCurrentGoalDetail] = useState(null);
    const [totalGoals, setTotalGoals] = useState(0);

    useEffect(() =>
    {
        if (currentSectionDetail)
        {
            setCurrentGoalDetail(currentSectionDetail.goals[currentGoalIndex]);
            setTotalGoals(currentSectionDetail.goals.length);
        }
    }, [currentSectionDetail]);

    // useEffect(() => {
    //     const rawMarkdown = markdown.replace(/\n/g, '\n');
    //     console.log(rawMarkdown);
    // }, [markdown]);

    useEffect(() => {
        if (currentGoalDetail)
        {
            setMarkdown(currentGoalDetail.display_content);
        }
    }, [currentGoalDetail]);


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
        <div className="flex-main-markdown-editter-container mtbg">
            <div className = "text-area">
                <div className="instructions-container">
                    Edit your content below.
                </div>
                <div className="text-box-container mgg">
                    <textarea className="text-box" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
                </div>
            </div>

            <div className = "left-button-container">
                <button className = "arrow-button" onClick={handlePreviousGoal} disabled={currentGoalIndex === 0}><ArrowLeft size={30} /></button>
            </div>

            <div className = "goal-progress-bar-container">
                {/* <div className = "goal-progress-bar" style={{width: `${(currentGoalIndex) / (totalGoals - 1) * 100}%`}}></div> */}
                <div> Card {currentGoalIndex + 1} of {totalGoals} </div>
            </div>

            <div className = "preview-area mtgg">
                <div className="instructions-container">
                    Edit your content below.
                </div>
                <div className="text-box-container mtrg" style={{overflowY: 'scroll'}}>
                    <RenderMarkdown markdown={markdown} />
                </div>
            </div>

            <div className = "right-button-container mtyg">
                <button className = "arrow-button" onClick={handleNextGoal} disabled={currentGoalIndex === totalGoals - 1}><ArrowRight size={30} /></button>
            </div>
        </div>
    )
}

export default MarkdownEditter;
