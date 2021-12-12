import classes from "./ninjas.module.css"
import Link from 'next/link'

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        props: {
            ninjas: data
        }
    }
}


const NinjaHome = ({ ninjas }) => {

    return (
        <div className={classes.ninjas}>
            <h2> All users...</h2>
            <ul>
                {ninjas.map((nin) => (
                    <Link href={`/ninjas/${nin.id}`} key={nin.id} >
                        <li>{nin.name}</li>
                    </Link>
                ))}

            </ul>

        </div>
    );
}

export default NinjaHome