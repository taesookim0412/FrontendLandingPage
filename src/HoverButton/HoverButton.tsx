import "./HoverButton.scss"
import {Props} from "react";

type ButtonProps = {
    text?: string,
    fontSize?: string,
    backgroundColor?: string,
    color?: string,
    padding?: string
}
//long padding: "1.2em 4.5em"


export function HoverButton(props: ButtonProps){
    // @ts-ignore
    function handleButtonMove(e: MouseEvent<HTMLButtonElement>){
        // var x = e.pageX - e.target.offsetLeft;
        // var y = e.pageY - e.target.offsetTop;
        var x = e.nativeEvent.offsetX
        var y = e.nativeEvent.offsetY

        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');
    }

    const newStyle = {}
    for (let [key, value] of Object.entries(props)){
        if (value !== ""){
            // @ts-ignore
            newStyle[key] = value;
        }
    }

    return (<button style={newStyle} onMouseMove={(e) => handleButtonMove(e) } className="button">
        <span>{props.text}</span>
    </button>)
}