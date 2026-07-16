
import { manrope } from "./font";
import "./globals.css";
import { Navbar } from "@/Components/Shared/Navbar";



export const metadata = {
  
  title: "ZYRA | Home",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main className="grow">
        {children}
        </main>
        </body>
    </html>
  );
}
