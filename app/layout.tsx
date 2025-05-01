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
        <main className="min-h-screen flex flex-col items-center">
          <Navbar />
          <BackgroundCircle />
          {children}
        </main>
      </body>
    </html>
  );
}
