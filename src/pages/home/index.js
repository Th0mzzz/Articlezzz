import CardPost from 'components/CardPost';
import './home.css';
import posts from 'json/posts.json'


export default function Index() {
    return (
        <>
            <ul className='posts'>
                {posts.map(post => {
                    return (
                        <li key={post.id}>
                            <CardPost post={post} />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}