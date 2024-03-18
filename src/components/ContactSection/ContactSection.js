import Image from "next/image"
import contactSectionStyles from "../../styles/contactSection.module.scss"
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";


const ContactSection = () => {
    return (
        <section className={contactSectionStyles.container} >
            <div className={contactSectionStyles.wrapper} >
                {/* <h6 className={contactSectionStyles.title} >
                    Usługi
                </h6> */}
                {/* <div className={contactSectionStyles.row}>
                    <div className={contactSectionStyles.column}>

                        <div style={{ width: '70%', height: '300px', position: 'relative' }} >
                            <Image
                                src="/undraw_bug_fixing_oc7aa.png"
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                    </div>
                    <div className={contactSectionStyles.column}>
                        <p className={contactSectionStyles.description} >Serwis urządzeń gastronomicznych R600/R290. <br />
                            Naprawa:
                            <br />- kostkarki
                            <br />- meble chłodnicze
                            <br />- komory</p>
                    </div>
                </div> */}
                <h6 style={{ marginTop: '45px' }} className={contactSectionStyles.title} >
                    Kontakt
                </h6>
                <div className={contactSectionStyles.row}>
                    <div className={contactSectionStyles.column}>
                        <ul className={contactSectionStyles.contact_list}>
                            <li>
                                <FiPhone style={{ color: '#005AA4' }} size={35} />
                                <p>+48 123 123 123</p>
                            </li>
                            <li>
                                <MdOutlineEmail style={{ color: '#005AA4' }} size={35} />
                                <p>email@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className={contactSectionStyles.column}>

                        <div style={{ width: '100%', height: '200px', position: 'relative' }} >
                            <Image
                                src="/kontakt.png"
                                layout='fill'
                                objectFit='contain'
                                alt={'zdjecie'}
                            />
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default ContactSection