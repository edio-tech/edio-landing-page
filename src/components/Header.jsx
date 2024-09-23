import './Header.css';
import HomeLink from './HomeLink';
import Aplications from './Aplications';

const Header = () =>
{
    return (
        <header className="header-container">
            <HomeLink />
            <Aplications />
        </header>
    )
}
export default Header;
