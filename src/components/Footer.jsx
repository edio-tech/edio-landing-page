import './Footer.css';
import HomeLink from './HomeLink';

const Footer = () =>
{
    return (
        <div className="footer-container">
            <div className="links">
                <div className="info-links">
                    <div className="vertical-columns">
                        <div className="connect">
                            <h3>Connect</h3>
                            <div className="connect-links">
                                <a>contact@edio.cc</a>
                                <a>support@edio.cc</a>
                            </div>
                        </div>
                        <div className="legal">
                            <h3>Company</h3>
                            <div className="legal-links">
                                <a>Terms of Service</a>
                                <a>Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                    <div className="socials">
                        
                    </div>
                </div>
                <div className="logo-link">
                    <HomeLink width="5rem" font_size="var(--fs-h1)" font_colour="var(--clr-text-accent)" />
                </div>
            </div>
            <div className="copyright">
                <p>© 2024</p>
                <p>All rights reserved</p>
                <p>We are in beta</p>
            </div>
        </div>
    )
}
export default Footer;
