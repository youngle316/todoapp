import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from '../features/todoList/todoListSlice'
import filterReducer from '../features/filter/filterSlice'

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
    filter: filterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
