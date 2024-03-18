import navigationStyles from "../../styles/navigation.module.scss"
import Logo from "../global/Logo"

const Navigation = () => {
    return (
        <header className={navigationStyles.container}>
            <div className={navigationStyles.wrapper}>
                <Logo />
                <div />
                {/* <nav>
                    <ul className={navigationStyles.menu}>
                        <li>Home</li>
                        <li>Usługi</li>
                        <li>Kontakt</li>
                    </ul>
                </nav> */}
            </div>
        </header>
    )
}

export default Navigation