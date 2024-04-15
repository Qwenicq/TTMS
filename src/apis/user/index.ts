// 用于记录用户操作
import request from "@/utils/request"

enum API {
    USERLOGINAPI='/user/api/loginByPassword'
}

// 用户登录
export const userLoginAPI = (data: any) => {
    console.log(data);
    
    const formData = new FormData();
    formData.append('phone', data.phone);
    formData.append('password', data.password);
    return request.post(API.USERLOGINAPI, data)
}