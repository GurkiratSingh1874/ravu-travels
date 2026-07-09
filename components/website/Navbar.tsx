import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 shadow">

      <h1 className="text-2xl font-bold">
        RAVU TRAVELS
      </h1>

      <div className="flex gap-8">

        <Link href="/">Home</Link>

        <Link href="/tours">
          Tour Packages
        </Link>

        <Link href="/one-way">
          One Way
        </Link>

        <Link href="/round-trip">
          Round Trip
        </Link>

        <Link href="/contact">
          Contact
        </Link>

      </div>

    </nav>
  );
}