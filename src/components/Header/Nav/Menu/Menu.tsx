import s from './Menu.module.scss'

const Menu = () => {
    return (
        <div className={s.navContainer}>
            <a className={s.linkStyle} href='#Main'>Main</a>
            <a className={s.linkStyle} href='#Skills'>Skills</a>
            <a className={s.linkStyle} href='#Projects'>Projects</a>
            <a className={s.linkStyle} href='#Contacts'>Contacts</a>
        </div>
    )
}

export default Menu