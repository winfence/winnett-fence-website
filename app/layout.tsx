import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Winnett Fence LLC | Quality Fence Repair You Can Trust",
  description:
    "Premium fence repair and installation serving Attleboro, MA and surrounding Massachusetts towns.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container">
            <h1 className="logo">Winnett Fence LLC</h1>
            <nav>
              <a href="#services">Services</a>
              <a href="#repairs">Repairs</a>
              <a href="#contact">Get a Quote</a>
            </nav>
          </div>
        </header>

        {children}
       <Footer />
      </body>
    </html>
  );
}
