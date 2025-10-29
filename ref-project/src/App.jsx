import './App.css'
import Menu from "./components/Menu.jsx";
import {menuItems} from "./siteconfigurations/navigation.js";
import Parrot from "./components/Parrot.jsx";
import {useEffect, useState} from "react";
import Edit from "./pages/Edit.jsx";
import File from "./pages/File.jsx";
import View from "./pages/View.jsx";
import Format from "./pages/Format.jsx";
import Window from "./pages/Window.jsx";
import Help from "./pages/Help.jsx";
import axios from "axios";
import {useForm} from "react-hook-form";
import {Outlet} from "react-router";
import CustomTable from "./components/CustomTable.jsx";
import Button from "react-bootstrap/Button";


function App() {

    const { register, handleSubmit } = useForm();

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

    const buttonList = [() => { setBackendData([...backendData, { creator: item.creator, title: item.title, identifier: item.identifier }])}]

    const actOnSubmit = (data) => {
        setSearchString(`http://libris.kb.se/xsearch?query=forf:(${data.authorFirstName + "+" + data.authorLastName})&format=json`)
    }


  return (
    <div id="main-container">
        <Menu styling={"menu"} entries={menuItems}/>
        <div>
            <Outlet />
            <h2>Saved search</h2>
            <CustomTable records={backendData} setBackendData={setBackendData} backendData={backendData} buttonList={buttonList}/>
            <h2>Search</h2>
            <CustomTable records={search} setBackendData={setBackendData} backendData={backendData} buttonList={buttonList}/>


        </div>
        <button onClick={() => {
            setSearchString("http://libris.kb.se/xsearch?query=forf:(Rem+Koolhaas)&format=json")
        }}>Search for Rem Koolhaas</button>
        <form onSubmit={handleSubmit(actOnSubmit)}>
            <label >Author first name: </label>
            <input {...register("authorFirstName")} />
            <label >Author last name: </label>
            <input {...register("authorLastName")} />
            <input type="submit" value="Submit" />
        </form>

    </div>
  )
}

export default App
