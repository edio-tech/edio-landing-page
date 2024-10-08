import Contact from "../components/Contact";
import ContentRow from "../components/ContentRow";
import Hero from "../components/Hero";


const ForCreators = () =>
{
    return (
        <div>
            <Hero
                title="Engage your Audience by creating Duolingo for your content"
                highlight="Audience"
                description="Provide your content and expertise and we will create Duolingo for your audience. Suitable for slides, notes, videos and books!"
                animation='https://res.cloudinary.com/dphekriyz/video/upload/v1727468721/edio/video_testing/final_ykmabs.mov'
                call_to_action="Get Started - It's Free!"
            />
            <h2 className="content-container-title">What You Get</h2>
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
                image={'https://res.cloudinary.com/dphekriyz/image/upload/v1727472379/edio/landing-page/Group_60_1_k37fkz.png'}
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
