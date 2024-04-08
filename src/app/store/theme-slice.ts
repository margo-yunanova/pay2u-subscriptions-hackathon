import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  theme: string;
}

const initialState = {
  theme: localStorage.getItem('uiTheme') ?? 'default',
} satisfies ThemeState as ThemeState;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      localStorage.setItem('uiTheme', action.payload);

      state.theme = action.payload;
    },
  },
  selectors: {
    selectTheme: (state) => state.theme,
  },
});

export const { setTheme } = themeSlice.actions;
export const { selectTheme } = themeSlice.selectors;
export default themeSlice.reducer;
