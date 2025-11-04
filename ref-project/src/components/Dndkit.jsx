import React, {useState} from 'react';
import {DndContext} from "@dnd-kit/core";
import Draggable from "./Draggable.jsx";
import Droppable from "./Droppable.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Dndkit = () => {
    const [isDropped, setIsDropped] = useState(false);

    return (
        <DndContext onDragEnd={(event) => {
            if(event.over.id === "droppable") {
                setIsDropped(true);
        }}}>
            <div className="dndkit">
            <h1>dnd kit</h1>
            <Draggable>
                {isDropped ? undefined : <p>This is the dragged part</p>}
            </Draggable>
            <Droppable>
                <p>{isDropped ? "Landed!" : "This will be the goal"}</p>
            </Droppable>
            </div>
        </DndContext>
    );
};

export default Dndkit;