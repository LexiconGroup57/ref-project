import React from 'react';
import {useDroppable} from "@dnd-kit/core";

const Droppable = (props) => {

    const {isOver, setNodeRef} = useDroppable({
        id: "droppable",
    });

    return (
        <div ref={setNodeRef} style={{color: isOver ? "green" : "red"}}>
            { props.children}
        </div>
    );
};

export default Droppable;