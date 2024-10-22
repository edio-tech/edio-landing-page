import axios from 'axios';

import { BACKEND_URL } from '../constants/variables.js';

let baseURL = `${BACKEND_URL}/generic`;

let axiosConfig = axios.create({validateStatus: () => true});


class GenericAPI
{
    uploadPhotoToCloudinary(goal_id, formData)
    {
        return axiosConfig.post(`${baseURL}/upload-photo-to-cloudinary/${goal_id}`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

const genericAPI = new GenericAPI();
export default genericAPI;
