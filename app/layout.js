import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nexus",
  description: "callmeKvj",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <SignedOut> 
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        {children}
        <Footer/>
        </body>
    </html>
    </ClerkProvider>
  );
}