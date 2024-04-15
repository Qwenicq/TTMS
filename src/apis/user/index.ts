// 用于记录用户操作
import request from "@/utils/request"

enum API {
    USERLOGINAPI = '/user/api/loginByPassword',
    USERREGISTERAPI = '/user/api/createUser'
}

// 用户登录
export const userLoginAPI = (data: any) => {
    return request.post(API.USERLOGINAPI, data)
}

// 用户注册
export const userRegisterAPI = (data: any) =>{
    return request.post(API.USERREGISTERAPI,data)
}