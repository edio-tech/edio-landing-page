import Contact from "../components/Contact";
import ContentRow from "../components/ContentRow";


const ForCreators = () =>
{
    return (
        <div>
            <ContentRow
                title="Leverage Generative AI"
                description="We use advanced fine-tuned Generative AI to transform your content into gamified learning experiences more affordably, quickly, and effectively than any existing course creation platform!"
                image={'https://res.cloudinary.com/dphekriyz/image/upload/v1727113414/edio/landing-page/GenerativeAI_yxjzru.png'}
                alt="Leverage Generative AI"
                call_to_action="Book a Demo"
                alt_button={false}
                reverse={false}
            />
            <ContentRow
                title="Why Creators Love Us"
                description="The easiest way to monetise your audience! Minimal work - provide your content and we do the rest! We don’t own your content! You decide the pricing! We provide you with insights for your content creation based on what your audience needs help with!"
                image={'https://res.cloudinary.com/dphekriyz/image/upload/v1727114223/edio/landing-page/CreatorPortal_qdpfny.png'}
                alt="Why Creators Love Us"
                call_to_action="Get Started - It's Free!"
                alt_button={true}
                reverse={true}
            />
            <Contact />
        </div>
    )
}
export default ForCreators;
