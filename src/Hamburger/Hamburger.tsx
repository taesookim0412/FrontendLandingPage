import "./Hamburger.scss"
import React, {ChangeEvent, MouseEventHandler, useEffect} from "react";

export function Hamburger() {
    // function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    //     const elem = e.target as HTMLDivElement
    //     elem.parentElement?.classList.add("expanded")
    // }
    const [expanded, setExpanded] = React.useState(false);

    const hamburgerBorder = <div className={"hamburger__border " + (expanded ? "expanded" : "")}/>

    return (
        <div className={"hamburger__container"}>
            <div id={"hamburger__logo"}>
                <div className="container" onClick={() => setExpanded(!expanded)}>
                    <div className="bar1"/>
                    <div className="bar2"/>
                    <div className="bar3"/>
                </div>
                EXP|CON
            </div>
            {hamburgerBorder}

        </div>
    )
}