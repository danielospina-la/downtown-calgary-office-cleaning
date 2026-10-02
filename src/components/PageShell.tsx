import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

/** Shared shell for subpages: header + footer around page content. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
