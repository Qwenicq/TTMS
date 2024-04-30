// 存放User的Store
import { getToken } from "@/utils/Token"
import { defineStore } from "pinia"
import { ref } from "vue"
import { getUserInfo } from "@/apis/user/index"

export const useUserStore = defineStore(
  "user",
  () => {
    const { token, refresh_token } = getToken() || {
      token: null,
      refresh_token: null,
    }

    interface userInfoType {
      ID: number | null
      CreatedAt: string
      UpdatedAt: string
      DeletedAt: null
      Wallet: number
      Flag: number
      Ticket: any[]
      Snack: any[]
      FavoriteMovie: any[]
      FavoriteSnack: any[]
      Name: string
      ProfilePhoto: string
      Birthday: string
      Interest: string[]
      Sign: string
    }

    // Define userInfo as userInfoType and use type assertion
    const userInfo = ref<userInfoType>({
      ID: null,
      CreatedAt: "",
      UpdatedAt: "",
      DeletedAt: null,
      Wallet: 0,
      Flag: 0,
      Ticket: [],
      Snack: [],
      FavoriteMovie: [],
      FavoriteSnack: [],
      Name: "",
      ProfilePhoto:
        "https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0",
      Birthday: "",
      Interest: [],
      Sign: "",
    })

    const userId = ref<number | null>(null)

    const fetchUserInfo = async (id: number) => {
      try {
        const res = await getUserInfo(id)
        console.log(res);
        
        userInfo.value = res.data.data
        console.log(userInfo.value)
      } catch (error) {
        console.error("Failed to fetch user info:", error)
      }
    }

    const getUserId = (id: number) => {
      userId.value = id
    }

    const setUserInfo = () => {
      if (userId.value !== null) {
        fetchUserInfo(userId.value)
      }
    }

    const removeUser = () => {
      userId.value = null
      userInfo.value = {
        ID: null,
        CreatedAt: "",
        UpdatedAt: "",
        DeletedAt: null,
        Wallet: 0,
        Flag: 0,
        Ticket: [],
        Snack: [],
        FavoriteMovie: [],
        FavoriteSnack: [],
        Name: "",
        ProfilePhoto:
          "https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0",
        Birthday: "",
        Interest: [],
        Sign: "",
      }
    }

    return {
      token,
      refresh_token,
      userInfo,
      userId,
      setUserInfo,
      getUserId,
      removeUser
    }
  },
  {
    persist: true,
  }
)
