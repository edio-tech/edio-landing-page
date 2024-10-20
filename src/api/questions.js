import axios from 'axios';

import { BACKEND_URL } from '../constants/variables.js';

let baseURL = `${BACKEND_URL}/questions`;

let axiosConfig = axios.create({validateStatus: () => true});


class QuestionsAPI
{
    // Goals
    updateGoalSummary(goal_id, body)
    {
        return axiosConfig.patch(`${baseURL}/goals/update-goal-summary/${goal_id}`, body);
    }
    
    updateGoalDisplayContent(goal_id, body)
    {
        return axiosConfig.patch(`${baseURL}/goals/update-goal-display-content/${goal_id}`, body);
    }

    // Quesstions

}

const questionsAPI = new QuestionsAPI();
export default questionsAPI;