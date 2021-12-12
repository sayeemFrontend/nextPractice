import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Cart from './../comps/SingleCart/Cart';
const About = () => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Sayeem | Nextjs</title>
                <meta name="keywords" content="ninjas" />;
            </Head>

            <Cart />
        </div>
    );
}

export default About;