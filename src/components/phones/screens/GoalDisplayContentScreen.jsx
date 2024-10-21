import RenderMarkdown from '../../../components/MarkdownRenderer';


import '../../../styles/components/screens/goaldisplaycontentscreen.css';
const GoalDisplayContentScreen = ({goalSummary, goalDisplayContent}) =>
{
    return (
        <div>
            <div className = "goal-card-container">
               <div className = "goal-summary-text">
                  {goalSummary}
               </div>
               <div className = "goal-display-content-text">
                  <RenderMarkdown markdown={goalDisplayContent} />
               </div>
            </div>
        </div>
    )
}
export default GoalDisplayContentScreen;