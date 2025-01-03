import PostContent from "components/PostPage";
import fotoCapa from 'assets/sobre_mim_capa.png'
import minhaFoto from 'assets/minha_foto.jpg'
import './aboutMe.css';
export default function AboutMe() {
    return (
        <>
            <PostContent backImg={fotoCapa} title='Sobre mim'>
                <h3 className="subtitulo">Olá, sou Th0mzzz</h3>
                <img src={minhaFoto} className="fotoSobreMim" />
                <p className="paragrafo">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae numquam magni doloremque laudantium aliquam nemo explicabo voluptates, excepturi repellat, dolore ut cum fugiat vel ab, id dignissimos. 
                    Vero, laboriosam nam.
                </p>
                <p className="paragrafo">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae numquam magni doloremque laudantium aliquam nemo explicabo voluptates, excepturi repellat, dolore ut cum fugiat vel ab, id dignissimos.
                     Vero, laboriosam nam.
                </p>
                <p className="paragrafo">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae numquam magni doloremque laudantium aliquam nemo explicabo voluptates, excepturi repellat, dolore ut cum fugiat vel ab, id dignissimos. 
                    Vero, laboriosam nam.
                </p>
                <p className="paragrafo">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae numquam magni doloremque laudantium aliquam nemo explicabo voluptates, excepturi repellat, dolore ut cum fugiat vel ab, id dignissimos. 
                    Vero, laboriosam nam.
                </p>
                <p className="paragrafo">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae numquam magni doloremque laudantium aliquam nemo explicabo voluptates, excepturi repellat, dolore ut cum fugiat vel ab, id dignissimos. 
                    Vero, laboriosam nam.
                </p>
            </PostContent>
        </>
    )
}