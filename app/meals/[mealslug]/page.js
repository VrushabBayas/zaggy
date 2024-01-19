import React from "react";

import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

import classes from "./page.module.css";
/**
 * Generates metadata for the meal details page.
 *
 * @param {Object} params - The parameters passed to the component.
 * @param {string} params.mealslug - The slug of the meal.
 * @returns {Object} The generated metadata.
 */
export async function generateMetadata({ params: { mealslug: slug } }) {
  const meal = getMeal(slug);
  if (!meal) {
    return notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}
/**
 * Renders the details of a meal.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.params - The parameters passed to the component.
 * @param {string} props.params.mealslug - The slug of the meal.
 * @returns {JSX.Element} The rendered meal details.
 */
export default function MealDetails({ params }) {
  const slug = params.mealslug;
  const meal = getMeal(slug);
  if (!meal) {
    notFound();
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}> {meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, "<br>"),
          }}
        ></p>
      </main>
    </>
  );
}
