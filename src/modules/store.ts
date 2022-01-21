import {createPinia} from "pinia";
import type {UserModule} from '~/types'

export const install: UserModule = ({app, initialState}) => {
  const pinia = createPinia()
  app.use(pinia)

  if (import.meta.env.SSR) {
    initialState.pinia = pinia.state.value
  } else {
    pinia.state.value = initialState.pinia || {}
  }
}
