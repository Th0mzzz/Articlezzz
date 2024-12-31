import './header.css'

export default function TemplateHeader() {
    return (
        <header>
            <nav className='navegacao'>

                <a className="link" href='/'>Home</a>
                <a className="link" href='/sobremim'>Sobre mim</a>

            </nav>
        </header>
    )
}