import "./HoverButton.scss"

type ButtonProps = {
    text: string,
    fontSize: string
}

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

    return (<button style={{fontSize: props.fontSize}} onMouseMove={(e) => handleButtonMove(e) } className="button">
        <span>{props.text}</span>
    </button>)
}