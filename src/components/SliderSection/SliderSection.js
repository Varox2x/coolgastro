import { useEffect, useState } from "react";
import sliderSectionStyles from "../../styles/sliderSection.module.scss"
import SliderElement from "./SliderElement"

function randomNumber() {
    return Math.floor(Math.random() * 3); // Losuje liczby od 0 do 4
}

const IMAGES_ARRAY = [
    { src: '/lodowka.png', text: "lodówki" },
    { src: '/kostkarka.png', text: "kostkarki" },
    { src: '/komora.png', text: "komory" },
    { src: '/witryna.png', text: "witryny" },
]

const SliderSection = () => {

    const [lightImageNumber, setLightImageNumber] = useState(3)

    useEffect(() => {
        const interval = setInterval(() => {
            setLightImageNumber(prev => {
                let newNumber = randomNumber()
                return newNumber != prev ? newNumber : newNumber + 1
            })
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={sliderSectionStyles.container}>
            <div className={sliderSectionStyles.wrapper}>
                {IMAGES_ARRAY.map((el, index) => {
                    return <SliderElement key={index} src={el.src} isLight={index == lightImageNumber} text={el.text} />
                })}
            </div>
        </section>
    )
}

export default SliderSection