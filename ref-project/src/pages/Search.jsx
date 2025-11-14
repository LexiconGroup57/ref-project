import React, {useEffect, useState} from 'react';
import SearchTable from "../components/SearchTable.jsx";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {useForm} from "react-hook-form";

const Search = () => {

    const [searchString, setSearchString] = useState("http://libris.kb.se/xsearch?query=forf:(Ludwig+Wittgenstein)&format=json");
    const [search, setSearch] = useState([]);

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        console.log(searchString);
        axios.get(searchString)
            .then(response => {
                setSearch(response.data.xsearch.list);
            })
    }, [searchString])
    const postRecord = (item) => {
        axios.post("http://localhost:5287/api/references",
            {
                creator: item.creator,
                title: item.title,
                publisher: item.publisher,
                date: item.date,
                id: item.id,
            })

    }

    const actOnSubmit = (data) => {
        let hasForf = data.authorFirstName || data.authorLastName;
        let hasTitle = data.title.length > 0;
        let hasForl = data.publisher.length > 0;
        setSearchString(`http://libris.kb.se/xsearch?query=
        ${hasForf ? `forf:(${data.authorFirstName + "+" + data.authorLastName})`: ""}
        ${hasTitle ? `tit:(${data.title})` : ""}
        ${hasForl ? `forl:(${data.publisher})` : ""}
        &format=json`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(actOnSubmit)}>
                <Row className="mt-2">
                    <Col>
                        <label >Author first name: </label>
                        <input {...register("authorFirstName")} />
                    </Col>
                    <Col>
                        <label >Author last name: </label>
                        <input {...register("authorLastName")} />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <label>Title: </label>
                        <input {...register("title")} />
                    </Col>
                    <Col>
                        <label >Publisher: </label>
                        <input {...register("publisher")} />
                    </Col>
                    <Col>
                        <Button type="Submit" variant="primary">Search</Button>
                    </Col>
                </Row>
            </form>

            <h2>Search</h2>
            <SearchTable search={search} postRecord={postRecord} />
        </div>
    );
};

export default Search;