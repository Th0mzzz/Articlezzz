import './banner.css';
import minhaFoto from 'assets/minha_foto.jpg'
export default function Banner() {
    return (
        <section className='banner'>
            <header className='apresentacao'>
                <h1 className='titulo'>Hello, World!</h1>
                <p className='paragrafo'>  
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae numquam magni doloremque laudantium aliquam nemo explicabo voluptates, excepturi repellat, dolore ut cum fugiat vel ab, id dignissimos. Vero, laboriosam nam.
                </p>
            </header>
            <div className='imagens'>
                <img src={minhaFoto} className='minhaFoto' alt='Minha imagem de perfil'/>
            </div>
        </section>
    )
}