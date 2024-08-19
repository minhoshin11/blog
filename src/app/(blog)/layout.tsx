import { Merriweather } from "next/font/google";
import Link from "next/link";
const merrieweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <article
        className={`container mx-auto px-5 ${merrieweather.className} antialiased`}
      >
        <div className="max-w-[1100px] mx-auto">
          {/* 헤더 영역 */}
          <header className="flex justify-between items-center py-[30px]">
            <Link href="/">
              <h1 className="text-2xl text-[#000638] font-bold">Minho</h1>
            </Link>
            <nav>
              <ul className="flex gap-5 text-lg text-[#605C59]">
                <li>
                  <Link href="/write">Write</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="min-h-[calc(100vh)]">{children}</main>
        </div>
      </article>
      <footer className={`bg-[#F5F5F5] py-[36px] ${merrieweather.className}`}>
        <div className="container flex flex-col justify-end items-center mx-auto">
          <nav className="flex gap-[25px] text-[#544B44] text-sm mb-[26px]">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </nav>
          <div>
            <p className="text-[#3E3E3E]">
              © 2024 minho-shin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
