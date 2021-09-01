import Router from 'next/router';
import MainLayout from "../../components/MainLayout";

const Index = ({title}) => {
    return (
        <MainLayout title={'About Page'}>
            <h1>
                {title}
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <button onClick={()=>Router.push('/posts')}>Go to posts</button>
        </MainLayout>
    );
};

Index.getInitialProps = async () => {
    const response = await fetch(`http://localhost:4200/about/`)
    const data = await response.json()
    return {
        title: data.title
    }
}


export default Index;
