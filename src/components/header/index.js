import { NavLink } from 'react-router'
import './header.css'

export default function TemplateHeader() {
    return (
        <header>
            <nav className='navegacao'>
                <NavLink className="link" to='/'>Home</NavLink >
                <NavLink className="link" to='/sobremim'>Sobre mim</NavLink>
                
            </nav>
        </header>
    )
}