import { useState } from "react";

export default function SearchBar(props) {
  const [id, setid] = useState("");
  const change = (event) => {
    setid(event.target.value);
  };

  return (
    <div>
      <input type="search" onChange={change} />

      <button
        onClick={() => {
          props.onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
