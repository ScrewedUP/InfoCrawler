import Navbar from "./Components/Navbar";
import Description from "./Components/Description";
import Card from "./Components/Card";
function App() {
  return (
    <div className="bg-gradient-to-t from-indigo-800 to-stone-900 h-screen w-screen">
      <div className="flex flex-col justify-evenly items-center">
        <Navbar />
        <Description />
        <Card />
      </div>
    </div>
  );
}

export default App;
