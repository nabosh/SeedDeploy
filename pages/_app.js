import Link from "next/link";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Link href="/"><a>Home </a></Link>
            <Link href="/about"><a>About</a></Link>
            {/* <Link href="/products"><a> Products</a></Link>
            <Link href="/client-side"><a> Client-side</a></Link>
            <Link href="/static-side"><a> Static-side</a></Link> */}
            <Component {...pageProps} />
            <footer>FOOTER</footer>
        </>
    )
};

export default MyApp;
