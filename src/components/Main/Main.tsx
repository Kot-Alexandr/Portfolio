import s from './Main.module.scss'
import me from './../../accets/img/me.svg'


const Main = () => {
    return (
        <div className={s.mainStyle}>
            <div className={s.mainContainer}>
                <img className={s.mainImg} src={me} />
                <div className={s.describe}>
                    <h3 className={s.surenameText}>KOT</h3>
                    <h3 className={s.nameText}>ALEXANDR</h3>
                    <span className={s.spanText}>Frontend Developer</span>
                </div>
            </div>
            <div id='Main' className={s.up}></div>
        </div>
    )
}

export default Main