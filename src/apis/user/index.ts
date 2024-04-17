// 用于记录用户操作
import request from "@/utils/request"
import type {LoginParams, UserData,RegisterParams,Code} from './type'

enum API {
    USERLOGINAPI = '/user/api/loginByPassword',
    USERREGISTERAPI = '/user/api/createUser',
    GETCODE = '/user/api/sendCode',
    USERLOGINBYCODE = '/user/api/loginByCode'
}

// 用户登录
export const userLoginAPI = (userData: LoginParams) => {
    return request.post<any, UserData>(API.USERLOGINAPI, userData)
}

// 用户注册
export const userRegisterAPI = (userData:RegisterParams) =>{
    return request.post<any, UserData>(API.USERREGISTERAPI,userData)
}

// 获取验证码
export const getCode = (phone: string) => {
    return request.post<any, Code>(API.GETCODE, {phone})
}

// 通过验证码登录
export const userLoginByCode = (userData:LoginParams) => {
    return request.post<any, UserData>(API.USERLOGINBYCODE,userData)
}