import axios from '../http/axios'

export function mobile_eLogin(data) {
    return axios.request({
        url: '/api/mobile/elogin',
        method: 'post',
        data
    });
}

export function mobile_eRegister(data) {
    return axios.request({
        url: '/api/mobile/eregister',
        method: 'post',
        data
    });
}
