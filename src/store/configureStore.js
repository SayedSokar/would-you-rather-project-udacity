import { configureStore } from '@reduxjs/toolkit'
import questionsSlice from './questionsSlice'
import usersSlice from './questionsSlice'
import reducer from './reducer'

 const store = configureStore({
    
     reducer: reducer
      

})
export default store