// import a google font of my choice -> Ubuntu, Montserrat, Roboto Mono
import "./globals.css";
import Navbar from "@/components/Navbar";
import NoiseCanvas from "@/components/NoiseCanvas";

export const metadata = {
  title: "AN Mogashoa - Portfolio",
  description: "Portfolio of AN Mogashoa, a fullstack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <NoiseCanvas />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
