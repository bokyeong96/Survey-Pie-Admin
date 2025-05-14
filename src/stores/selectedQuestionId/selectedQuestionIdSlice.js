import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

export const selectedQuestionIdSlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setSelectQuestionId: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setSelectedQuestionId } = selectedQuestionIdSlice.actions;

export default selectedQuestionIdSlice.reducer;
