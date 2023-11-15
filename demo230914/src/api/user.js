import axios from '../http/axios';

export function userinfo_one(data) {
    return axios.request({
        url: `/api/userinfo/one?id=${data}`,
        method: 'get'
    });
}

