import './post-page.css';
export default function PostContent(props) {
    return (
        <article className='postModeloContainer'>
            <div className='fotoCapa' style={{ backgroundImage: `url(${props.backImg})` }}>
            </div>
            <h2 className='titulo'>{props.title}</h2>
            <div className='postConteudoContainer'>
                {props.children}
            </div>
        </article>
    )
}