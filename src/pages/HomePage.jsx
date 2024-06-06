import { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Post from '../components/Post/Post';

export default function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const savedPosts = localStorage.getItem('posts');
        if (savedPosts) {
            setPosts(JSON.parse(savedPosts));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    const handleAddPost = (post) => {
        setPosts((prevPosts) => [post, ...prevPosts]);
    };

    return (
        <>
        <Header onAddPost={handleAddPost} />
        <h1 style={{textAlign: 'center', padding: '1rem 0'}}>Посты</h1>
        <main>
            {posts.map((post, index) => (
                <Post key={index} title={post.title} content={post.content} name={post.name} />
            ))}
        </main>
        </>
    )
}