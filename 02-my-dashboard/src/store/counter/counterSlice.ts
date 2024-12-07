import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    count: number;
    hasLoaded: boolean,
}

const initialState: CounterState = {
    count: 5,
    hasLoaded: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.hasLoaded) {
        return;
      }

      state.count = action.payload;
      state.hasLoaded = true;
    },
    addOne(state: CounterState) {
      state.count++;
    },
    substractOne(state: CounterState) {
      if (state.count <= 0) {
        return;
      }

      state.count--;
    },
    reset(state: CounterState, action: PayloadAction<number>) {
      if (action.payload < 0) {
        return;
      }

      state.count = action.payload;
    }
  }
});

export const {
  initCounterState,
  addOne,
  substractOne,
  reset
} = counterSlice.actions;

export default counterSlice.reducer;