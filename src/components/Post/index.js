import { Route, Routes, useParams } from "react-router"
import posts from 'json/posts.json'
import PostContent from "components/PostPage"
import ReactMarkdown from "react-markdown";
import './post.css';
import ErrorPage from "components/Error";
import TemplatePage from "components/TemplatePage";
import CardPost from "components/CardPost";
export default function Post() {
    const params = useParams()
    const post = posts.find(p => { return p.id === Number(params.id) })

    if (!post) {
        return <ErrorPage />
    }
    return (
        <Routes>
            <Route path="*" element={<TemplatePage />}>
                <Route index element={
                    <PostContent backImg={`/assets/posts/${post.id}/capa.png`} title={post.titulo}>
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                        <h2 className="titulo" style={{ marginBottom: '3rem', fontSize:'3.5rem' }}>Outros posts que você pode gostar...</h2>
                        <div className="other-postsContainer">
                            {posts.filter((p) => p.id !== post.id).map((ps, index) => {
                                if (index < 4) {
                                    return (
                                        <li key={ps.id}>
                                            <CardPost post={ps} />
                                        </li>
                                    )
                                }
                                return false
                            })}
                        </div>
                    </PostContent>
                } />
            </Route>
        </Routes>

    )
}