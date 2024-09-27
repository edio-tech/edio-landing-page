import Contact from "../components/Contact";
import ContentRow from "../components/ContentRow";
import Hero from "../components/Hero";


const ForEducators = () =>
{
    return (
        <div>
            <Hero
                title="Engage your Students by creating Duolingo for your class"
                highlight="Students"
                description="Provide your content and expertise and we will create Duolingo for your students. Suitable for slides, notes, videos and books!"
                animation='https://res.cloudinary.com/dphekriyz/video/upload/v1727468721/edio/video_testing/final_ykmabs.mov'
                call_to_action="Get Started - It's Free!"
            />
            <h2 className="content-container-title">What Your Students Get</h2>
            <ContentRow
                title="Learning, made fun!"
                description="We use advanced fine-tuned Generative AI to transform your content into gamified learning experiences. This consists of summarized flashcards, gamified quizzes, a personalised AI tutor and an analytics dashboard to track progress!"
                image={'https://res.cloudinary.com/dphekriyz/image/upload/v1727113414/edio/landing-page/GenerativeAI_yxjzru.png'}
                alt="Learn with Edio"
                call_to_action="Book a Demo"
                alt_button={false}
                reverse={false}
            />
            <ContentRow
                title="Why Educators Love Us"
                description="We save you time by using AI to create gamified learning experiences that can be used for Continuous Assessment, in minutes! Easily identify where your students need assistance through your dashboard! Students receive AI-enhanced feedback on their progress!"
                image={'https://res.cloudinary.com/dphekriyz/image/upload/v1727472379/edio/landing-page/Group_60_1_k37fkz.png'}
                alt="Why Educators Love Us"
                call_to_action="Get Started - It's Free!"
                alt_button={true}
                reverse={true}
            />
            <Contact />
        </div>
    )
}
export default ForEducators;
