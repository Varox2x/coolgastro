import heroSectionStyles from "../../styles/heroSection.module.scss"

const HeroSection = () => {
    return (
        <section className={heroSectionStyles.container}>
            <div className={heroSectionStyles.wrapper}>
                <div className={heroSectionStyles.content_wrapper}>
                    <h1 className={heroSectionStyles.main_title}>CoolGastro</h1>
                    <h2 className={heroSectionStyles.under_title}>Serwis chłodniczych urzadzeń gastronomicznych</h2>
                    <button className={heroSectionStyles.button}>Kontakt</button>
                </div>
            </div>
            <div className={heroSectionStyles.overlay} />
        </section>
    )
}

export default HeroSection