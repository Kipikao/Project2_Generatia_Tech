"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import MenuIcon from "../../../public/Img/menuIcon";
import Xclose from "../../../public/Img/xClose";
// import Image from "next/image";

export default function Header() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <nav className={` shadow-md w-full ${styles.nav_items}`}>
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
        <div className="flex text-2xl cursor-pointer items-center gap-2">
        <img
          src="../../.././Img/Green_Vs_Polluted_City.jpg"
          className={styles.logo}
        />
        <h3 className={styles.logoName}>TravelCity</h3>
        </div>
      <div
        onClick={() => setisOpen(!isOpen)}
        className=" absolute right-8 top-6 cursor-pointer md:hidden"
      >
        {isOpen ? <Xclose /> : <MenuIcon />}
      </div>
      <div
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-1 left-0 w-full md:w-auto bg-black
      md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? "top-30" : "top-[-490px]"}`}
      >
        <Link href={"/"} className={styles.link}>
          Home
        </Link>
        <Link href={"/search"} className={styles.link}>
          Search
        </Link>
        <Link href={"/favorites"} className={styles.link}>
          Favorites
        </Link>
        </div>
      </div>
    </nav>
  );
}
