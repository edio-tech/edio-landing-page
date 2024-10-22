import RenderCloudinaryImage from './RenderCloudinaryImage';
import RenderMarkdown from './MarkdownRenderer';



const RenderMarkdownWithImages = ({markdown}) => {

    const removeImages = (text) => {
        const imageRegex = /\$%([\s\S]*?)%\$/g;
        const parts = text.split(imageRegex);

        return parts.map((part, index) => {
            if (index % 2 === 1) {
                return <RenderCloudinaryImage imageUrl={part} />;
            } else {
                return <RenderMarkdown markdown={part} />;
            }
        });
    };

    return (
        <div>
            {removeImages(markdown)}
        </div>
    );
};

export default RenderMarkdownWithImages;
