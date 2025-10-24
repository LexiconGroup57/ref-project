import './App.css'
import Menu from "./components/Menu.jsx";
import {menuItems} from "./siteconfigurations/navigation.js";
import Table from "./components/Table.jsx";
import Parrot from "./components/Parrot.jsx";
import {useEffect, useState} from "react";
import Edit from "./pages/Edit.jsx";
import File from "./pages/File.jsx";
import View from "./pages/View.jsx";
import Format from "./pages/Format.jsx";
import Window from "./pages/Window.jsx";
import Help from "./pages/Help.jsx";
import axios from "axios";


function App() {

    const [navigation, setNavigation] = useState(4);
    const [backendData, setBackendData] = useState([]);
    const [search, setSearch] = useState(null);
    const [searchString, setSearchString] = useState("http://libris.kb.se/xsearch?query=forf:(Ludwig+Wittgenstein)&format=json");

    useEffect(() => {
        console.log("useEffect");
        axios.get(searchString)
            .then(response => {
                setSearch(response.data.xsearch.list);
            })
    }, [searchString])

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
            <h2>Saved search</h2>
            <div className="tableKind">
                { backendData !== null ?
                    backendData.map((item) => (
                        <div className="rowdata" key={item.identifier}>
                            <p>{item.creator}</p>
                            <p>{item.title}</p>
                        </div>))
                    :
                    <div></div>}
            </div>
            <h2>Search</h2>
            <div className="tableKind">
                    { search !== null ?
                        search.map((item) => (
                        <div className="rowdata" key={item.identifier}>
                                <p>{item.creator}</p>
                                <p>{item.title}</p>
                            <button onClick={() => { setBackendData([...backendData, { creator: item.creator, title: item.title, identifier: item.identifier }])}}>Add record</button>
                        </div>))
                        :
                        <div></div>}
            </div>

        </div>
        <button onClick={() => {
            setSearchString("http://libris.kb.se/xsearch?query=forf:(Rem+Koolhaas)&format=json")
        }}>Search for Rem Koolhaas</button>
        <Table details={"five"}>
            <h1>Table</h1>
            <Parrot />
            <p>Yet more text { 45 + 23 }</p>
        </Table>

    </>
  )
}

export default App
