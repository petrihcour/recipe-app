import React from "react";

// Component that displays a single recipe

function RecipeView({ recipe, deleteRecipe }) {
    return (
        <tr className="recipe">
           <td>{recipe.name}</td>
           <td>{recipe.cuisine}</td>
           <td>{recipe.photo && recipe.photo.includes("http") ? (
            <img src={recipe.photo} alt="Posted Recipe"  />
           ) : (
            "No Image"
           )}
           </td>
           <td className="content_td"><p>{recipe.ingredients}</p></td>
           <td className="content_td"><p>{recipe.preparation}</p></td>
           <td>
            <button name="delete" onClick={deleteRecipe}>Delete</button>
           </td>
        </tr>
    )
}

export default RecipeView;