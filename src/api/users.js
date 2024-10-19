import axios from 'axios';

import { BACKEND_URL } from '../constants/variables.js';

let baseURL = `${BACKEND_URL}/users`;

let axiosConfig = axios.create({validateStatus: () => true});


class UsersAPI
{
    // Users
    register(body)
    {
        return axiosConfig.post(baseURL + '/register', body);
    }
    
    login(body)
    {
        return axiosConfig.post(baseURL + '/login', body);
    }

    checkDetails(token)
    {
        return axiosConfig.get(baseURL + '/me', {headers: {Authorization: `Bearer ${token}`}});
    }

    getByID(id)
    {
        return axiosConfig.get(baseURL + `/${id}`);
    }

    getByEmail(body)
    {
        return axiosConfig.post(baseURL + '/email', body);
    }

    update(id, body, token)
    {
        return axiosConfig.patch(baseURL + `/${id}`, body, {headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}});
    }

    delete(id, token)
    {
        return axiosConfig.delete(baseURL + `/${id}`, {headers: {Authorization: `Bearer ${token}`}});
    }

    verifyResetToken(token)
    {
        return axiosConfig.get(baseURL + `/reset-token/${token}`);
    }

    // Creators
    getCreator(creator_id)
    {
        return axiosConfig.get(baseURL + `/creators/get-with-multiple-parts/${creator_id}`);
    }
}
const usersAPI = new UsersAPI();
export default usersAPI;
