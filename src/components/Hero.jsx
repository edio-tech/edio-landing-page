import './Hero.css';

const Hero = ({ title, description, animation, call_to_action }) =>
{
    return (
        <div className="hero-container">
            <div className="animation-container">
                <div>Animation Placeholder</div>
            </div>
            <div className="text-container">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-description">{description}</p>
                <button className="hero-button alt-button">{call_to_action}</button>
            </div>
        </div>
    )
}
export default Hero;
