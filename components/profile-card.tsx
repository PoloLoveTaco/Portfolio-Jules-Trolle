export default function ProfileCard() {
    return (
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 px-4 max-w-screen-md w-full">
        <div className="flex flex-col p-6 bg-zinc-800 rounded-md text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">Hello, I'm Jules Trollé</h1>
          <h2 className="text-xl font-semibold mb-4">This is my portfolio</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <a href="https://github.com/PoloLoveTaco">
              <p className="text-xs font-semibold bg-white text-zinc-600 px-2 py-1 rounded-md">Github</p>
            </a>
            <a href="https://fr.linkedin.com/in/jules-troll%C3%A9-537a8b232/en">
              <p className="text-xs font-semibold bg-white text-zinc-600 px-2 py-1 rounded-md">Linkedin</p>
            </a>
            <a href="https://www.instagram.com/jules.tr/">
              <p className="text-xs font-semibold bg-white text-zinc-600 px-2 py-1 rounded-md">Instagram</p>
            </a>
          </div>
        </div>
  
        <a href="https://pololovetaco.github.io/">
          <img src="/project-logo/PoloFy.jpg" alt="me" className="rounded-md w-48 h-auto" />
        </a>
      </div>
    );
  }
  
