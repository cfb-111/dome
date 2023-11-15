import axios from '../http/axios';

export function article_all() {
    return axios.request({
        url: '/api/article/all',
        method: 'get'
    });
}

export function article_one(data){
    return axios.request({
        url: `/api/article/one?id=${data}`,
        method: 'get'
    });
}

export function article_getArticlesByCateId(data) {
    return axios.request({
        url: `/api/article/${data}`,
        method: 'get'
    });
}

export function article_getArticlesByUserId(data){
    return axios.request({
        url: `/api/article/getArticles/${data}`,
        method: 'get'
    });
}