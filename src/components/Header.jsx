import './Header.css';
import HomeLink from './HomeLink';
import Aplications from './Aplications';

const Header = () =>
{
    return (
        <header className="header-container">
            <HomeLink width="2.75rem" fontSize="var(--fs-header)" font_colour="var(--clr-text)" />
            <Aplications />
        </header>
    )
}
export default Header;
