import React from "react";

const colors = [
  { Sagittarius: "Orange" },
  { Capricorn: "Yellow" },
  { Aquarius: "Teal" },
  { Aries: "Copper" },
  { Libra: "Peach" },
  { Scorpio: "Sky Blue" },
  { Virgo: "Orange" },
  { Taurus: "Purple" },
  { Pisces: "Copper" },
  { Gemini: "Red" },
  { Leo: "Teal" },
  { Cancer: "Blue" },
];

function ColorText(starsign) {
  return (
    <div>
      <p>{colors.value}</p>
    </div>
  );
}

export default ColorText;
