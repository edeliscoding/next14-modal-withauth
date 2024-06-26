import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/navbar/Navbar";
import LoginModal from "@/app/components/modals/LoginModal";
import RegisterModal from "@/app/components/modals/RegisterModal";
// import SearchModal from "@/app/components/modals/SearchModal";
// import RentModal from "@/app/components/modals/RentModal";

import getCurrentUser from "./actions/getCurrentUser";
import ToasterProvider from "./providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        {/* <SearchModal />
        <RentModal /> */}
        <Navbar currentUser={currentUser} />
        {/* <Navbar /> */}
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
