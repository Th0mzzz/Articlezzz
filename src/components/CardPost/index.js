import { Link } from "react-router"
import "./cardpost.css"
import Button from "components/button"

export default function CardPost({ post }) {
    return (
        <Link to={`/post/${post.id}`}>
            <div className="post">
                <img className="capa " src={`../assets/posts/${post.id}/capa.png`} alt="imagem de capa do post" />
                <h3 className="titulo">{post.titulo}</h3>
                <Button>Saber mais</Button>
            </div>
        </Link>
    )
}