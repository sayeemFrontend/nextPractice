import classes from "./Navbar.module.css"
import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
    return (
        <div className={classes.navContainer}>
            <div className={classes.navbar}>
                <div className={classes.logo}>
                    <Image src="/logo.jpg" alt="" width={200} height={80} />
                </div>
                <div className={classes.navItem}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/ninjas">Ninja Listing</Link>
                </div>

            </div>
        </div>
    );
}

export default Navbar;