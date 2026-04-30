// import a google font of my choice -> Ubuntu, Montserrat, Roboto Mono
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import NoiseCanvas from "../components/effects/NoiseCanvas";
import Sidebar from "../components/layout/Sidebar";

export const metadata = {
  title: "my portfolio",
  description: "Portfolio of a fullstack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Background layer */}
        <div className="noise-layer">
          <NoiseCanvas />
        </div>

        {/* App layer */}
        <div className="app-shell">

          {/* Top navbar -> fixed or sticky, will decide best later */}
          <Navbar />

          {/* Middle layout */}
          <div className="content-shell">
            <Sidebar />
            <main className="main-content">
              {children}
            </main>
          </div>

        </div>
      </body>
    </html>
  );
}



// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <div className="app-shell">
//           <Sidebar />
//           <main className="main-content">
//             {children}
//           </main>
//         </div>
//       </body>
//     </html>
//   );
// }