import Image from "next/image";

import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <div className="flex w-full h-screen flex-col">
        <header>
          <Navbar />
        </header>

        <div className="z-40 flex flex-col mx-auto w-full sm:max-w-[92%] md:max-w-[80%] h-full items-center justify-center">
            <div className="flex flex-col w-full gap-5 sm:gap-10 sm:flex-row md:space-x-0 space-x-3.5 items-center justify-evenly">
              <div className="flex flex-col">
                <div className="overflow-hidden">
                  <div className="inline-block">
                    <h1 className="text-fluid-lg font-bold whitespace-nowrap">Hello, i'm Jules Trollé</h1>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="inline-block">
                    <h2 className="text-fluid-md">This is my portfolio</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
