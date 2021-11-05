import React from "react";

const View = ({ pokemonItem, handleClick }) => {
  //
  // console.log(pokemonItem, "pokemonItem");
  //
  return (
    <div className="viewItem" onClick={() => handleClick(pokemonItem + 1)}>
      {/*  */}
      {/* 後でここに記述 */}
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokemonItem + 1
        }.png`}
        alt={pokemonItem}
      />
      {/*  */}
    </div>
  );
};

export default View;