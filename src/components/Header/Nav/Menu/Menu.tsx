import s from './Menu.module.scss'

const Menu = () => {
    return (
        <div className={s.navContainer}>
            <a className={s.linkStyle} href='www.google.com'>Main</a>
            <a className={s.linkStyle} href='#Skills'>Skills</a>
            <a className={s.linkStyle} href='#'>Projects</a>
            <a className={s.linkStyle} href='#'>Contacts</a>
        </div>
    )
}

export default Menu