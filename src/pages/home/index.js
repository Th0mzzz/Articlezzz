import CardPost from 'components/CardPost';
import './home.css';
import posts from 'json/posts.json'
import Banner from 'components/Banner';


export default function Index() {
    return (
        <>
            <Banner />
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