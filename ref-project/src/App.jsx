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
import Table from 'react-bootstrap/Table';
import {Outlet} from "react-router";


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


    const actOnSubmit = (data) => {
        setSearchString(`http://libris.kb.se/xsearch?query=forf:(${data.authorFirstName + "+" + data.authorLastName})&format=json`)
    }


  return (
    <>
        <Menu styling={"menu"} entries={menuItems}/>
        <div>
            <Outlet />
            <h2>Saved search</h2>
            <Table striped hover>
                <thead></thead>
                <tbody>
                    { backendData !== null ?
                        backendData.map((item) => (
                            <tr key={item.identifier}>
                                <td>{item.creator}</td>
                                <td>{item.title}</td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td>..</td>
                            <td>..</td>
                        </tr>
                    }

                </tbody>
            </Table>
            <h2>Search</h2>
            <Table striped hover>
                <thead></thead>
                <tbody>
                { search !== null  ?
                    search.map((item) => (
                        <tr key={item.identifier}>
                            <td>{item.creator}</td>
                            <td>{item.title}</td>
                            <td><button onClick={() => { setBackendData([...backendData, { creator: item.creator, title: item.title, identifier: item.identifier }])}}>Add record</button></td>
                        </tr>
                    ))
                    :
                    <tr>
                        <td>..</td>
                        <td>..</td>
                    </tr>
                }

                </tbody>
            </Table>


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

        <Table details={"five"}>
            <h1>Table</h1>
            <Parrot />
            <p>Yet more text { 45 + 23 }</p>
        </Table>

    </>
  )
}

export default App
