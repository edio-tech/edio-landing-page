import { useState, useEffect } from 'react';

// Component imports
import MarkdownEditter from '../components/MarkdownEditter';
import SelectPart from '../components/SelectPart';
import SelectSection from '../components/SelectSection';
import MarkdownEditterHelpPopup from '../components/MarkdownEditterHelpPopup';

// Hook imports
import useLog from '../../hooks/useLog';
import useAuth from '../../hooks/useAuth';

// API imports
import usersAPI from '../../api/users';
import modulesAPI from '../../api/modules';

// Styling
import '../../styles/creators/pages/editchannelcontent.css';

const EditChannelContent = () =>
{
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() =>
    {
        // Function to check screen width
        const handleResize = () => {
          if (window.innerWidth <= 1115) {
            setIsSmallScreen(true); // Mobile view
          } else {
            setIsSmallScreen(false); // Desktop view
          }
        };

        // Initial check on component mount
        handleResize();

        // Add event listener to handle screen resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const { development } = useLog();

    const [creatorIdError, setCreatorIdError] = useState(null);
    const { auth } = useAuth();

    // Handle load creator logic
    useEffect(() =>
    {
        const fetchCreatorWithUserID = async (user_id) =>
        {
            try
            {
                const res = await usersAPI.getCreatorWithUserID(user_id);

                if (res.status < 200 || res.status >= 300)
                {
                    if (development)
                    {
                        setCreatorIdError(res.data.detail)
                        console.log(res.data);
                    } else {
                        setCreatorIdError(public_facing_error_message)
                    }
                    return
                }

                if (development)
                {
                    console.log("Creator Info from user_id: ");
                    console.log(res.data);
                }
                
                console.log('Creator ID: ', res.data._id);
                return res.data._id;

            } catch (err)
            {
                if (development)
                {
                    console.log(err);
                    setCreatorIdError(err.message);
                }
                setCreatorIdError(public_facing_error_message);
            }
        }

        const asyncUseEffect = async () =>
        {

            if (auth?.role == 'CREATOR' )
            {
                const creatorId = await fetchCreatorWithUserID(auth?.id);
                fetchChannelInformation(creatorId);

            } else if (auth?.role == 'ADMIN')
            {
                console.log('Admin detected, setting creator ID to default');
                const creatorId = "66db1d1f3c984c1591813ef0";
                fetchChannelInformation(creatorId);
            }
        }
        asyncUseEffect();
    }, [auth])


    // The Module Info for each creator will be loaded when you enter this page, could potentially store this in a global context eventually
    const [creatorInfo, setCreatorInfo] = useState(null);
    const [creatorInfoLoading, setCreatorInfoLoading] = useState(true);
    const [creatorInfoError, setCreatorInfoError] = useState(null);
    const [creatorName, setCreatorName] = useState(null);
    const public_facing_error_message = "An unexpected error occurred when trying to fetch your Channel Information.Please try again. If the problem persists, contact support.";

    const [partSelected, setPartSelected] = useState(null);
    const [currentPartId, setCurrentPartId] = useState(null);

    // Each part detail info (Sections and Goals) will be loaded after the entire page is loaded and stored in state on this page, so each component can access it easily

    const [partsDetail, setPartsDetail] = useState([]);
    const [partsDetailLoading, setPartsDetailLoading] = useState(true);
    const [partsDetailError, setPartsDetailError] = useState(null);

    const [currentPartsDetail, setCurrentPartsDetail] = useState(null);
    const [currentSectionDetail, setCurrentSectionDetail] = useState(null);
    const [currentGoalIndex, setCurrentGoalIndex] = useState(0);
    const [showMarkdownEditter, setShowMarkdownEditter] = useState(false);

    // Fetch channel information
    const fetchChannelInformation = async (creatorId) =>
    {
        setCreatorInfoLoading(true);
        setPartsDetailLoading(true);
        setCreatorInfoError(null);
        setPartsDetailError(null);
        try
        {
            // First fetch the module info with part names
            const res = await usersAPI.getCreator(creatorId);

            if (res.status < 200 || res.status >= 300)
            {
                if (development)
                {
                    setCreatorInfoError(res.data.detail)
                    console.log(res.data);
                } else {
                    setCreatorInfoError(public_facing_error_message)
                }
                return
            }

            if (development)
            {
                console.log("Creator Info: ");
                console.log(res.data);
            }

            if (res.data.modules != {})
            {
                console.log('Please note that this is not set up for modules with single parts yet and therefore they will not be displayed.');
            }

            setCreatorInfo(res.data);
            setCreatorName(res.data.name);
            setCreatorInfoLoading(false);

            // Next get the part detail info (The section and Goal information for each part)
            const res_2 = await modulesAPI.getAllPartsInfo(creatorId);

            if (res.status < 200 || res.status >= 300)
                {
                    if (development)
                    {
                        setPartsDetailError(res.data.detail)
                        console.log(res.data);
                    } else {
                        setPartsDetailError(public_facing_error_message)
                    }
                    return
                }

            setPartsDetail(res_2.data.data);
            console.log('Parts Detail: ', res_2.data.data);

        } catch (err) {
            if (development)
            {
                console.log(err);
            }
            setPartsDetailError(public_facing_error_message)

        } finally {
            setCreatorInfoLoading(false);
            setPartsDetailLoading(false);
        }
    }


    // Handles the click event for the part buttons
    const handlePartClick = (part_id) =>
    {
        setPartSelected(true);
        setCurrentPartId(part_id);
        setShowMarkdownEditter(false);
    }

    useEffect(() =>
    {
        if (Object.keys(partsDetail).length > 0)
        {
            setCurrentPartsDetail(partsDetail[currentPartId]);
        }
    }, [partsDetail, currentPartId]);

    return (
        <div className = "flex-main-edit-channel-container">
            {
                creatorInfoLoading ? ( <div className = "loading-icon">Loading...</div> ) : 
                (
                        <>
                        <div className = "select-module-container">
                            {creatorName}
                        </div>
                        <div className = "module-select-screeen">
                            {/* Simply need to add a SelectModule component here for any module that only has one part */}
                            <SelectPart moduleInfo={creatorInfo?.modules_multiple_parts} handlePartClick={handlePartClick} currentPartId={currentPartId}/>
                        </div>
                        {
                            !partSelected ? ( <div className = "select-course-window">Please select a Course.</div> ) : (
                                <>
                                {
                                    partsDetailLoading ?
                                    (
                                        <div className = "select-course-window">
                                            Loading the contents of your course. Please wait...
                                        </div>
                                    ) : (
                                        <>

                        <div className = "section-select-container">
                            <SelectSection
                                currentPartsDetail={currentPartsDetail}
                                setCurrentGoalIndex={setCurrentGoalIndex}
                                setShowMarkdownEditter={setShowMarkdownEditter}
                                currentSectionDetail={currentSectionDetail}
                                setCurrentSectionDetail={setCurrentSectionDetail}
                                sectionCardColour={creatorInfo?.section_background_colour}
                            />
                        </div>
                        <div className = "goal-editter-container">
                            {
                                showMarkdownEditter ? (
                                    <MarkdownEditter
                                        currentSectionDetail={currentSectionDetail}
                                        currentGoalIndex={currentGoalIndex}
                                        setCurrentGoalIndex={setCurrentGoalIndex}
                                        goalCardColour={creatorInfo?.goal_background_colour}
                                        isSmallScreen={isSmallScreen}
                                    />                     
                                ) : (
                                    <div className = "select-section-window">Please select a section above.</div>
                                )
                            }
                        </div>
                        <div className="help-screeen">
                            <MarkdownEditterHelpPopup />
                        </div>

                                        </>
                                    )
                                }
                                </>
                            )
                        }
                    </>
                )
            }
        </div>
    )
}
export default EditChannelContent;
