import MainLayout from "../../components/MainLayout";
import Link from 'next/link';
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const Post = ({post: serverPost}) => {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(() => {
        const load = async () => {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data)
        }
        if (!serverPost) load()

    }, [router.query.id, serverPost])

    if (!post) {
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }

    return (
        <MainLayout>
            <h1>
                {post.title}
            </h1>
            <p>{post.body}</p>
            <Link href={'/posts'}><a>Back to all posts</a></Link>
        </MainLayout>
    );
};

Post.getInitialProps = async ({query, req}) => {
    if (!req) {
        return {post: null};
    }
    const response = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post = await response.json()
    return {
        post
    }
}


// export async function getServerSideProps({query}) {
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`)
//     const post = await response.json()
//     return {
//         props: {post}
//     }
// }

export default Post
