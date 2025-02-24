"use client";
import React from "react";

interface PageProps {
  advice?: { author: string; message: string };
  pageNumber: number;
  totalPages: number;
  actualPage: number;
  children?: React.ReactNode;
}

export default function Page({
  advice,
  pageNumber,
  totalPages,
  actualPage,
  children,
}: PageProps) {
  return (
    <React.Fragment>
      <div
        className={`page ${actualPage > pageNumber ? "flipped" : ""}`}
        style={{
          zIndex: totalPages - pageNumber,
          top: -pageNumber,
          right: -pageNumber,
        }}
      >
        <div className="pageFront">
          {children ? (
            children
          ) : (
            <React.Fragment>
              <p className="text">
                <span>{advice ? advice.message : ""}</span>
                <span>{advice ? advice.author : ""}</span>
              </p>
              <p>{(pageNumber - 1) * 2 - 1}</p>
            </React.Fragment>
          )}
        </div>
        <div className="pageBack"></div>
      </div>
    </React.Fragment>
  );
}
