"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

const isInvalidText = (text) => {
  return !text || text.trim() === "";
};
/**
 * Shares a meal by creating a new meal object with the provided form data.
 * @param {FormData} formData - The form data containing the meal details.
 * @returns {Promise<void>} - A promise that resolves when the meal is shared.
 */
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    id: parseInt((Math.random().toString() * 1000 * 100) / 10),
  };
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.indexOf("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input, please try again.",
    };
  }
  saveMeal(meal);
  redirect("/meals");
}
