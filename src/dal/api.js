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
                debugger
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