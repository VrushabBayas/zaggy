"use server";
/**
 * Shares a meal by creating a new meal object with the provided form data.
 * @param {FormData} formData - The form data containing the meal details.
 * @returns {Promise<void>} - A promise that resolves when the meal is shared.
 */
export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    id: parseInt((Math.random().toString() * 1000 * 100) / 10),
  };
}
