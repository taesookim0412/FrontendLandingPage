import "./Cursor.scss"
import React, {useEffect} from "react";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {
    selectCursorHeight, selectCursorWidth,
    selectLeft,
    selectTop,
    setCursorXRadius,
    setCursorYRadius,
    setLeft,
    setTop
} from "./cursorSlice";
import {useAppDispatch, useAppSelector} from "../app/hooks";

export function captureMouse(e: React.MouseEvent, dispatch: ThunkDispatch<any, any, any>){
    //Incorrect position for aesthetics.
    dispatch(setLeft(e.pageX + 10))
    dispatch(setTop(e.pageY - 20))
}

export interface CursorProps{
    cursorYRadius: number,
    cursorXRadius: number
}

export function Cursor(props:CursorProps){
    const top = useAppSelector(selectTop)
    const left = useAppSelector(selectLeft)
    const cursorHeight = useAppSelector(selectCursorHeight)
    const cursorWidth = useAppSelector(selectCursorWidth)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setCursorYRadius(props.cursorYRadius))
        dispatch(setCursorXRadius(props.cursorXRadius))
    }, [])

    return (
        <div id={"cursor"} style={{top: top, left: left, height:cursorHeight, width: cursorWidth}}/>
    )
}