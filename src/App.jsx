import "./App.css";
import Navbar from "./components/Navbar";
import IPhone15 from "./components/iphone15";
import Dropdown from "./components/Dropdown";
import { iphone15, iphone152 } from "./assets";
import Player from "./components/Player";
import { useState } from "react";
import Featuredproducts from "./components/Featuredproducts";
function App() {
  const [isBlur, setIsBlur] = useState(false);

  function blurHandler(evt) {
    setIsBlur(evt);
  }

  return (
    <div className={`w-screen h-screen box-border overflow-x-hidden`}>
      <div className="w-full bg-[#1d1d1f]/90 z-50 fixed backdrop-blur-[10px]">
        <Navbar blurHandler={blurHandler}></Navbar>
      </div>

      {isBlur && (
        <div className="bg-[#1d1d1f]/10 backdrop-blur-lg z-[25] w-screen h-screen absolute overflow-y-scroll"></div>
      )}

      <div>
        <IPhone15
          name="iPhone 15 Pro"
          title="Titanium. So strong. So light. So Pro."
          image={iphone15}
          color="white"
        ></IPhone15>
      </div>
      <div>
        <IPhone15
          name="iPhone 15"
          title="New camera. New design. Newphoria."
          image={iphone152}
          color="black"
        ></IPhone15>
      </div>
      <div>
        <Player></Player>
      </div>
      <div>
        <Featuredproducts></Featuredproducts>
      </div>
    </div>
  );
}

export default App;
