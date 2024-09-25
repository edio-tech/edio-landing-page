import { useState } from 'react';

import './Hero.css';

const Hero = ({ title, highlight, description, animation, call_to_action }) =>
{
    const [titlePart1, setTitlePart1] = useState(title.split(highlight)[0]);
    const [titlePart2, setTitlePart2] = useState(title.split(highlight)[1]);

    return (
        <div className="hero-container">
            <div className="animation-container">
                <div>Animation Placeholder</div>
            </div>
            <div className="text-container">
                <h1 className="hero-title">{titlePart1}<span className="highlight-word">{highlight}</span>{titlePart2}</h1>
                <p className="hero-description">{description}</p>
                <button className="hero-button alt-button">{call_to_action}</button>
            </div>
        </div>
    )
}
export default Hero;
