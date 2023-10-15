import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [recipeForm, setRecipeForm] = useState(initialFormState);

  const handleChange = (event) => {
    const value = event.target.value;
    setRecipeForm({
      ...recipeForm,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted", recipeForm);
    setRecipeForm({ ...initialFormState });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={recipeForm.name}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  name="cuisine"
                  type="text"
                  id="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={recipeForm.cuisine}
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  name="photo"
                  type="url"
                  id="photo"
                  placeholder="URL"
                  onChange={handleChange}
                  value={recipeForm.photo}
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea 
                name="ingredients" 
                id="ingredients"
                placeholder="Ingredients"
                required={true}
                onChange={handleChange}
                value={recipeForm.ingredients} 
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea 
                name="preparation"
                id="preparation"
                placeholder="Preparation"
                required={true}
                onChange={handleChange}
                value={recipeForm.preparation}
                />
              </label>
            </td>
            <td>
              <button type="submit" onClick={createRecipe}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
