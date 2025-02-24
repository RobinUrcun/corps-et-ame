"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <Image
        className="logo"
        src="/assets/logo.png"
        width={48}
        height={54}
        alt="logo"
      />
      <nav className={isOpen ? "isOpen" : ""}>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="btnMenu"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <Link
          onClick={() => {
            setIsOpen(false);
          }}
          className="mainButton"
          href={"/contact"}
        >
          Contactez moi
          <div className="arrowWrapper">
            <Image src="/assets/arrow.svg" width={20} height={20} alt="" />
          </div>
        </Link>
        <Link href={"/"}>Accueil</Link>
        <Link href={"/#presentation"}>Qui je suis</Link>{" "}
        <Link href={"/#benefits"}>Mes préstations</Link>
        <Link href={"/recueil-des-avis"}>Livre d&apos;Or</Link>
      </nav>
      <Link className="mainButton" href={"/contact"}>
        Contactez moi
        <div className="arrowWrapper">
          <Image src="/assets/arrow.svg" width={20} height={20} alt="" />
        </div>
      </Link>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="btnMenu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}
