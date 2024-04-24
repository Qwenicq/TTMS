// 定义登录请求参数类型
export interface LoginParams {
  phone: string
  password: string
  code: string
}

// 定义登录请求参数类型
export interface RegisterParams {
  phone: string
  password: string
  repassword: string
}

// 获取验证码的参数类型
export interface Code {
  data: {
    code: number
    data: null
    message: string
  }
}

// 登录数据参数
export interface UserData {
  headers: any
  [x: string]: any

  data: {
    code: number
    data: {
      ID: number
      CreatedAt: string
      UpdatedAt: string
      DeletedAt: null
      Phone: string
      Password: string
      user_info_id: number
      UserInfo: {
        ID: number
        CreatedAt: string
        UpdatedAt: string
        DeletedAt: null
        Wallet: number
        Flag: number
        Ticket: null
        Snack: null
        Favorite: null
      }
    }
    message: string
  }
}

// 修改密码
export interface ChangePWD {
  phone: string
  password: string
}

// 用户信息
export interface userInfo {
  data: {
    code: string
    message: string
    data: {
      ID: number
      CreatedAt: string
      UpdatedAt: string
      DeletedAt: null
      Wallet: 0
      Flag: 0
      Ticket: []
      Snack: []
      FavoriteMovie: []
      FavoriteSnack: []
      Name: string
      ProfilePhoto: string
      Birthday: string
      Interest: string[]
      Sign: string
    }
    rows: null
    total: null
  }
}
