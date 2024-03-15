import React from "react";
import "../../index.css"

export default function Loading() {
  return function Loading() {
    return (
      <section className="app-loader">
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
          <h2>🌀 Loading...</h2>
        </div>
      </section>
    );
  };
}
