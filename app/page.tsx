export default function Home() {
  return (
    <div className="flex w-full h-screen flex-col">
      <div className="z-40 flex flex-col mx-auto w-full sm:max-w-[92%] md:max-w-[40%] h-full items-center justify-center">
          <div className="flex flex-col w-full sm:flex-row md:space-x-0 space-x-3.5 items-center justify-evenly">
            <div className="flex flex-col p-6 bg-zinc-800 rounded-md">
              <div className="overflow-hidden">
                <div className="inline-block">
                  <h1 className="text-fluid-lg text-3xl font-bold whitespace-nowrap">Hello, i'm Jules Trollé</h1>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="inline-block">
                  <h2 className="text-fluid-md text-xl font-semibold">This is my portfolio</h2>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="inline-flex space-x-2">
                  <a href="https://github.com/PoloLoveTaco">
                    <p className="text-fluid-md text-xs font-semibold bg-white rounded-md text-zinc-600 p-1">Github</p>
                  </a>
                  <a href="https://fr.linkedin.com/in/jules-troll%C3%A9-537a8b232/en">
                    <p className="text-fluid-md text-xs font-semibold bg-white rounded-md text-zinc-600 p-1">Linkedin</p>
                  </a>
                  <a href="https://www.instagram.com/jules.tr/">
                    <p className="text-fluid-md text-xs font-semibold bg-white rounded-md text-zinc-600 p-1">Instagram</p>
                  </a>
                </div>
              </div>
            </div>
            <a href="https://pololovetaco.github.io/">
              <img src="/project-logo/PoloFy.jpg" alt="me" className="rounded-md" />
            </a>
          </div>
        </div>
      </div>
  );
}
