import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <Image
        className="logo"
        src="/assets/logo.png"
        width={48}
        height={54}
        alt="logo"
      />
      <p className="footerTitle">Faisons naître l&apos;extraordinaire!</p>
      <Link href="/contact" className="mainButton">
        Contactez moi
        <div className="arrowWrapper">
          <Image src="/assets/arrow.svg" width={20} height={20} alt="" />
        </div>
      </Link>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/patricia.letellier.9849/"
          >
            <Image
              src="/assets/icons/facebook_icone.svg"
              height={25}
              width={25}
              alt="Découvrez notre Facebook"
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.tiktok.com/@letellierpatricia?_t=8rhThBvbAZs&_r=1"
          >
            <Image
              src="/assets/icons/tiktok_icone.svg"
              height={25}
              width={25}
              alt="Découvrez notre Tiktok"
            />
          </a>
        </li>
      </ul>
      <div className="footerAside">
        <p className="copyright">© 2024 Corps et Ame. All rights reserved.</p>
        <nav>
          <Link href={"/contact"}>Accueil</Link>
          <Link href={"/#presentation"}>Qui je suis</Link>
          <Link href={"/#benefits"}>Mes préstations</Link>
          <Link href={"/recueil-des-avis"}>Livre d&apos;Or </Link>
        </nav>
      </div>
    </footer>
  );
}
