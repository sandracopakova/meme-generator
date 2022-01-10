import React, { useState, useEffect } from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setallMemeImages] = useState(memesData);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setallMemeImages(data.data.memes));
  }, []);

  function getMemeImage(e) {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    setMeme((prev) => ({
      ...prev,
      randomImage: allMemeImages[randomNumber].url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form__input" name="topText" value={meme.topText} onChange={handleChange} />
        <input type="text" placeholder="Bottom text" className="form__input" name="bottomText" value={meme.bottomText} onChange={handleChange} />
        <button className="form__btn" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme__image" />
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
