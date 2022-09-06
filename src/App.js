import { useState, useEffect } from "react";
import Card from "./components/Card";
import GenshinLogo from "./components/GenshinLogo";
import charactersCopy from "./Characters";
import loadingIcon from "./images/loading.png"

function App() {
  const characters = [...charactersCopy];
  const [pickedChar, setPickedChar] = useState([]);
  const [unpickedChar, setUnpickedChar] = useState([...characters]);
  const [cardChars, setCardChars] = useState(randomizeElement());
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [gameEnd, setGameEnd] = useState(true)

  useEffect(() => {
    setIsLoaded(false)
    setTimeout(() => {
      setCardChars(randomizeElement())
      setIsLoaded(true)
    }, 100);
  }, [pickedChar]);

  function randomElement(list) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function randomizeElement() {
    let tempList = [
      randomElement(unpickedChar),
      randomElement(characters),
      randomElement(characters),
    ];
    return shuffle(tempList);
  }

  function handleCardClick(char) {
    if (pickedChar.includes(char)) {
      setGameEnd(true)
    } else {
      setScore(score + 1)
      if (score > highScore) {setHighScore(score)}
      setPickedChar([...pickedChar, char]);
      setUnpickedChar([...unpickedChar].filter((el) => el !== char));
    }
  }

  function handlePlayAgain() {
    console.log("Chungus");
    setPickedChar([])
    setUnpickedChar([...characters])
    setScore(0)
    setGameEnd(false)
  }

  function contentRender() {
    if (gameEnd) {
      return (
        <div className="text-white flex flex-col gap-8 items-center bg-black px-10 py-10 relative top-8 rounded-3xl">
          <div className="text-7xl font-bold">Game End</div>
          <button onClick={handlePlayAgain} className="font-bold btn-md btn btn-primary w-40">Play Again</button>
          <div className="text-3xl font-bold flex justify-center gap-10">
            <div>High Score: {highScore}</div>
            <div>Current Score: {score}</div>
          </div>
        </div>
      )
    } else if (isLoaded) {
      return (
        <div className={"flex gap-4"}>
          <Card char={cardChars[0]} handleCardClick={handleCardClick} />
          <Card char={cardChars[1]} handleCardClick={handleCardClick} />
          <Card char={cardChars[2]} handleCardClick={handleCardClick} />
        </div>
      )
    } else {
      return (
        <div>
          <img src={loadingIcon} alt="" />
        </div>
      )
    }
  }

  return (
    <div className="App bg-genshin-liyue h-screen bg-cover grid grid-rows-[125px_275px_1fr_75px] gap-8 justify-items-center items-center pt-8">
      <GenshinLogo />
      <div>
        {contentRender()}
      </div>
      <div className={`text-3xl font-bold text-white flex justify-center gap-10`}>
        <div className={gameEnd ? "hidden" : null}>High Score: {highScore}</div>
        <div className={gameEnd ? "hidden" : null}>Current Score: {score}</div>
      </div>
      <div className="text-white bg-black w-full h-full grid grid-cols-3 place-items-center font-semibold text-sm">
        <div>
          Inspiration Taken From{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://genshin.hoyoverse.com/en/home"
            className="border-b-[1px] hover:text-orange-600 hover:border-orange-600 transition"
          >
            Genshin Impact
          </a>
        </div>
        <div className="text-3xl font-bold">Made By The Archons</div>
        <div>
          Wallpaper by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.reddit.com/user/Sevenix2/"
            className="border-b-[1px] hover:text-orange-600 hover:border-orange-600 transition"
          >
            {" "}
            u/Sevenix2
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
