import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TodoListProps {
  allTodo: TodoItemProps[]
}

export interface TodoItemProps {
  id: string
  name: string
  isComplete: boolean
}

const initialState: TodoListProps = {
  allTodo: [{id: '0', name: 'play', isComplete: false}]
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const item: TodoItemProps = {
        id: (Math.random() * 1000000).toFixed(0),
        name: action.payload,
        isComplete: false,
      }
      state.allTodo.push(item);
    },
    changeItemStatus: (state, action: PayloadAction<string>) => {
      const item = state.allTodo.find((item) => item.id === action.payload)
      if (item) {
        item.isComplete = !item.isComplete;
      }
    },
  }
})

export const { addItem, changeItemStatus } = todoListSlice.actions;

export default todoListSlice.reducer;