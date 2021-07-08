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
    // Uses page for normal parent div
    // dispatch(setLeft(e.pageX + 0))
    // dispatch(setTop(e.pageY - 0))
    // Uses seperate values for relative parent
    // @ts-ignore
    // console.log((e.nativeEvent.layerX,e.nativeEvent.layerY)) //buggy
    // console.log((e.nativeEvent.clientX,e.nativeEvent.clientY))// off
    // console.log((e.nativeEvent.offsetX,e.nativeEvent.offsetY))//buggy
    // console.log((e.nativeEvent.x,e.nativeEvent.y))
    // @ts-ignore
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    if (e.pageY > 2 * vh) return;

    // @ts-ignore
    // @ts-ignore
    dispatch(setLeft(e.nativeEvent.clientX))
    // @ts-ignore
    dispatch(setTop(e.pageY - vh - 10))
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