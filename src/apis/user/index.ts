// 用于记录用户操作
import request from "@/utils/request"
import type {
  LoginParams,
  UserData,
  RegisterParams,
  Code,
  ChangePWD,
  userInfo,
  userUpdataInfo
} from "./type"

enum API {
  USERLOGINAPI = "/user/api/loginByPassword",
  USERREGISTERAPI = "/user/api/createUser",
  GETCODE = "/user/api/sendCode",
  USERLOGINBYCODE = "/user/api/loginByCode",
  CHANGEPWD = "/user/api/resetPassword",
  GETUSERINFO = "/user/api/detail",
  UPDATAUSERINFO = "/user/api/profile",
}

// 用户登录
export const userLoginAPI = (userData: LoginParams) => {
  return request.post<any, UserData>(API.USERLOGINAPI, userData)
}

// 用户注册
export const userRegisterAPI = (userData: RegisterParams) => {
  return request.post<any, UserData>(API.USERREGISTERAPI, userData)
}

// 获取验证码
export const getCode = (phone: string) => {
  return request.post<any, Code>(API.GETCODE, { phone })
}

// 通过验证码登录
export const userLoginByCode = (userData: LoginParams) => {
  return request.post<any, UserData>(API.USERLOGINBYCODE, userData)
}

// 修改密码
export const changePWD = (userData: ChangePWD) => {
  return request.post<any, Code>(API.CHANGEPWD, userData)
}

// 获取用户信息
export const getUserInfo = (user_id: number | null) => {
  return request.get<any, userInfo>(API.GETUSERINFO, { params: { user_id } })
}

// 更新用户信息
export const upDataUserInfo = (userData:userUpdataInfo) => {
  return request.post(API.UPDATAUSERINFO, userData)
}
