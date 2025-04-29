export default function Navbar() {
    return (
        <nav>
          <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://www.youtube.com/watch?v=2yJgwwDcgV8" className="font-mono font-bold text-2xl">
              Jules Trollé
            </a>
            <div className="hidden w-full md:block md:w-auto">
              <ul className="font-mono font-bold flex flex-row space-x-4">
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Tools">Tools</a></li>
                <li><a href="/Projects">Project</a></li>
              </ul>
            </div>
          </div>
        </nav>
    );
}