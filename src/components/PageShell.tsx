import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Shared shell for subpages: header + footer around page content, with a
 * subtle watermark of the D.C.O.C. cleaner (a different pose per page)
 * fixed to the bottom-right corner.
 */
export default function PageShell({
  children,
  bgImage,
}: {
  children: ReactNode;
  bgImage?: string;
}) {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 z-20 w-64 select-none opacity-[0.08] sm:w-80 lg:w-96"
        />
      )}
      <div className="relative z-10 flex flex-1 flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
