import axios from 'axios';

import { BACKEND_URL } from '../constants/variables.js';

let baseURL = `${BACKEND_URL}/generic`;

let axiosConfig = axios.create({validateStatus: () => true});


class GenericAPI
{
    uploadPhotoToCloudinary(goal_id, body)
    {
        return axiosConfig.get(`${baseURL}/upload-photo-to-cloudinary/${goal_id}`, body);
    }
}

const genericAPI = new GenericAPI();
export default genericAPI;
