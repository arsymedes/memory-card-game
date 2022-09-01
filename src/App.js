import { useState, useEffect } from "react";
import Card from "./components/Card"
import GenshinLogo from "./components/GenshinLogo";
import Albedo from "./images/Character_Albedo_Card.png";
import Aloy from "./images/Character_Aloy_Card.png";
import Amber from "./images/Character_Amber_Card.png";
import AratakiItto from "./images/Character_Arataki_Itto_Card.png";
import Barbara from "./images/Character_Barbara_Card.png";
import Beidou from "./images/Character_Beidou_Card.png";
import Bennett from "./images/Character_Bennett_Card.png";
import Chongyun from "./images/Character_Chongyun_Card.png";
import Collei from "./images/Character_Collei_Card.png";
import Diluc from "./images/Character_Diluc_Card.png";
import Diona from "./images/Character_Diona_Card.png";
import Eula from "./images/Character_Eula_Card.png";
import Fischl from "./images/Character_Fischl_Card.png";

function App() {
  const characters = {
    Albedo,
    Aloy,
    Amber,
    AratakiItto,
    Barbara,
    Beidou,
    Bennett,
    Chongyun,
    Collei,
    Diluc,
    Diona,
    Eula,
    Fischl,
  };

  return (
    <div className="App bg-genshin-liyue h-screen bg-cover grid grid-rows-[125px_6fr_1fr_75px] gap-8 justify-items-center items-center pt-8">
      <GenshinLogo />
      <div className="flex gap-4">
        <Card source={Amber}/>
        <Card source={Collei}/>
        <Card source={Fischl}/>
      </div>
      <div className="text-xl font-bold text-white flex justify-center gap-10">
        <div>High Score: 50</div>
        <div>Current Score: 10</div>
      </div>
      <div className="text-white bg-black w-full h-full grid grid-cols-3 place-items-center font-semibold text-sm">
      <div>Inspiration Taken From <a target="_blank" rel="noreferrer" href="https://genshin.hoyoverse.com/en/home" className="border-b-[1px] hover:text-orange-600 hover:border-orange-600 transition">Genshin Impact</a></div>
        <div className="text-3xl font-bold">Made By The Archons</div>
        <div>Wallpaper by <a target="_blank" rel="noreferrer" href="https://www.reddit.com/user/Sevenix2/" className="border-b-[1px] hover:text-orange-600 hover:border-orange-600 transition"> u/Sevenix2</a></div>
      </div>
    </div>
  );
}

export default App;
