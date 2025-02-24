import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PresentationSection() {
  return (
    <section id="presentation" className="presentationSection">
      <div className="presentationSectionWrapper">
        <article className="presentationArticle">
          <div className="titleAside">Qui je suis</div>
          <h2>Votre partenaire bien-être</h2>
          <h3>Votre chemin vers l’équilibre commence ici</h3>
          <div className="presentationArticleWrapper">
            <p>
              Aller vers son mieux-être..... voilà un début Nous portons en
              nous, tel un tatouagaje, des maux, des fardeaux, des peurs dûs à
              des croyances, à des souvenirs enfouis ou au transgenerationnel,
              (chocs émotionnels non exprimés) qui ne nous appartiennent pas.
              Ils impactent notre corps physique émotionnel et mental mais
              seraient aussi à l&apos;origine de schémas répétitifs.
            </p>
            <div className="qualificationsWrapper">
              <h4>Qualification :</h4>
              <ul>
                <li>
                  <p>
                    Thérapeute en écoute du corps en relation d’aide dans le
                    langage non verbal
                  </p>
                </li>
                <li>
                  <p>
                    Thérapeute en libération des mémoires cellulaire et
                    transgérationnel
                  </p>
                </li>
                <li>
                  <p>
                    Thérapeute en libération des blocages mentaux, physiques et
                    émotionnels.
                  </p>
                </li>
              </ul>
            </div>
            <Link className="mainButton" href="/contact">
              Contactez moi
              <div className="arrowWrapper">
                <Image src="/assets/arrow.svg" width={20} height={20} alt="" />
              </div>
            </Link>
          </div>
        </article>
        <aside className="presentationAside">
          <Image
            src="/assets/pictures/portrait.JPG"
            width={680}
            height={700}
            alt=""
          />
        </aside>
      </div>
      <div className="statsWrapper">
        <Image src="/assets/pictures/salon.jpg" fill={true} alt="" />
        <div className="stats">
          <div className="stat">
            <p>10+</p>
            <p>Ans d&apos;experience</p>
          </div>
          <div className="stat">
            <p>50+</p>
            <p>Patients</p>
          </div>
          <div className="stat">
            <p>100+</p>
            <p>Traitements</p>
          </div>
        </div>
      </div>
    </section>
  );
}
