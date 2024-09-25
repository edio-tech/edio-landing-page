import { useEffect, useState } from 'react';

import './Header.css';
import HomeLink from './HomeLink';
import Aplications from './Aplications';

const Header = () =>
{
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlHeader = () =>
    {
        if (typeof window !== 'undefined')
        {
            if (window.scrollY > lastScrollY)
            {
                // If we are scrolling down, hide the header
                setShowHeader(false);
            } else {
                // If we are scrolling up, show the header
                setShowHeader(true);
            }
            setLastScrollY(window.scrollY); // Update the last scroll position
        }
    };

    useEffect(() =>
    {
        if (typeof window !== 'undefined')
        {
            window.addEventListener("scroll", controlHeader); // Add scroll listener

            return () =>
            {
                window.removeEventListener("scroll", controlHeader); // Cleanup listener
            };
        }
    }, [lastScrollY]);

    return (
        <header className={`header-container ${showHeader ? 'header-visible' : 'header-hidden'}`}>
            <HomeLink width="2.75rem" fontSize="var(--fs-header)" font_colour="var(--clr-text)" />
            <Aplications />
        </header>
    )
}
export default Header;
