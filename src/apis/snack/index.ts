import request from "@/utils/request"

enum API {
  "GETSNACK" = "/snack/api/getsnackList",
  "UPLOADSNACK" = "/snack/api/putaway",
  "DELSNACK" = "/snack/api/removeByid?",
  "RECOVER" = "/snack/api/recover",
  "UPDATESNACK" = '/snack/api/updeteSnack',
  "BUYSNACK" = '/snack/api/buy',
  "COLLECTSNACK" = '/snack/api/uploadFavorite',
  "SEARCH" = '/snack/api/search'
}

// 上架零食
export const uploadSnack = (form: FormData) => {
  return request.post(API.UPLOADSNACK, form)
}

// 获取零食
export const getSnack = () => {
  return request.get(API.GETSNACK)
}

// 删除零食
export const delSnack = (id: string) => {
  return request.delete(API.DELSNACK + `id=${id}`)
}

// 还原零食
export const recoverSnack = () => {
    return request.put(API.RECOVER)
}

// 修改零食信息
export const updateSnack = (form: FormData) => {
  return request.put(API.UPDATESNACK, form)
}

// 购买零食
export const buySnack = (data: FormData) => {
  return request.post(API.BUYSNACK,data)
}

// 收藏零食
export const collectSnack = (id: string) => {
  return request.put(API.COLLECTSNACK + `?snack_id=${id}`)
}

// 查找零食
export const searchSnack = (name: string) => {
  return request.get(API.SEARCH + `?name=${name}`)
}

