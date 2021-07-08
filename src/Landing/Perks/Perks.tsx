import "./Perks.scss"
import {Hamburger} from "../../Hamburger/Hamburger";
import {LiquidButton} from "../../LiquidButton/LiquidButton";
import {captureMouse, Cursor} from "../../Cursor/Cursor";
import {useAppDispatch} from "../../app/hooks";
import {setCursorXRadius, setCursorYRadius} from "../../Cursor/cursorSlice";
import {useEffect} from "react";

export function Perks() {
    const dispatch = useAppDispatch()

    useEffect(() => {

    }, [])
    // @ts-ignore
    const cursor = <Cursor cursorYRadius={60} cursorXRadius={40}/>


    return (
        <div id={"sound"}
             onMouseMove={(e) => {
                 captureMouse(e, dispatch)
             }}>
            <Hamburger/>

            {cursor}


        </div>
    )
}