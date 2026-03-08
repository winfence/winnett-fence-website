import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LocalBusinessSchema from "./components/LocalBusinessSchema";

export const metadata = {
  title: "Winnett Fence LLC | Quality Fence Repair You Can Trust",
  description:
    "Premium fence repair and installation serving Attleboro, MA and surrounding Massachusetts towns.",
  openGraph: {
    title: "Winnett Fence",
    description: "Professional fence installation and repair.",
    images: [
      {
        url: "/images/logo/winnett-fence-logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessSchema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
