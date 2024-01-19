import React, { Suspense } from "react";
import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import MealsLoadingPage from "./loading-out";

export const metadata = {
  title: "All Meals",
  description: "Browse all meals shared by our community.",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
export default async function MealsPage() {
  const meals = await getMeals();
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
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
