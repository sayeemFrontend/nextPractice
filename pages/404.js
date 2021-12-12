import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router"

const NotFound = () => {
    const router = useRouter()


    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)

    }, [])

    return (
        <div className="notFound">

            <h1>Opps.......</h1>
            <h2>
                That page Not found
            </h2>
            <p>Go Back to <Link href="/">homepage</Link></p>

        </div>
    );
}

export default NotFound;