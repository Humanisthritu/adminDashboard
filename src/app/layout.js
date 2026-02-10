import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})

export const metadata = {
  title: "Grocery Admin panel",
  description: "Grocery Admin panel",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mainWrapper flex gap-1">
          <div className="sidebarWrapper w-[15%] min-h-screen bg-white shadow-md">
            <Sidebar />
          </div>

          <div className="mainContent w-[82%]">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
