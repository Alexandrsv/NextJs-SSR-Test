// import App from 'next/app'
import '../styles/main.css'
import NextNprogress from "nextjs-progressbar";

function MyApp({Component, pageProps}) {
    return <>
        <NextNprogress
            color="yellow"
            startPosition={0.3}
            stopDelayMs={20}
            height={3}
            showOnShallow={true}
        />
        <Component {...pageProps} />
        {/*<style jsx global>*/}
        {/*    {`*/}
        {/*      body {*/}
        {/*        font-family: 'Roboto', sans-serif;*/}
        {/*      }*/}
        {/*    `}*/}
        {/*</style>*/}
    </>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
