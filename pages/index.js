import Link from 'next/link';
import MainLayout from "../components/MainLayout";

const Index = () => {
    return (
        <MainLayout title={'Main'}>
            <h1>
                Hello Next.JS!
            </h1>
            <p><Link href={"/about"}>About</Link></p>
            <p><Link href={"/posts"}>Posts</Link></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing. ъЪ!</p>
        </MainLayout>
    );
};

export default Index;
