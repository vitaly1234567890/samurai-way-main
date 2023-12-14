import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "3e2de8d4-39b0-4187-b03b-a593542bee6f"}
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)},
    unfollowUsers(id: number) {
       return instance.delete(`follow/${id}`)
           .then(res => res.data)
    },
    followUsers(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(res => res.data)
    },
    getUsersProfile (userId: string) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    getUsersHeader(){
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
}




