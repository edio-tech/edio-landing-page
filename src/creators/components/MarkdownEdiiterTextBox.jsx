// Components
import RenderCloudinaryImage from '../../components/RenderCloudinaryImage';

//Styling
import '../../styles/creators/components/markdownedittertextbox.css';

const MarkdownEdiiterTextBox = ({goalDisplayContent, setGoalDisplayContent}) => {

   const removeImages = (text) => {
      const imageRegex = /\$%([\s\S]*?)%\$/g;
      const parts = text.split(imageRegex);

      return parts.map((part, index) => {
          if (index % 2 === 1) {
              return <RenderCloudinaryImage imageUrl={part} />;
          } else {
              return <textarea className="text-box mrg" value={part} onChange={(e) => setGoalDisplayContent(e.target.value)}></textarea>;
          }
      });
  };

    return (
      <div className="text-box-container mgg">
         {removeImages(goalDisplayContent)}
      </div>
    );
};

export default MarkdownEdiiterTextBox;