import catLogo from './../../../accets/img/catLogo.svg'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import Menu from './Menu/Menu'
import s from './Nav.module.scss'

type NavPropsType = {
    isWidthEnough: boolean
    setIsCollapsed: (bool: boolean) => void
    isCollapsed: boolean
}

const Nav = (props: NavPropsType) => {

    return (
        <div className={s.navBlock}>
            <img className={s.headerLogo} src={catLogo} />
            {!props.isWidthEnough ? <Menu /> : <BurgerMenu isCollapsed={props.isCollapsed} setIsCollapsed={props.setIsCollapsed} />}
        </div>
    )
}

export default Nav