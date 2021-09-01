import Link from 'next/link';
import MainLayout from "../components/MainLayout";
import s from '../styles/error.module.sass'

const ErrorPage = () => {
    return (
        <MainLayout>
            <h1 className={s.error}>Error 404</h1>
            <p>Please <Link href={'/'}><a>go back</a></Link> to safety</p>

        </MainLayout>
    );
};

export default ErrorPage ;
