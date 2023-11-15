import axios from '../http/axios';

export function articleCat_all() {
    return axios.request({
        url: '/api/articleCat/all',
        method: 'get'
    });
}