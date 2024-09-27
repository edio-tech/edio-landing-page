import Contact from "../components/Contact";
import ContentRow from "../components/ContentRow";
import Hero from "../components/Hero";


const ForEnterprise = () =>
{
    return (
        <div>
            <Hero
                title="Engage your Employees by creating Duolingo for your team"
                highlight="Employees"
                description="Provide your content and expertise and we will create Duolingo for your employees. Suitable for slides, notes, videos and books!"
                animation='https://res.cloudinary.com/dphekriyz/video/upload/v1727468721/edio/video_testing/final_ykmabs.mov'
                call_to_action="Get Started - It's Free!"
            />
            <h2 className="content-container-title">What Your Employees Get</h2>
            <ContentRow
                title="Learning, fun not boring!"
                description="We use advanced fine-tuned Generative AI to transform your content into gamified learning experiences. This consists of flashcards, gamified quizzes, a personalised AI tutor and an analytics dashboard, so your employees can track their progress!"
                image={'https://res.cloudinary.com/dphekriyz/image/upload/v1727113414/edio/landing-page/GenerativeAI_yxjzru.png'}
                alt="Learn with Edio"
                call_to_action="Book a Demo"
                alt_button={false}
                reverse={false}
            />
            <ContentRow
                title="Why Enterprise Loves Us"
                description="We save you time by using AI to create gamified learning experiences that can be used for Continuous Assessment, in minutes - not months! Easily identify what your employees struggle with through your dashboard! Employees receive AI-enhanced feedback on their progress!"
                image={'https://res.cloudinary.com/dphekriyz/image/upload/v1727114223/edio/landing-page/CreatorPortal_qdpfny.png'}
                alt="Why Enterprise Loves Us"
                call_to_action="Get Started - It's Free!"
                alt_button={true}
                reverse={true}
            />
            <Contact />
        </div>
    )
}
export default ForEnterprise;
