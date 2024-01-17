import React from "react";
import Link from "next/link";

import classes from "./page.module.css";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{" "}
          <sapn className={classes.heighlight}> by you</sapn>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It&apos;s easy and
          fun
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Sahre yout favorite Recipe</Link>
        </p>
      </header>
      <main></main>
    </>
  );
}
