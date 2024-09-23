import './ContentRow.css';

const ContentRow = ({ title, description, image, alt, call_to_action, alt_button, reverse }) =>
{
    return (
        <div className={`content-row ${reverse ? 'reverse' : ''}`}>
            <div className="content-row-text">
                <h2 className="content-row-text-title">{title}</h2>
                <p className="content-row-text-description">{description}</p>
                <button className={`content-row-text-button ${alt_button ? 'alt-button' : ''}`}>{call_to_action}</button>
            </div>
            <div className="content-row-image">
                <img className="content-row-image-img" src={image} alt={alt} />
            </div>
        </div>
    )
}
export default ContentRow;
