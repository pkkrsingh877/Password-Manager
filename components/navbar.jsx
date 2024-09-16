import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex space-between">
            <a href="#">Logo</a>
            <ul className="flex space-around p-2">
                <Link href="/">Home</Link>
                <Link href="/password/add">Add Account</Link>
                <Link href="/auth/login">Login</Link>
            </ul>
        </nav>
    );
}

export default Navbar;