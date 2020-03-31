import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./component/Recipe";

const App = () => {
  const appId = "6acfc5e7";
  const appKey = "eec533edf8d9857b574a0be9aeb00d65";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="Search-Form">
        <input
          type="text"
          className="Search-Bar"
          value={search}
          onChange={updateSearch}
          placeholder="Enter an ingredient to find recipes"
        />
        <button type="submit" className="Search-btn">
          Search
        </button>
      </form>
      <div className="recipe-card">
        {recipes.map(rec => (
          <Recipe
            title={rec.recipe.label}
            calories={rec.recipe.calories}
            img_url={rec.recipe.image}
            ingredients={rec.recipe.ingredients}
            source={rec.recipe.source}
            source_url={rec.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
