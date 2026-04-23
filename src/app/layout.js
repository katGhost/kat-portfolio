// import a google font of my choice -> Ubuntu, Montserrat, Roboto Mono
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import NoiseCanvas from "../components/effects/NoiseCanvas";

export const metadata = {
  title: "my portfolio",
  description: "Portfolio of a fullstack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Layer 0: stays behind everything */}
        <NoiseCanvas />

        {/* Layer 1: wraps all visible UI -> one rule covers Navbar + every future component */}
        <div className="site-layer">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}