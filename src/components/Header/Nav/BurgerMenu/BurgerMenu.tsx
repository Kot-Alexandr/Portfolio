import burgerToClose from './../../../../accets/img/burgerToClose.svg'
import burgerToOpen from './../../../../accets/img/burgerToOpen.svg'
import s from './BurgerMenu.module.scss'

type BurgerMenuPropsType = {
    setIsCollapsed: (bool: boolean) => void
    isCollapsed: boolean
}

const BurgerMenu = (props: BurgerMenuPropsType) => {


    const ChangeSVGIcon = () => {
        props.setIsCollapsed(!props.isCollapsed)
    }

    return (
        <div className={s.navBlock}>
            <img onClick={ChangeSVGIcon} className={props.isCollapsed ? s.Burger : s.BurgerW} src={props.isCollapsed ? burgerToOpen : burgerToClose} />
        </div>

    )
}

export default BurgerMenu