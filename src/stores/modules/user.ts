// 存放User的Store

import { getToken } from "@/utils/Token"
import { defineStore } from "pinia"

const userStore = defineStore("user", () => {
    const {token, refresh_token} = getToken() || ''
    return {
        token,
        refresh_token
    }
}, {
  persist: true,
})

export default userStore