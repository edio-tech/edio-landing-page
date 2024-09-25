import './ContentRow.css';

const ContentRow = ({ title, description, image, alt, call_to_action, alt_button, reverse }) =>
{
    return (
        <div className={`content-row ${reverse ? 'reverse' : ''}`}>
            <div className="content-row-text">
                <h3 className="content-row-text-title">{title}</h3>
                <p className="content-row-text-description">{description}</p>
                <a className={`btn content-row-text-button ${alt_button ? 'alt-button' : ''}`} target="_blank" href="https://calendly.com/ross-edio/30min">{call_to_action}</a>
            </div>
            <div className="content-row-image">
                <img className="content-row-image-img" src={image} alt={alt} />
            </div>
        </div>
    )
}
export default ContentRow;
