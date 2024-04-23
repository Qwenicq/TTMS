// 存放User的Store

import { getToken } from "@/utils/Token"
import { defineStore } from "pinia"
import { ref } from "vue"

const userStore = defineStore(
  "user",
  () => {
    const { token, refresh_token } = getToken() || ""
    const userInfo = ref({})  
    const setUserInfo = (userData:any) => {
      userInfo.value = userData.value
      console.log(userInfo);
    }
    return {
      token,
      refresh_token,
      userInfo,
      setUserInfo
    }
  },
  {
    persist: true,
  }
)

export default userStore
