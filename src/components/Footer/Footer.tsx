import s from './Footer.module.scss'
import telegram from '../../accets/img/telegram.svg'
import linked from '../../accets/img/linkedIn.svg'
import gmail from '../../accets/img/gmail.svg'
import github from '../../accets/img/github.svg'
import inst from '../../accets/img/inst.svg'


const Footer = () => {
    return (
        <div className={s.footerStyle}>
            <div className={s.footerBlock}>
                <h3 className={s.h3footer}>Cat and Co.</h3>
                <div className={s.footersIMG}>
                    <a href='https://t.me/Kot_Alexandr' target="_blank" rel="noreferrer"> <img src={telegram} className={s.imgFoot} /></a>
                    <a href='https://www.linkedin.com/in/alexandr-kot-0a5b9a262/' target="_blank" rel="noreferrer"><img src={linked} className={s.imgFoot} /></a>
                    <a href='mailto:alexandr.kot.dev@gmail.com?subject=Job notification letter'><img src={gmail} className={s.imgFoot} /></a>
                    <a href='https://github.com/Kot-Alexandr' target="_blank" rel="noreferrer"> <img src={github} className={s.imgFoot} /></a>
                    <a href='https://www.instagram.com/kotofojo/' target="_blank" rel="noreferrer"> <img src={inst} className={s.imgFoot} /></a>
                </div>
                <span className={s.spanText}>All cats rigths are protected</span>
            </div>
        </div>
    )
}

export default Footer