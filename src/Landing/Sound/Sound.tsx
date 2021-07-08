import "./Sound.scss"
import {Hamburger} from "../../Hamburger/Hamburger";
import {LiquidButton} from "../../LiquidButton/LiquidButton";
import {captureMouse, Cursor} from "../../Cursor/Cursor";
import {useAppDispatch} from "../../app/hooks";
import {setCursorXRadius, setCursorYRadius} from "../../Cursor/cursorSlice";
import {useEffect} from "react";
import {HoverButton} from "../../HoverButton/HoverButton";

export function Sound() {
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
            {cursor}
            <Hamburger/>
            <div id={"button__topright"} >
                <HoverButton text={"TRY IT NOW"} fontSize={"1.0em"} backgroundColor={"#fff"} color={"#ff0e0e"} padding={"1.2em 4.5em;"}/>
            </div>
            <div id={"messages"}>
                <div id={"title"}>
                    SUPERIOR SOUND
                </div>
                <div id="message">
                    Experience live versions of your favourite songs.
                </div>
                <div id={"button"}>
                    <HoverButton text={"SEE DEMO"} fontSize={"1.0em"} backgroundColor={"#fff"} color={"#ff0e0e"} padding={"1.2em 4.5em;"}/>
                </div>
            </div>
            <img className="boombox" id={"boombox__1"} src={"landing/medium17.png"}/>
            <img className="boombox" id={"boombox__2"} src={"landing/medium27.png"}/>



        </div>
    )
}