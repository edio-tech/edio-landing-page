import RenderMarkdown from '../../../components/MarkdownRenderer';
import RenderMarkdownWithImages from '../../../components/RenderMarkdownWithImages';
import RenderCloudinaryImage from '../../../components/RenderCloudinaryImage';

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
                  <RenderMarkdownWithImages markdown={goalDisplayContent} />

               </div>
            </div>
        </div>
    )
}
export default GoalDisplayContentScreen;