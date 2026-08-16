import Navbar from "@/components/website/Navbar";
import Footer from "@/components/website/Footer";
import { Toaster } from "react-hot-toast";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main>{children}
      </main>

      <Footer />
    </>
  );
}