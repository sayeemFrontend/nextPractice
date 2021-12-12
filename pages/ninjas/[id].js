import router, { useRouter } from "next/router"
import { useEffect, useState } from "react"



const DetailPage = ({ ninja }) => {
    // const [data, setData] = useState(null)
    // const router = useRouter()
    // const id = router.query.id
    // useEffect(() => {
    //     const getData = async () => {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    //         const tempData = await response.json()
    //         setData(tempData)
    //     }
    //     getData()
    // }, [router.asPath])

    // console.log(data);


    // if (data === null) {
    //     return (
    //         <div>
    //             Loading Data
    //         </div>
    //     )
    // }
    console.log("dAAaa", ninja);
    return (
        <div>
            This i sDetail Page for {ninja.id}
        </div>
    );
}

export default DetailPage


export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    const paths = data.map((ninja) => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await response.json()
    return {
        props: { ninja: data }
    }
}