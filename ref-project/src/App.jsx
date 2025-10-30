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
import RecordsTable from "./components/RecordsTable.jsx";
import Button from "react-bootstrap/Button";
import SearchTable from "./components/SearchTable.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


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

    // const buttonList = [() => { setBackendData([...backendData, { creator: item.creator, title: item.title, identifier: item.identifier }])}]

    const actOnSubmit = (data) => {
        console.log("search");
        setSearchString(`http://libris.kb.se/xsearch?query=forf:(${data.authorFirstName + "+" + data.authorLastName})&format=json`)
    }


  return (
    <Container>
        <Menu entries={menuItems}/>
        <div>
            <Outlet />
            <h2>Saved search</h2>
            <RecordsTable setBackendData={setBackendData} backendData={backendData} />
            <h2>Search</h2>
            <SearchTable search={search} setBackendData={setBackendData} backendData={backendData} />
        </div>



        <form onSubmit={handleSubmit(actOnSubmit)}>
            <Row>
                <Col>
            <label >Author first name: </label>
            <input {...register("authorFirstName")} />
                </Col>
                <Col>
            <label >Author last name: </label>
            <input {...register("authorLastName")} />
                </Col>
                <Col>
                    <Button type="Submit" variant="primary">Search</Button>
                </Col>
            </Row>
        </form>

    </Container>
  )
}

export default App
