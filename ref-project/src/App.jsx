import './App.css'
import Menu from "./components/Menu.jsx";
import {menuItems} from "./siteconfigurations/navigation.js";
import Table from "./components/Table.jsx";
import Parrot from "./components/Parrot.jsx";


function App() {

  return (
    <>
        <Menu styling={"menu"} entries={menuItems}/>
        <Table details={"five"}>
            <h1>Table</h1>
            <Parrot />
            <p>Yet more text { 45 + 23 }</p>
        </Table>
    </>
  )
}

export default App
