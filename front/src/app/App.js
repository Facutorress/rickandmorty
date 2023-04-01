import "./App.css";
import { useState } from "react";
import Nav from "../components/nav/Nav";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Detail from "../views/Detail";
import About from "../views/about";
import Cards from "../components/Cards";
import Form from "../components/form/Form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Favorites from "../views/Favorites";

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "torresfacundo.lt@gmail.com";
  const password = "dell24";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else alert("nono papa es mayores de 18");
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const [characters, setCharacters] = useState([]);
  const URL = "http://localhost:3001/rickandmorty";

  const onSearch = (id) => {
    fetch(`${URL}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };
  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailid" element={<Detail />} />
        <Route path="/favorites" element={<Favorites/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
