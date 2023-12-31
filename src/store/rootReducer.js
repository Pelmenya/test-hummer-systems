import { combineReducers } from 'redux'
import theme from './slices/themeSlice'
import auth from './slices/authSlice'
import { usersApi } from './api/users'

const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        [usersApi.reducerPath]: usersApi.reducer,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}
  
export default rootReducer
