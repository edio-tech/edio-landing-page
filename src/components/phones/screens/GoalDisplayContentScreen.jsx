import RenderMarkdown from '../../../components/MarkdownRenderer';


import '../../../styles/components/screens/goaldisplaycontentscreen.css';
const GoalDisplayContentScreen = ({goalSummary, goalDisplayContent, goalCardColour}) =>
{
    return (
        <div>
            <div className = "goal-card-container" style={{backgroundColor: goalCardColour}}>
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