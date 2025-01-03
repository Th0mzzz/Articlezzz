import Button from 'components/button'
import './error.css'
import error404Img from 'assets/erro_404.png'
import { useNavigate } from 'react-router'
export default function ErrorPage({ type }) {
    const navBack = useNavigate()
    return (
        <>
            <div className='conteudoContainer'>
                <span className='texto404'>{type}</span>
                <h1 className='titulo'>Página não encontrada!</h1>
                <p className='paragrafo'>Tem certeza que era isso que buscava? <br />
                    Em alguns instantes será redirecionado para a pagina inicial</p>

                <div className='botaoContainer' onClick={() => { navBack(-1) }}>
                    <Button size={'lg'}>Voltar</Button>
                </div>
                <img className='imagemCachorro' src={error404Img} alt='Cachorro de oculos' />

            </div>
            <div className='espacoEmBranco'></div>
        </>
    )
}