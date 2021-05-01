import { configureStore } from '@reduxjs/toolkit'
import questionsSlic from './questionsSlic'

 const store = configureStore({
    reducer: {
      questions: questionsSlic
  },
})
export default store