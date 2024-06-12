import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Rubik } from "next/font/google";
import { cn } from "@/utils/classNames";
import { Toaster } from "sonner";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToDoList",
  description: "ToDoList created with Next.js 14, TypeScript, Tailwind CSS and Prisma",
};

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={cn(rubik.className, 'bg-zinc-800 text-zinc-800')}>
        <header><Header/></header>
        <main>
          {props.children}
          <Toaster richColors/>
        </main>
        <footer><Footer/></footer>
      </body>
    </html>
  );
};

export default RootLayout;