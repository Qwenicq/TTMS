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
  GETTHEATRE = "/theatre/api/getAllTheatre",
  ADDPLAY = "/play/api/addPlay",
  GETPLAY = "/theatre/api/showPlaysByMovieId",
  SEARCHFILM = "/movie/api/movieDetail",
  COLLECT = "/movie/api/uploadFavorite",
  RATE = '/movie/api/markMovie',
  SHOWDETAIL = '/theatre/api/showPlayDetails',
  BUYTICKET = '/play/api/buyTicket'
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

// 获取待映电影
export const upcomingFIlm = () => {
  return request.get(API.GETUPCOMINGFILM)
}

// 获取收藏排行榜
export const favoriteRank = () => {
  return request.get(API.GETFAVORITEFILMRANK)
}

// 获取详细信息
export const detailFilm = (id: string) => {
  return request.get(API.GETFILMDETAIL + `?play_id=${id}`)
}

// 获取热映
export const hotFilm = () => {
  return request.get(API.GETHOTFILM)
}

// 获取所有放映厅
export const allTheatre = () => {
  return request.get(API.GETTHEATRE)
}

// 添加放映
export const addPlay = (form: FormData) => {
  return request.post(API.ADDPLAY, form)
}

// 获取放映信息
export const getPlay = (id: string) => {
  return request.get(API.GETPLAY + `?movie_id=${id}`)
}

// 查询电影详情
export const searchFilm = (id: string) => {
  return request.get(API.SEARCHFILM + `?id=${id}`)
}

// 点击收藏
export const collectFn = (id:string) => {
  return request.put(API.COLLECT + `?movie_id=${id}`)
}

// 评分
export const rateFn = (id: string, num: string) => {
  return request.put(API.RATE + `?movie_id=${id}&star=${num}`)
}

// 获取放映详情
export const showDetail = (id:string) => {
  return request.get(API.SHOWDETAIL + `?play_id=${id}`)
}

// 买票
export const buyTicket = (data: FormData) => {
  return request.put(API.BUYTICKET,data)
}

// 获取收藏前三
export const collectRank = () => {
  return request.get(API.GETFAVORITEFILMRANK)
}

// 获取评分前三
export const talkRank = () => {
  return request.get(API.GETAVERAGEFILMRANK)
}

// 获取用户收藏
export const userCollectList = () => {
  return request.get(API.GETUSERFAVORITEFILM)
} 