import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h2>Dashboard</h2>
      <hr />
      <Link href="/password/add">Add New Website and Password</Link>
      <Link href="/auth/login">Login</Link>
    </div>
  );
}
