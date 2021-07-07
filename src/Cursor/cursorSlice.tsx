import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";

const initialState = {
    top: '120vh',
    left: '50vw',
    cursorYRadius: "0",
    cursorXRadius: "0",
    cursorHeight: "0px",
    cursorWidth: "0px"
}

export const cursorSlice = createSlice({
    name: 'cursor',
    initialState,
    reducers: {
        setTop: (state, top: PayloadAction<number>) => {
            state.top = `${(top.payload - parseInt(state.cursorYRadius)).toString()}px`
        },
        setLeft: (state, left: PayloadAction<number>) => {
            state.left = `${(left.payload - parseInt(state.cursorXRadius)).toString()}px`
        },
        setCursorYRadius: (state, yRadius: PayloadAction<number>) => {
            state.cursorYRadius = yRadius.payload.toString()
            state.cursorHeight = `${(yRadius.payload * 2).toString()}px`
        },
        setCursorXRadius: (state, xRadius: PayloadAction<number>) => {
            state.cursorXRadius = xRadius.payload.toString()
            state.cursorWidth = `${(xRadius.payload * 2).toString()}px`
        },
    }
})

export const { setTop, setLeft, setCursorYRadius, setCursorXRadius  } = cursorSlice.actions;

export const selectTop = (state: RootState) =>  state.cursor.top;
export const selectLeft = (state: RootState) =>  state.cursor.left;
export const selectCursorHeight = (state: RootState) =>  state.cursor.cursorHeight;
export const selectCursorWidth = (state: RootState) =>  state.cursor.cursorWidth;


export default cursorSlice.reducer;