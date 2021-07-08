import "./Hero.scss"
import {HoverButton} from "../../HoverButton/HoverButton";
import {EventHandler} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectCurrentImg, selectImgs, setCurrentImg} from "./heroSlice";
import {Hamburger} from "../../Hamburger/Hamburger";
import {LiquidButton} from "../../LiquidButton/LiquidButton";

export function Hero(){
    const dispatch = useAppDispatch()
    const imgs = useAppSelector(selectImgs)
    const currentImg = useAppSelector(selectCurrentImg)

    function handleClick(idx: number){
        const imgBg = document.getElementById("background")
        if (imgBg === null) return;
        // Better to programmatically change the image than to rely on state due to incorrect translate on imgs [1].
        // Fixable by changing the image to be correctly aligned on the y axis.
        // This is a temporary and ugly solution.
        // if (idx === 1){
        //     imgBg.style.transform = "translateY(-12%)";
        // }
        // else {
        //     imgBg.style.transform = "translateY(-22%)";
        // }
        dispatch(setCurrentImg(idx))
    }

    return (
        <div id={"hero"}>
            <img id={"background"} src={imgs[parseInt(currentImg)]}/>
            <div id={"header"}><Hamburger/></div>
            <div id={"messages"}>
                <div id={"title"}>
                    INTERACTIVE CONCERT EXPERIENCE
                </div>
                <div id={"message"}>
                    Experience your favourite artists like never before and from the comfort of your own home.
                </div>
                <div id={"button"} onClick={() => window.scrollTo({top: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) * 3, left: 0, behavior:"smooth"} )}>
                    {/*<HoverButton text={"TRY IT NOW"} fontSize={"0.6em"}/>*/}
                    <LiquidButton/>
                </div>
            </div>
            <div id={"slider"}>
                <div className="slider__circle" style={{backgroundColor: currentImg === '0' ? 'white': 'unset'}} onClick={() => handleClick(0)}/>
                <div className="slider__circle" style={{backgroundColor: currentImg === '1' ? 'white': 'unset'}} onClick={() => handleClick(1)}/>
                <div className="slider__circle" style={{backgroundColor: currentImg === '2' ? 'white': 'unset'}} onClick={() => handleClick(2)}/>
            </div>

        </div>
    )
}