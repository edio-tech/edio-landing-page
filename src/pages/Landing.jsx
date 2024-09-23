import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Landing = () =>
{
    const navigate = useNavigate();

    const checkForAplication = () =>
    {
        const aplication = localStorage.getItem('aplication');
        if(aplication)
        {
            navigate(`/${aplication}`);
        }
        else
        {
            navigate('/choose');
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
