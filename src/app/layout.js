
import Footer from "@/Components/Shared/Footer";
import { manrope } from "./font";
import "./globals.css";
import { Navbar } from "@/Components/Shared/Navbar";
import Provider from "@/Context/ContextProvider";
import { Toaster } from "react-hot-toast";
import LenisProvider from "@/Components/LenisProvider/LenisProvider";
import ManuNav from "@/Components/Shared/ManuNav";



export const metadata = {
  
  title: "ZYRA",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Provider>

        <Navbar></Navbar>
        <ManuNav></ManuNav>
        <LenisProvider>

        <main className="grow">
        {children}
        </main>
        </LenisProvider>
        <Footer></Footer>
        <Toaster />
        </Provider>
        </body>
    </html>
  );
}
