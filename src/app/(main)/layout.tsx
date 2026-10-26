import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import Categories from "@/src/components/Categories";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Navbar />
      <Categories />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}