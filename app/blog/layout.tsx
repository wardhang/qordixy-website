import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar solid />
      <div className="min-h-screen flex flex-col bg-[#0A1F44]">
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
