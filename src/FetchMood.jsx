import React from "react";

function FetchMood({ starsign }) {
  const [mood, setMood] = React.useState("");
  const [moodVisible, setMoodVisibility] = React.useState(false);

  React.useEffect(() => {
    if (starsign.length > 0) {
      fetch(
        `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${starsign}&day=today`,
        {
          method: "POST",
          headers: {
            "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
            "x-rapidapi-key": import.meta.env.VITE_HOROSCOPE_API_KEY,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMood(data.mood);
        });
    }
  }, [starsign]);

  return (
    <div>
      <button
        onClick={() => {
          setMoodVisibility(!moodVisible);
        }}
      >
        Click here to reveal your mood
      </button>
      {moodVisible ? (
        <p> You are feeling {mood} today </p>
      ) : (
        <div>Future Hidden</div>
      )}
    </div>
  );
}

export default FetchMood;
