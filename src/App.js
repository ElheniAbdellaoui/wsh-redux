import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "./redux/action";
import FoodCard from "./component/FoodCard";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodDetails from "./component/FoodDetails";

function App() {
  const [text, setText] = useState("");
  const options = {
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",
    params: {
      "nutrition-type": "cooking",
      "category[0]": "generic-foods",
      "health[0]": "alcohol-free",
      ingr: text,
    },
    headers: {
      "X-RapidAPI-Key": "c78fe4b977msha01bb18580da28cp1a0187jsnc9f0dfa30400",
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };

  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(fetchdata(options));
  };
  const { data, loading } = useSelector((state) => state);
  console.log(data);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <form action="" onSubmit={handlesubmit}>
                  <input
                    type="texte"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <button type="submit">generation food</button>
                </form>

                <div>
                  {loading ? (
                    <h1>getting data </h1>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                      }}
                    >
                      {data.map((el, i) => (
                        <div key={i}>
                          {" "}
                          <FoodCard el={el} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            }
          />
          <Route path="/data/:id" element={<FoodDetails data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
