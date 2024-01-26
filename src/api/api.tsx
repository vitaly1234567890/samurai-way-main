import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "3e2de8d4-39b0-4187-b03b-a593542bee6f"}
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    unfollowUsers(id: number) {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    },
    followUsers(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(res => res.data)
    },
    getUsersProfile(userId: number) {
        return profileAPI.getUsersProfile(userId)
    }
}

export const profileAPI = {
    getUsersProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    },
    savePhoto(photoFile: string) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<getPhotoType>('/profile/photo/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    getUsersHeader() {
        return instance.get(`auth/me`)
            .then(res => res.data)


    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}

export type photoType = {
    small: string
    large: string
}

export type getPhotoType = {
    data: {
        photos: photoType
    }
    resultCode: number
    messages: string[]
}







