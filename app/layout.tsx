import "./globals.css";
import Navbar from "@/components/navbar";
import BackgroundCircle from "@/components/background-circle";

export const metadata = {
  title: "Mon Portfolio",
  description: "Portfolio de Jules",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <main className="flex flex-col min-h-screen w-full">
          <Navbar />
          <BackgroundCircle />
          <div className="flex-1 flex items-center justify-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
