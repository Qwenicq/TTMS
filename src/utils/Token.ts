// 存储关于Token的方法
// 设置token
const setToken = (headers: Headers) => {
  const token = headers.get("Authorization")?.replace('Bearer ', '')
  const refresh_token = headers.get("Set-Cookie")
  if (token) {
    localStorage.setItem("token", token)
  }
  if (refresh_token) {
    localStorage.setItem("refresh_token", refresh_token)
  }
}

// 获取token
const getToken = () => {
  const token = localStorage.getItem("token")
  const refreshToken = localStorage.getItem("refresh_token")
  return { token, refresh_token: refreshToken }
}

// 移除Token
const removeToken = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("refresh_token")
  window.location.reload();
}

export { setToken, getToken, removeToken }
