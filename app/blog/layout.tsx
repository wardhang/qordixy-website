import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-white">
        <main
          id="main-content"
          tabIndex={-1}
          className="flex flex-col flex-1 outline-none pt-20"
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
