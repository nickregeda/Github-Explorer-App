import * as axios from 'axios';

const instance = axios.create({
    headers: {
        'Authorization': 'Bearer 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'
    },
})

export const gitAPI = {
    getUsers(q, per_page, page) {
        return instance.get(`https://api.github.com/search/users?q=${q}&sort=followers&per_page=${per_page}&page=${page}`).then(
            response => {
                if (response.status == 200) {
                    return response.data;
                }
            }
        )
    },
    getUserRepos(q, per_page, page) {
        return instance.get(`https://api.github.com/users/${q}/repos?per_page=${per_page}&page=${page}`).then(
            response => {
                return response.data
            }
        )
    },
    getProfile(id) {
        return instance.get(`https://api.github.com/user/${id}`).then(
            response => {
                return response.data
            }
        )
    }
}