"use client";
import React from "react";
import { useFormState } from "react-dom";

import ImagePicker from "./image-picker";
import MealsFormSubmit from "./meals-form-submit";

import { shareMeal } from "@/lib/actions";

import classes from "./meal-form.module.css";
export default function MealForm() {
  const [state, formAction] = useFormState(shareMeal, { message: null });
  return (
    <form className={classes.form} action={formAction}>
      <div className={classes.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" />
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows="10"
          required
        ></textarea>
      </p>
      <ImagePicker label="Meal Image" name="image" />
      {state.message && (
        <p className={classes["error-message"]}>{state.message}</p>
      )}
      <MealsFormSubmit />
    </form>
  );
}
