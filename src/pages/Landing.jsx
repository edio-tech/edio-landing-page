import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHeaderShown from "../hooks/useHeaderShown";


const Landing = () =>
{
    const navigate = useNavigate();
    const { setHeaderShown } = useHeaderShown();

    const checkForAplication = () =>
    {
        const aplication = localStorage.getItem('aplication');
        if(aplication)
        {
            setHeaderShown(true);
            navigate(`/${aplication}`);
        }
        else
        {
            setHeaderShown(false);
            navigate('/for-creators');
        }
    }

    useEffect(() =>
    {
        checkForAplication();
    }, []);
    
    return (
        <div>Landing</div>
    )
}
export default Landing;
