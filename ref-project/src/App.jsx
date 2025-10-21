
import './App.css'
import Parrot from "./components/Parrot.jsx";
import Cage from "./components/Cage.jsx";
import Feather from "./components/Feather.jsx";

export const Helper = () => {
    return ""
}

function App() {

    const caught = true;

  return (
    <>
        <Parrot />
        {caught ? <Cage>
            { 4 + 7 }
        </Cage> : <Feather />}
    </>
  )
}

export default App
