import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h2>Dashboard</h2>
      <hr />
      <Link href="/addPassword">Add New Website and Password</Link>
    </div>
  );
}
