import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BriefcaseBusiness, Clapperboard, GraduationCap, NotebookPen } from "lucide-react";

import "./ChooseAplication.css";
import useHeaderShown from "../hooks/useHeaderShown";
import HomeLink from "../components/HomeLink";

const ChooseAplication = () =>
{
    const navigate = useNavigate();
    const { setHeaderShown } = useHeaderShown();

    // useEffect(() =>
    // {
    //     setHeaderShown(false);
    // }, []);

    const handleClick = (e) =>
    {
        localStorage.setItem('aplication', e.target.id);
        setHeaderShown(true);
        navigate(`/${e.target.id}`);
    }

    return (
        <div>
            <header className="choose-header">
                <HomeLink width="2.75rem" fontSize="var(--fs-header)" font_colour="var(--clr-text)" />
            </header>
            <div className="choose-container">
                <h1 className="choose-title">What best describes <span style={{color: 'var(--clr-brand)'}}>you</span>?</h1>
                <div className="choices">
                    <button id="for-enterprise" className="choice-btn" onClick={handleClick}>
                        <BriefcaseBusiness />
                        Enterprise
                    </button>
                    <button id="for-educators" className="choice-btn" onClick={handleClick}>
                        <GraduationCap />
                        Educator
                    </button>
                    <button id="for-creators" className="choice-btn" onClick={handleClick}>
                        <Clapperboard />
                        Creator
                    </button>
                    {/* <button id="for-learners" className="choice-btn" onClick={handleClick}>
                        <NotebookPen />
                        Learner
                    </button> */}
                </div>
            </div>
        </div>
    )
}
export default ChooseAplication;
