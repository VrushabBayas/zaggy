import React from "react";

import classes from "./loading.module.css";

function MealsLoadingPage(props) {
  return <p className={classes.loading}>Fetching meals...</p>;
}

export default MealsLoadingPage;
