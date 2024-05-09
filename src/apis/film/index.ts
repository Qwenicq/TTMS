import request from "@/utils/request"

enum API {
  GETFILM = "/movie/api/movieList",
  GETUPCOMINGFILM = "/movie/api/upcoming/movieList",
  GETUSERFAVORITEFILM = "/movie/api/favoriteList",
  GETFAVORITEFILMRANK = "/movie/api/favoriteMovieRanking",
  GETAVERAGEFILMRANK = "/movie/api/averageMovieRanking",
  GETTICKETNUMRANK = "/movie/api/ticketNumRanking",
  GETHOTFILM = "/movie/api/hit/movieList",
  GETFILMDETAIL = "/theatre/api/showPlayDetails",
  ADDMOVIE = "/movie/api/addMovie",
  EDITFILM = "/movie/api/updateMoviedetail",
  DELFILM = "/movie/api/deletemoviesByid",
  UPFILM = "/movie/api/reputaway",
  ADDTHEATRE = "/theatre/api/addTheatre",
  DELTHEATRE = "/theatre/api/removeTheatre",
}

// 上架电影
export const addFilm = (data: FormData) => {
  return request.post(API.ADDMOVIE, data)
}

// 获取所有电影
export const getFilm = () => {
  return request.get(API.GETFILM)
}

// 修改电影信息
export const editFilm = (data: FormData) => {
  return request.put(API.EDITFILM, data)
}

// 下架电影
export const delFilm = (id: string) => {
  return request.delete(API.DELFILM, { params: { id } })
}

// 重上架
export const upFilm = (id: string) => {
  return request.put(API.UPFILM, { params: { id } })
}

// 添加放映厅
export const addTheatre = (data: FormData) => {
  return request.post(API.ADDTHEATRE, data)
}

// 删除放映厅
export const removeTheatre = (id: string) => {
  return request.delete(API.DELTHEATRE, { params: { id } })
}
