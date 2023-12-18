import "./App.css";
import Navbar from "./components/Navbar";
import IPhone15 from "./components/iphone15";
import Dropdown from "./components/Dropdown";
import { iphone15, iphone152 } from "./assets";
function App() {
  return (
    <div className="w-screen h-screen box-border">
      <div className="w-full bg-[#1d1d1f] backdrop-blur-xl z-50 fixed">
        <Navbar></Navbar>
      </div>

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
    </div>
  );
}

export default App;
