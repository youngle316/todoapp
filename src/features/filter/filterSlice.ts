import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type StatusType = 'all' | 'done' | 'doing'

interface FilterProps {
  status: StatusType
}

const initialState: FilterProps = {
  status: 'all'
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload
    }
  },
})

export const { changeStatus } = filterSlice.actions

export default filterSlice.reducer;