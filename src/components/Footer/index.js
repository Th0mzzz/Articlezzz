import Button from 'components/button';
import './footer.css';
import { RxLinkedinLogo } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import logoTh0mzzzDark from "assets/th0mzzz-logo-dark.png"
export default function TemplateFooter() {
    return (
        <footer className='rodape'>
            <h3>Desenvolvido por  <img src={logoTh0mzzzDark} /></h3>
            <ul className='redes'>
                <li>
                    <a href='https://github.com/Th0mzzz' target='_blank'>
                        <Button type='icon'><RxGithubLogo /></Button>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/thomaz-vasconcelos-mendes-027388268/' target='_blank'>
                        <Button type='icon'><RxLinkedinLogo /></Button>
                    </a>
                </li>
            </ul>
        </footer>
    )
}