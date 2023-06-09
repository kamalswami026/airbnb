"use client";

import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  //   const router = useRouter();
  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="50"
      width="50"
      src="/images/logo.png"
    />
  );
};

export default Logo;
