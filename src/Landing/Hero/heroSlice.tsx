import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

const initialState = {
    currentImg: '0',
    imgs: ['landing/hero1/Image 1.png', 'landing/hero2/Image 2.png', 'landing/hero3/Image 3.png']
}

export const heroSlice = createSlice({
    name: 'hero',
    initialState,
    reducers: {
        setCurrentImg: (state, idx: PayloadAction<number>) => {
            state.currentImg = idx.payload.toString()
        },
        switchCurrentImg: (state) => {
            state.currentImg = ((parseInt(state.currentImg) + 1) % 3).toString();
        }
    }
})

export const { setCurrentImg } = heroSlice.actions;

export const selectImgs = (state: RootState) =>  state.hero.imgs;
export const selectCurrentImg = (state: RootState) =>  state.hero.currentImg;


export default heroSlice.reducer;