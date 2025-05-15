import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full z-50 rounded-xl mt-3 mx-auto">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://www.youtube.com/watch?v=2yJgwwDcgV8" className="font-mono font-bold text-2xl">
              Jules Trollé
            </a>
            <div className="w-full md:w-auto"> {/* change after to create a burger menu for mobile device */}
              <ul className="font-mono font-bold flex flex-row space-x-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/Skills">Skills</Link></li>
                <li><Link href="/Projects">Projects</Link></li>
              </ul>
            </div>
          </div>
        </nav>
    );
}