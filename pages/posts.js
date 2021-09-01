import React, {useEffect, useState} from 'react';
import MainLayout from "../components/MainLayout";
import Link from 'next/link';

const Posts = ({posts: serverPosts}) => {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        const load = async () => {
            const response = await fetch('http://localhost:4200/posts')
            const data = await response.json()
            setPosts(data)
        }
        if (!serverPosts) load()
    }, [serverPosts])

    console.log('posts', posts)

    if (!posts) {
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }

    return (
        <MainLayout title={'Posts Page'}>
            <h1>
                Posts page
            </h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
        </MainLayout>
    );
};

Posts.getInitialProps = async ({req}) => {
    if (!req) {
        return {posts: null};
    }
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()
    return {
        posts
    }
}


export default Posts;
