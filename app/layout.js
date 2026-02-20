import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tutorial Journal App",
  description: "Youtube video helping me learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="bg-[url('/chill-bg.jpeg')] opacity-50 fixed -z-10 inset-0 bg-cover" />
        <header></header>
        <main className='min-h-screen'>{children}</main>
        <footer className='bg-purple-300 py-12 bg-opacity-10'>
          <div className='mx-auto px-4 text-center text-gray-900'>
            <p>Made with love by Nick M.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
