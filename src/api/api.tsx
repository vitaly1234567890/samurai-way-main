import axios from "axios";
import {ProfileUser} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "3e2de8d4-39b0-4187-b03b-a593542bee6f"}
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    unfollowUsers(id: number) {
        return instance.delete(`follow/${id}`)
    },
    followUsers(id: number) {
        return instance.post(`follow/${id}`, {})
    },
    getUsersProfile(userId: number) {
        return profileAPI.getUsersProfile(userId)
    }
}

export const profileAPI = {
    getUsersProfile(userId: number) {
        return instance.get(`profile/${userId}`)
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
    },
    saveProfile(profile: ProfileUser) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    getUsersHeader() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean, captcha?: string) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    },
}

// Type
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








