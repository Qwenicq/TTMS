import { getFilm } from "@/apis/film"
import { defineStore } from "pinia"
import { ref } from "vue"
import type { filmData } from "@/apis/film/type"

export const useFilmStore = defineStore(
  "film",
  () => {
    const filmList = ref<filmData[]>([])

    const getFilmData = async () => {
      const res = await getFilm()
      filmList.value = res.data.data
    }

    return {
      filmList,
      getFilmData,
    }
  },
  {
    persist: true,
  }
)
