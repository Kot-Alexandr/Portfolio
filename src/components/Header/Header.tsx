import { useEffect, useState } from 'react';
import s from './Header.module.scss'
import Menu from './Nav/Menu/Menu';
import Nav from './Nav/Nav'

const Header = () => {

    const [isScrollDown, setIsScrollDown] = useState(false)
    const [isWidthEnough, setIsWidthEnough] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(true)


    useEffect(() => {
        window.innerWidth < 1000 ? setIsWidthEnough(true) : setIsWidthEnough(false)
        window.pageYOffset > 150 ? setIsScrollDown(true) : setIsScrollDown(false)
        return () => {
            window.removeEventListener('scroll', AELS)
            window.removeEventListener('resize', AELR)
        }
    }, [])
    
    window.addEventListener('scroll', AELS)
    window.addEventListener('resize', AELR)

    function AELS() {
        window.scrollY > 100 ? setIsScrollDown(true) : setIsScrollDown(false)
    }
    function AELR() {
        if (window.innerWidth < 1000) {
            setIsWidthEnough(true)
            setIsCollapsed(true)
        } else {
            setIsWidthEnough(false)
            setIsCollapsed(true)
        }
    }

 


    return (
        <div className={s.Nothing}>
            <div className={isScrollDown || isWidthEnough ? s.headerFixed : s.headerFixedWOColor}>
                <div className={s.header}>
                    <Nav isWidthEnough={isWidthEnough} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                </div>
            </div>
            <div className={isCollapsed ? s.MenuIn : s.MenuOut}>
                <Menu />
            </div>
        </div>

    )
}

export default Header