import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes, deleteRecipe }) {
  const rows = recipes.map(({name, cuisine, photo, ingredients, preparation}, index) => (
    <tr key={index}>
      <th>
        {name}
      </th>
      <th>
        {cuisine}
      </th>
      <th>
        {photo}
      </th>
      <th>
        {ingredients}
      </th>
      <th>
        {preparation}
      </th>
    </tr>
  ))
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          {rows}
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeView deleteRecipe={() => deleteRecipe(index)}
            key={index}
            recipe={recipes} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
