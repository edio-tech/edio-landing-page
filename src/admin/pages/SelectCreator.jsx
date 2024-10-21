import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
// Component Imports
import CreatorCard from '../../components/CreatorCard';

// API Imports
import usersAPI from '../../api/users';

// Hook Imports
import useLog from '../../hooks/useLog';

// Styling
import '../../styles/admin/selectcreator.css';

const SelectCreator = () => {

    const { development } = useLog();
    const navigate = useNavigate();

    const [creatorData, setCreatorData] = useState([]);
    const [loadingCreatorData, setLoadingCreatorData] = useState(true);
    const [creatorDataErrors, setCreatorDataErrors] = useState(null);

    // Fetch all creators
    useEffect(() =>
    {
        const fetchCreatorData = async () =>
        {
            try
            {
                const token = Cookies.get('jwtToken')
                const res = await usersAPI.getAll(token)
            
                if (res.status < 200 || res.status >= 300)
                { // Check if response status is not OK (200-299)
                    if ( development )
                    {
                        console.log(res.data)
                        console.log(`${res.data}. Status: ${res.status}`)
                    }
                    setCreatorDataErrors(res.data)
                }

                // Construct the Module Data for each Creator to store in context
                const creators = res.data
                const allModules = []

                creators.forEach(creator =>
                {
                    if ( creator.modules )
                    {
                        const creatorModules = Object.keys(creator.modules).map(key =>
                        ({
                            id: key,
                            creator_id: creator._id,
                            ...creator.modules[key]
                        }));
                        allModules.push(...creatorModules)
                    }
                });

                setCreatorData(creators);

            } catch (err) {
                setCreatorDataErrors(err.message);
                if ( development )
                {
                    console.log(err)
                }
            } finally {
                setLoadingCreatorData(false);
            }

        }

        if ( creatorData.length === 0 )
        {
            setLoadingCreatorData(true);
            fetchCreatorData();
        }
    }, [])

    const handleCreatorClick = (creator_id) =>
    {
        navigate(`/edit-channel-content/${creator_id}`)
    }


    return (
        <div className = "flex-page-container"> 
            { loadingCreatorData && <div>Loading...</div> }
            { !loadingCreatorData && creatorData.length === 0 && <div>No Creators Found</div> }
            {
                !loadingCreatorData && creatorData.length !== 0 &&
                (
                    <>
                        { creatorData.map((creator, index) => (
                            <button key = { index } onClick={() => handleCreatorClick(creator._id)} className = "creator-card-button">
                                <CreatorCard
                                    name = { creator.name }
                                    image = { creator.profile_pic }
                                /> 
                            </button>
                        ))}
                    </>
                )
            }
        </div>
    )
}

export default SelectCreator;