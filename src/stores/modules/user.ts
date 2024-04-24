// 存放User的Store
import { getToken } from "@/utils/Token"
import { defineStore } from "pinia"
import { ref } from "vue"
import { getUserInfo } from "@/apis/user/index"

export const useUserStore = defineStore(
  "user",
  () => {
    const { token, refresh_token } = getToken() || ""
    interface userInfoType {
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
    const userInfo = <any | userInfoType>ref({
      ID: null,
      CreatedAt: '',
      UpdatedAt: '',
      DeletedAt: null,
      Wallet: 0,
      Flag: 0,
      Ticket: [],
      Snack: [],
      FavoriteMovie: [],
      FavoriteSnack: [],
      Name: '',
      ProfilePhoto: 'https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0',
      Birthday: '',
      Interest:[],
      Sign: ''
    })
    const userId = ref<number>(-1)
    
    // 获取用户id
    const getUserId = (id: number) => {
      userId.value = id
      console.log(userId.value)
    }

    // 获取用户信息
    const setUserInfo = async () => {
      const res = await getUserInfo(userId.value)
      userInfo.value = res.data.data
      console.log(userInfo.value)
    }

    return {
      token,
      refresh_token,
      userInfo,
      userId,
      setUserInfo,
      getUserId,
    }
  },
  {
    persist: true
  }
)
