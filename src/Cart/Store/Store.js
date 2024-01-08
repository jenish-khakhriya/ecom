
import { configureStore } from '@reduxjs/toolkit'
import cartmanage from '../Feature/CartHandle.js'

export default configureStore({
  reducer: {cartmanage}
})