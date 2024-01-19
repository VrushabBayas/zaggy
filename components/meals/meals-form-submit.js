"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import classes from "./meals-form-submit.module.css";
export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <p className={classes.actions}>
      <button type="submit" disabled={pending}>
        {pending ? "Sharing..." : "Share Meal"}
      </button>
    </p>
  );
}
