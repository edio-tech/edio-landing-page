import { Link } from 'react-router-dom';

import logo from '../assets/images/logo-edio.png';

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