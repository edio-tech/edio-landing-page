import './Footer.css';
import HomeLink from './HomeLink';
import LinkedInLink from './LinkedInLink';
import InstagramLink from './InstagramLink';
import TwitterLink from './TwitterLink';
import TikTokLink from './TikTokLink';

const Footer = () =>
{
    return (
        <div className="footer-container">
            <div className="links">
                <div className="info-links">
                    <div className="vertical-columns">
                        <div className="connect">
                            <div className="footer-title">
                                <h4>Contact</h4>
                                <div className="line"></div>
                            </div>
                            <div className="connect-links">
                                <a className="footer-link">contact@edio.cc</a>
                                <a className="footer-link">support@edio.cc</a>
                            </div>
                        </div>
                        <div className="legal">
                            <div className="footer-title">
                                <h4>Company</h4>
                                <div className="line"></div>
                            </div>
                            <div className="legal-links">
                                <a className="footer-link">Terms of Service</a>
                                <a className="footer-link">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                    <div className="socials">
                        <LinkedInLink />
                        <InstagramLink />
                        <TwitterLink />
                        <TikTokLink />
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
