import Image from "next/image"
import sliderSectionStyles from "../../styles/sliderSection.module.scss"



const SliderElement = ({ isLight, src, text }) => {
    return (
        <div className={sliderSectionStyles.slider_element_container}>
            < div style={{ width: '100%', height: '80%', position: 'relative' }} >
                <Image
                    src={src}
                    alt="logo"
                    layout='fill'
                    objectFit='contain'
                    style={{
                        filter: 'grayscale(100%)',
                        zIndex: 1,
                        filter: `blur(${isLight ? 0 : "1px"})`
                    }}
                />
                <div style={{ opacity: isLight ? 1 : 0 }} className={sliderSectionStyles.light} />

            </div>
            <p>{text}</p>
        </div>
    )
}

export default SliderElement
