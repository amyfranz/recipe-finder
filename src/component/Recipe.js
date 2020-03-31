import React, {Component} from "react";
import style from "./Recipe.module.css";

const Recipe = ({ title, calories, img_url, ingredients, source, source_url}) => {
  return (
    <div key={title + calories} className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {Math.ceil(calories)}</p>
      <img src={img_url} alt="" className={style.image} />
        <a href={source_url} target="_blank"><b>{source}</b></a>
    </div>
  );
};

export default Recipe;
