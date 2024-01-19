"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInutRef = useRef();
  const onFilePickHandler = () => {
    imageInutRef.current.click();
  };

  const onImageChnagehandler = (event) => {
    const file = event.target.files[0];
    if (!file) setPickedImage(null);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>Please pick an image.</p>}
          {pickedImage && <Image src={pickedImage} alt="Preview" fill />}
        </div>
        <input
          type="file"
          id={name}
          accept="image/jpg,image/png,image/jpeg"
          name={name}
          className={classes.input}
          ref={imageInutRef}
          onChange={onImageChnagehandler}
        />
        <button
          className={classes.button}
          type="button"
          onClick={onFilePickHandler}
        >
          Pick Image
        </button>
      </div>
    </div>
  );
}
