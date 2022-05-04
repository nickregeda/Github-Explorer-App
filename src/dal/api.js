import * as axios from 'axios';

const instance = axios.create({
    headers: {
        'Authorization': 'Bearer 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'
    },
})

export const gitAPI = {
    getUsers(q) {
        return instance.get(`https://api.github.com/search/users?q=${q}&sort=followers`).then(
            response => {
                // debugger
                return response.data.items;
            }
        )
    },
    getUsersRepos(q) {
        return instance.get(`https://api.github.com/users/${q}/repos?per_page=15`).then(
            response => {
                // debugger
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