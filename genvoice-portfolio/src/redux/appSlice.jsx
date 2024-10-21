import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loading: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        }

    },
})


export const { setLoading, setCurrentUser } = appSlice.actions;

export default appSlice.reducer;