import { GITHUB_URL } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className=" w-full h-20 flex text-[10px] md:text-[12px] lg:text-[13px] items-center justify-center md:flex-row flex-col dark:bg-[#0a0a0a] ">
      <span>© {year} - Events@UCEK</span>
      <div className="flex md:hidden gap-2">
        <Link href={GITHUB_URL}>Github</Link>●
        <Link href={"/contributors"}>Contributors</Link>
      </div>
      <span className="hidden sm:inline"> &nbsp; | &nbsp;</span>
      <span>An Initiative by IEEE SB UCEK.</span>
    </div>
  );
}

export default Footer;
