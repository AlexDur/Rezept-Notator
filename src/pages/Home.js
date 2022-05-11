import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [radio, setRadio] = useState({
    radioOne: false,
    radioTwo: false,
    radioThree: false,
  });

  const handleChange = event => {
    const input = event.target.value;

    setDescription(input);
  };
  const onValueChange = event => {
    setDescription("");
    const input = event.target.name;
    if (input == "radioOne") {
      setRadio({ radioOne: true, radioTwo: false, radioThree: false });
    }
    if (input == "radioTwo") {
      setRadio({ radioOne: false, radioTwo: true, radioThree: false });
    }
    if (input == "radioThree") {
      setRadio({ radioOne: false, radioTwo: false, radioThree: true });
    }
    console.log(radio);
  };

  const handleSubmit = () => {
    if (radio.radioOne || radio.radioTwo || radio.radioThree) {
      localStorage.setItem("description", description);
      localStorage.setItem("radio", JSON.stringify(radio));
      navigate("/add_edit");
    }
  };

  useEffect(() => {
    const des = localStorage.getItem("description");
    const radio = JSON.parse(localStorage.getItem("radio"));
    const recipe = JSON.parse(localStorage.getItem("recipe"));
    if (recipe) {
      setTitle(recipe.title);
    }
    if (radio && des) {
      setDescription(des);
      setRadio(radio);
    }
  }, []);

  return (
    <>
      <div className="frame">
        <h1>Home</h1>
        <form>
          <div className="inputs_home">
            <div className="outer">
              <div className="inner_circle">
                <div className="floatRight">
                  <input
                    type="radio"
                    name="radioOne"
                    checked={radio.radioOne}
                    onChange={onValueChange}
                  />
                </div>
                <div className="title_home">
                  <span>Title: {radio.radioOne && title} </span>
                </div>
              </div>

              <input
                type="text"
                className="input_desc"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Description (short)"
                disabled={!radio.radioOne}
                onChange={handleChange}
                value={radio.radioOne ? description : ""}
              />
            </div>
            <br />
            <div className="outer">
              <div className="inner_circle">
                <div className="floatRight">
                  <input
                    type="radio"
                    name="radioTwo"
                    checked={radio.radioTwo}
                    onChange={onValueChange}
                  />
                </div>
                <div className="title_home">
                  <span> Title: {radio.radioTwo && title}</span>
                </div>
              </div>
              <input
                type="text"
                className="input_desc"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Description (short)"
                disabled={!radio.radioTwo}
                onChange={handleChange}
                value={radio.radioTwo ? description : ""}
              />
            </div>

            <br />
            <div className="outer">
              <div className="inner_circle">
                <div className="floatRight">
                  <input
                    type="radio"
                    name="radioThree"
                    checked={radio.radioThree}
                    onChange={onValueChange}
                  />
                </div>
                <div className="title_home">
                  <span>Title: {radio.radioThree && title}</span>
                </div>
              </div>

              <input
                type="text"
                className="input_desc"
                aria-describedby="emailHelp"
                placeholder="Description (short)"
                disabled={!radio.radioThree}
                onChange={handleChange}
                value={radio.radioThree ? description : ""}
              />
            </div>
            <br />
          </div>

          <div class="btn_home_add">
            <button
              type="submit"
              class="btn_add btn-primary"
              onClick={() => navigate("/add_edit")}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;

{
  /* <form>
  <div class="mb-3">
    <div>
      <input
        type="text"
        class="form-title"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Title"
      />
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      </div>
    </div>
    <div className="checkcircle">
      <input
        type="text"
        class="form-desc"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Description (short)"
      />
    </div>
    <br />

  </div>

  <div className="button_grid">
    <button type="submit" class="btn btn-primary">
      Back
    </button>

    <button type="submit" class="btn btn-primary">
      Save
    </button>
  </div>
</form>; */
}
