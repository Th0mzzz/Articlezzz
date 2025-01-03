import './banner.css';
import bannerImg from 'assets/Articlezzz-logo-sm.png'
export default function Banner() {
    return (
        <section className='banner'>
            <header className='apresentacao'>
                <h1 className='titulo '>Seja bem-vindo ao <strong className='strong-text'>Articlezzz!</strong></h1>
                <p className='paragrafo'>
                    Um site baseado no projeto do curso da <a href='https://www.alura.com.br/' rel="noreferrer" target="_blank" className='strong-text'>Alura</a> de React, mais especificamente de <a href='https://reactrouter.com/' rel="noreferrer" target="_blank" className='strong-text'>React-router-dom</a>. Ele é um site de artigos postados por mim <a href='https://github.com/Th0mzzz' rel="noreferrer" target="_blank" className='strong-text'>Th0mzzz</a> .
                </p>
            </header>
            <img src={bannerImg} className='banner-img' alt='Minha imagem de perfil' />
        </section>
    )
}