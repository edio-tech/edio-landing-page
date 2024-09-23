
import logo from '../assets/images/Splash-Inverse.png';

const HomeLink = () =>
{
    return (
        <Link to="/" className="header-home-link">
            <img src={logo} className="header-home-link-logo" alt="logo" />
            <span className="header-home-link-text">edio</span>
        </Link>
    )
}
export default HomeLink;
