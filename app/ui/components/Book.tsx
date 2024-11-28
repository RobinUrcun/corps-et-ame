"use client";
import React, { useState } from "react";
import Page from "./Page";
import adviceList from "../../utils/advicesList.json";
import Image from "next/image";
import { dancing_Script } from "../../utils/fonts";

export default function Book() {
  const [page, setPage] = useState(1);
  return (
    <React.Fragment>
      <article className={`advicesArticle ${dancing_Script.className}`}>
        <div className="book">
          <Page
            pageNumber={1}
            totalPages={adviceList.length + 3}
            actualPage={page}
          >
            <Image src="/assets/bookCover3.png" fill={true} alt="" />
            <h2>Livre d&apos;Or</h2>
          </Page>
          <Page
            pageNumber={2}
            totalPages={adviceList.length + 3}
            actualPage={page}
          >
            <h3>Corps et Ame</h3>
            <Image src="/assets/lotus.webp" width={300} height={300} alt="" />
          </Page>

          {adviceList.map((advice, index) => (
            <Page
              key={advice.author + index}
              advice={advice}
              pageNumber={index + 3}
              totalPages={adviceList.length + 3}
              actualPage={page}
            />
          ))}
          <Page
            pageNumber={adviceList.length + 3}
            totalPages={adviceList.length + 3}
            actualPage={page}
          >
            <Image
              src="/assets/bookCover3.pnj"
              fill={true}
              alt=""
              priority={true}
            />
          </Page>
        </div>
      </article>
      <aside className="controls">
        <div
          className="mainButton"
          onClick={() => {
            if (page === 1) {
              return;
            } else {
              const newPage = page - 1;
              setPage(newPage);
            }
          }}
        >
          Page precedente
        </div>
        <div
          onClick={() => {
            if (page === adviceList.length + 2) {
              return;
            } else {
              const newPage = page + 1;
              setPage(newPage);
            }
          }}
          className="mainButton"
        >
          Page suivante
        </div>
      </aside>
    </React.Fragment>
  );
}
