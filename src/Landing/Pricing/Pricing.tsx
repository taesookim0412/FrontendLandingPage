import "./Pricing.scss"
import {Hamburger} from "../../Hamburger/Hamburger";
import {LiquidButton} from "../../LiquidButton/LiquidButton";
import {captureMouse, Cursor} from "../../Cursor/Cursor";
import {useAppDispatch} from "../../app/hooks";
import {setCursorXRadius, setCursorYRadius} from "../../Cursor/cursorSlice";
import {useEffect} from "react";
import {HoverButton} from "../../HoverButton/HoverButton";

export function Pricing() {
    const dispatch = useAppDispatch()

    useEffect(() => {

    }, [])
    // @ts-ignore
    const cursor = <Cursor cursorYRadius={60} cursorXRadius={40}/>


    return (
        <div id={"pricing"}
             onMouseMove={(e) => {
                 captureMouse(e, dispatch)
             }}>

            <Hamburger/>
            <div id={"grid"}>
                <div className="padding"/>
                <div id={"basic"}>
                    <p className={"title"}>BASIC</p>
                    <hr/>
                    <p className={"plan"}>MONTHLY</p>
                    <p className={"price"}>$9</p>
                    <ul>
                        <li>Very Good</li>
                        <li>Amazing</li>
                        <li>Perfect job</li>
                        <li>Love this</li>
                        <li>It's so good</li>
                        <li>Features</li>
                    </ul>
                    <div style={{height: "20px"}}/>
                    <HoverButton text={"SELECT"} backgroundColor={"#D24848"} fontSize={"0.7em"} padding={"0.7em 2.6em"} />
                </div>
                <div id={"advanced"}>
                    <p className={"title"}>ADVANCED</p>
                    <hr/>
                    <p className={"plan"}>YEARLY</p>
                    <p className={"price"}>$99</p>

                    <ul>
                        <li>Very very good</li>
                        <li>Even Amazing</li>
                        <li>Perfect job</li>
                        <li>Love this more</li>
                        <li>It's so so good</li>
                        <li>More Features</li>
                    </ul>
                    <div style={{height: "20px"}}/>
                    <HoverButton text={"SELECT"} backgroundColor={"#FFB33F"} fontSize={"0.7em"} padding={"0.7em 2.6em"} />
                </div>
                <div id={"pro"}>
                    <p className={"title"}>PRO</p>
                    <hr/>
                    <p className={"plan"}>YEARLY</p>
                    <p className={"price"}>$120</p>
                    <ul>
                        <li>Very Very Good</li>
                        <li>Even more</li>
                        <li>Perfect job</li>
                        <li>Love this more</li>
                        <li>It's so so good</li>
                        <li>More Features</li>
                    </ul>
                    <div style={{height: "20px"}}/>
                    <HoverButton text={"SELECT"} backgroundColor={"#1FE1E9"} fontSize={"0.7em"} padding={"0.7em 2.6em"} />
                </div>
                <div className="padding"/>
            </div>



        </div>
    )
}