import { createPinia } from "pinia"
import persist  from "pinia-plugin-persistedstate" // 修改为正确的包名
const pinia = createPinia()
pinia.use(persist) // 使用正确的插件创建函数
export default pinia
export * from "./modules/user"
