"use client";
import React from "react";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An Error Occured!</h1>
      <p>Failed to load data.Please try in sometime.</p>
    </main>
  );
}
