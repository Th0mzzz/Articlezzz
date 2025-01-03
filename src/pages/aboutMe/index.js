import PostContent from "components/PostPage";
import fotoCapa from 'assets/sobre_mim_capa.png'
import minhaFoto from 'assets/minha_foto.jpg'
import './aboutMe.css';
import { RxLinkedinLogo } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import { CgMail } from "react-icons/cg";
import Button from "components/button";
export default function AboutMe() {
    return (
        <>
            <PostContent backImg={fotoCapa} title='Sobre mim'>
                <h3 className="subtitulo">Olá, sou <strong className="strong-text">Th0mzzz</strong></h3>
                <img src={minhaFoto} className="fotoSobreMim" />
                <p className="paragrafo">
                    Sou um amante da programação com uma grande ambição e determinação para conquistar as coisas que almejo e evoluir constantemente, sempre pronto para aprender algo novo.
                </p>
                <p className="paragrafo">
                    Sou técnico de informática para internet, formado na Fundação Instituo de Educação de Barueri (FIEB) e tenho 1 ano e 7 meses de experiência de estágio em Jandira no setor de T.I. da prefeitura.
                </p>
                <p className="paragrafo">
                    Sou uma pessoa responsável e atenta aos prazos, além de trabalhar bem em equipe. Tento sempre me manter atualizado perante as tecnologias e notícias e manter minha mente aberta a novas oportunidades e pensamentos.
                </p>

                <h3 className="subtitulo">Para saber mais sobre mim</h3>
                <div className="about-redes">
                    <a href='https://www.linkedin.com/in/thomaz-vasconcelos-mendes-027388268/' target="_blank" rel="noreferrer"><Button  type="outline"><RxLinkedinLogo /> Linkedin</Button></a>
                    <a href='https://github.com/Th0mzzz' target="_blank" rel="noreferrer"><Button  type="outline"><RxGithubLogo /> Github</Button></a>
                    <a href="mailto:contatothomazvmendes@gmail.com" target="_blank" rel="noreferrer"><Button  type="outline"><CgMail />Gmail</Button></a>
                </div>
            </PostContent>
        </>
    )
}