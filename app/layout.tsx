import "./globals.css";

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

        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Winnett Fence LLC</p>
            <p>Quality Fence Repair You Can Trust.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
