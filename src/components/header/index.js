import './header.css'
import { NavLink } from 'react-router'
import logo from 'assets/articlezzz-logo.png'
import logoDark from 'assets/articlezzz-logo-dark.png'
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Button from 'components/button';

export default function TemplateHeader() {
    // change Theme

    const [theme, setTheme] = useState(localStorage.getItem('theme'))

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    };

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    let currentScrollY = 0

    const [tfNav, setTfNav] = useState("translateY(0%)")

    window.addEventListener("scroll", () => {
        const newScrollY = window.scrollY;
        if (newScrollY > currentScrollY) {
            setTfNav("translateY(-100%)");
        } else if (newScrollY < currentScrollY) {
            setTfNav("translateY(0%)");
        }
        currentScrollY = newScrollY;
    });

    return (
        <header style={{ height: '100px' }}>
            <nav className='navegacao' style={{ transform: tfNav }}>
                <img src={theme === 'light' ? logo : logoDark} alt='Logo de Th0mzzz' className='logotipo' />
                <ul className='menu'>
                    <li>
                        <NavLink className="link" to='/'>Inicio</NavLink >
                    </li>
                    <li>
                        <NavLink className="link" to='/sobremim'>Sobre mim</NavLink>
                    </li>
                    <li onClick={() => { changeTheme(theme === 'light' ? 'dark' : 'light') }}>
                        <Button type='icon' >
                            {theme === 'light' ? <FaRegMoon /> : <FaRegSun />}
                        </Button>
                    </li>
                </ul>
            </nav>
        </header >
    )
}