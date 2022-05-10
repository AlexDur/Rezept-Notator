import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const [recipe, setRecipe] = useState({});
  let navigate = useNavigate();

  const handleDelete = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    const recipe = JSON.parse(localStorage.getItem("recipe"));
    setRecipe(recipe);
  }, []);
  return (
    <>
      <div className="frame">
        <div className="detail_topline">
          <button type="submit" class="btn_small" onClick={() => navigate("/")}>
            Back
          </button>
          <h1>Detail</h1>
          <input
            type="checkbox"
            class="form-check-input"
            id="checkbox_reddot"
          />
        </div>
        <form>
          <div className="detail_data">
            <h3>{recipe?.title}</h3>
            <br />
            <table>
              <tr>{recipe?.ingredients?.ingr1}</tr>
              <tr>{recipe?.ingredients?.ingr2}</tr>
              <tr>{recipe?.ingredients?.ingr3}</tr>
            </table>
            <br />
            <p>{recipe?.description}</p>
          </div>
        </form>
        <div className="button_grid">
          <button type="submit" class="btn btn-primary" onClick={handleDelete}>
            Delete
          </button>

          <button
            type="submit"
            class="btn btn-primary"
            onClick={() => navigate("/add_edit")}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
