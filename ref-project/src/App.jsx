import './App.css'
import Menu from "./components/Menu.jsx";
import {menuItems} from "./siteconfigurations/navigation.js";
import Table from "./components/Table.jsx";
import Parrot from "./components/Parrot.jsx";
import {useState} from "react";
import Edit from "./pages/Edit.jsx";
import File from "./pages/File.jsx";
import View from "./pages/View.jsx";
import Format from "./pages/Format.jsx";
import Window from "./pages/Window.jsx";
import Help from "./pages/Help.jsx";


function App() {

    const [navigation, setNavigation] = useState(4);
    const [backendData, setBackendData] = useState([
        {
            id: 1,
            name: "John",
            age: 30
        }
    ]);

    const page = () => {switch (navigation) {
        case 1:
            return <File />
        case 2:
            return <Edit />
        case 3:
            return <View />
        case 4:
            return <Format />
        case 5:
            return <Window />
        case 6:
            return <Help />
        default:
            return <h1>Default</h1>
    }};


  return (
    <>
        <Menu styling={"menu"} entries={menuItems} setNavigation={setNavigation} navigation={navigation}/>
        <div>
            { page() }
            <h3>{backendData[0].id}</h3>
            <p>{backendData[0].age}</p>
        </div>
        <Table details={"five"}>
            <h1>Table</h1>
            <Parrot />
            <p>Yet more text { 45 + 23 }</p>
        </Table>

    </>
  )
}

export default App
