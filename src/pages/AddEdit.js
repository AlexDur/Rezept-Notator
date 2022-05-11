import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEdit = props => {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ingredients, setIngridients] = useState({
    ingr1: "",
    ingr2: "",
    ingr3: "",
  });
  const [description, setDescription] = useState("");

  useEffect(() => {
    const des = localStorage.getItem("description");
    if (des) {
      setDescription(des);
    }

    const ingr = JSON.parse(localStorage.getItem("recipe"));
    if (ingr) {
      setIngridients(ingr.ingredients);
      setTitle(ingr.title);
    }
  }, []);

  const handleChange = event => {
    event.preventDefault();
    const input = event.target.id;
    if (input === "title") {
      setTitle(event.target.value);
    } else if (input === "description") {
      setDescription(event.target.value);
    } else {
      setIngridients(prev => ({
        ...prev,
        [event.target.id]: event.target.value,
      }));
    }
  };

  const handleSave = () => {
    const recipe = { title, ingredients, description };
    const allDataToBeSent = {
      ...recipe,
      id: Math.floor(Math.random() * 10000),
      favorite: Boolean,
      createAt: Date.now(),
    };
    localStorage.setItem("allDataToBeSent", JSON.stringify(allDataToBeSent));
    navigate("/");
  };

  return (
    <>
      <div className="frame">
        <h1>Add/Edit</h1>
        <form>
          <div className="inputs_add_edit">
            <input
              type="text"
              value={title}
              className="input_ae"
              id="title"
              aria-describedby="title"
              placeholder="Title"
              onChange={handleChange}
            />

            <input
              type="text"
              className="input_ae"
              value={ingredients.ingr1}
              id="ingr1"
              aria-describedby="emailHelp"
              placeholder="Ingredient 1"
              onChange={handleChange}
            />
            <input
              type="text"
              className="input_ae"
              id="ingr2"
              value={ingredients.ingr2}
              aria-describedby="emailHelp"
              placeholder="Ingredient 2"
              onChange={handleChange}
            />
            <input
              type="text"
              className="input_ae"
              id="ingr3"
              aria-describedby="emailHelp"
              placeholder="Ingredient 3"
              value={ingredients.ingr3}
              onChange={handleChange}
            />
            <textarea
              type="text"
              value={description}
              className="input_ae_desc"
              id="description"
              aria-describedby="description"
              placeholder="Description"
              onChange={handleChange}
            />
          </div>

          <div className="button_grid">
            <button
              type="submit"
              className="btn btn-primary"
              id="btnBack"
              onClick={() => navigate("/")}
            >
              Back
            </button>
            <button
              type="submit"
              value="Submit"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEdit;
