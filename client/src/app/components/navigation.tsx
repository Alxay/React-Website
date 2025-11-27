import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="absolute bg-[#0f0f0f] top-0 left-0 w-full p-4 text-white flex justify-between items-center">
      <ul className="flex space-x-4">
        <li className="hover:underline cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link href="/clicker">Clicker</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link href="/codeshare">Codeshare</Link>
        </li>
      </ul>
    </nav>
  );
}
