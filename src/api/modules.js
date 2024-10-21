import axios from 'axios';

import { BACKEND_URL } from '../constants/variables.js';

let baseURL = `${BACKEND_URL}/modules`;

let axiosConfig = axios.create({validateStatus: () => true});


class ModulesAPI
{
    // Parts
    getAllPartsInfo(creator_id)
    {
        return axiosConfig.get(`${baseURL}/parts/get-all-parts-info-for-creator/${creator_id}`);
    }

    // Sections
    updateSectionName(section_id, body)
    {
        return axiosConfig.patch(`${baseURL}/sections/update-section-name/${section_id}`, body);
    }
}

const modulesAPI = new ModulesAPI();
export default modulesAPI;
