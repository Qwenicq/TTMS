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
  EDITFILM = '/movie/api/updateMoviedetail'
}

// 上架电影
export const addFilm = (data: any) => {
  return request.post(API.ADDMOVIE, data)
}


// 获取所有电影
export const getFilm = () => {
    return request.get(API.GETFILM)
}


// 修改电影信息
export const editFilm = (data:any) => {
  return request.put(API.EDITFILM, data)
}