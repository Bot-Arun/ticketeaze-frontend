import { reactive } from 'vue'

export const store = reactive({
  logedIn: false,
  admin: false,
  count : 0,
  name:'',
})